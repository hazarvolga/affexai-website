import Database from "better-sqlite3";
import * as path from "path";
import * as fs from "fs";
import { getConfig } from "../config";
import { logger } from "./logger";
import { Lead, LeadStatus } from "../types";

let dbInstance: Database.Database | null = null;

export function getDatabase(): Database.Database {
  if (dbInstance) {
    return dbInstance;
  }

  const config = getConfig();
  const dbPath = path.resolve(config.DATABASE_PATH);

  // Ensure database parent directory exists
  const parentDir = path.dirname(dbPath);
  if (!fs.existsSync(parentDir)) {
    fs.mkdirSync(parentDir, { recursive: true });
  }

  logger.info({ database_path: dbPath }, "Initializing SQLite Database");
  const db = new Database(dbPath);

  // Set WAL Mode for transactional integrity and concurrency performance
  db.pragma("journal_mode = WAL");
  dbInstance = db;
  return dbInstance;
}

export function initDatabase(): void {
  const db = getDatabase();

  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id TEXT PRIMARY KEY,
      company_name TEXT NOT NULL,
      website TEXT NOT NULL UNIQUE,
      country TEXT,
      industry TEXT,
      contact_name TEXT,
      contact_role TEXT,
      email TEXT,
      status TEXT NOT NULL,
      crawled_text TEXT,
      crawl_hash TEXT,
      icp_score INTEGER,
      observed_issues TEXT,
      risks TEXT,
      outreach_draft TEXT,
      raw_dify_response TEXT,
      error_message TEXT,
      retry_count INTEGER DEFAULT 0,
      pipeline_run_id TEXT,
      prompt_version TEXT,
      human_reviewed INTEGER DEFAULT 0,
      crawl_duration_ms INTEGER,
      dify_duration_ms INTEGER,
      total_duration_ms INTEGER,
      audit_generated_at TEXT,
      last_updated TEXT NOT NULL
    );
  `);

  logger.info("Database schema initialized successfully (WAL mode enabled)");
}

export function seedSampleLeadsIfEmpty(): void {
  const db = getDatabase();

  const countQuery = db.prepare("SELECT COUNT(*) as count FROM leads");
  const result = countQuery.get() as { count: number } | undefined;

  if (result && result.count > 0) {
    logger.info("Leads table already populated, skipping seeding.");
    return;
  }

  const samplePath = path.resolve(__dirname, "../../data/leads.sample.json");
  if (!fs.existsSync(samplePath)) {
    logger.warn({ samplePath }, "Sample leads file not found, skipping seeding.");
    return;
  }

  try {
    const rawData = fs.readFileSync(samplePath, "utf-8");
    const sampleLeads = JSON.parse(rawData) as Array<{
      id: string;
      companyName: string;
      website: string;
      country?: string;
      industry?: string;
      contactName?: string;
      contactRole?: string;
      email?: string;
      status: string;
    }>;

    logger.info({ count: sampleLeads.length }, "Seeding database with sample leads");

    const insertLead = db.prepare(`
      INSERT INTO leads (
        id, company_name, website, country, industry, contact_name, contact_role, email, status, last_updated
      ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
      )
    `);

    const transaction = db.transaction((leads: any[]) => {
      for (const lead of leads) {
        insertLead.run(
          lead.id,
          lead.companyName,
          lead.website,
          lead.country ?? null,
          lead.industry ?? null,
          lead.contactName ?? null,
          lead.contactRole ?? null,
          lead.email ?? null,
          lead.status,
          new Date().toISOString()
        );
      }
    });

    transaction(sampleLeads);
    logger.info("Sample leads seeded successfully.");
  } catch (err) {
    logger.error({ err }, "Failed to seed sample leads database");
  }
}

export function getEligibleLeads(maxRetryCount: number): Lead[] {
  const db = getDatabase();
  // Fetch leads that are:
  // - "New", "Crawled", "Audit Failed" (for retrying)
  // - retry_count is strictly LESS than maxRetryCount
  const query = db.prepare(`
    SELECT * FROM leads 
    WHERE (status IN ('New', 'Crawled', 'Audit Failed'))
      AND (retry_count < ?)
  `);
  return query.all(maxRetryCount) as Lead[];
}

export function getLeadByWebsite(website: string): Lead | null {
  const db = getDatabase();
  const query = db.prepare("SELECT * FROM leads WHERE website = ?");
  const result = query.get(website);
  return result ? (result as Lead) : null;
}

export function updateLeadStatus(id: string, status: LeadStatus): void {
  const db = getDatabase();
  const query = db.prepare(`
    UPDATE leads 
    SET status = ?, last_updated = ?
    WHERE id = ?
  `);
  query.run(status, new Date().toISOString(), id);
}

export function saveLeadCrawl(
  id: string,
  crawledText: string,
  crawlHash: string,
  crawlDurationMs: number,
  pipelineRunId: string
): void {
  const db = getDatabase();
  const query = db.prepare(`
    UPDATE leads 
    SET status = 'Crawled',
        crawled_text = ?,
        crawl_hash = ?,
        crawl_duration_ms = ?,
        pipeline_run_id = ?,
        last_updated = ?
    WHERE id = ?
  `);
  query.run(crawledText, crawlHash, crawlDurationMs, pipelineRunId, new Date().toISOString(), id);
}

export function saveAuditResult(
  id: string,
  params: {
    icpScore: number;
    observedIssues: string; // JSON string
    risks: string; // JSON string
    outreachDraft: string;
    rawDifyResponse: string;
    promptVersion: string;
    difyDurationMs: number;
    totalDurationMs: number;
    pipelineRunId: string;
  }
): void {
  const db = getDatabase();
  const query = db.prepare(`
    UPDATE leads 
    SET status = 'Draft Ready',
        icp_score = ?,
        observed_issues = ?,
        risks = ?,
        outreach_draft = ?,
        raw_dify_response = ?,
        prompt_version = ?,
        dify_duration_ms = ?,
        total_duration_ms = ?,
        pipeline_run_id = ?,
        audit_generated_at = ?,
        error_message = NULL,
        last_updated = ?
    WHERE id = ?
  `);
  query.run(
    params.icpScore,
    params.observedIssues,
    params.risks,
    params.outreachDraft,
    params.rawDifyResponse,
    params.promptVersion,
    params.difyDurationMs,
    params.totalDurationMs,
    params.pipelineRunId,
    new Date().toISOString(),
    new Date().toISOString(),
    id
  );
}

export function saveLeadError(
  id: string,
  errorMessage: string,
  rawDifyResponse: string | null,
  crawlDurationMs: number | null,
  difyDurationMs: number | null,
  totalDurationMs: number | null
): void {
  const db = getDatabase();
  const query = db.prepare(`
    UPDATE leads 
    SET status = 'Audit Failed',
        error_message = ?,
        raw_dify_response = COALESCE(?, raw_dify_response),
        crawl_duration_ms = COALESCE(?, crawl_duration_ms),
        dify_duration_ms = COALESCE(?, dify_duration_ms),
        total_duration_ms = COALESCE(?, total_duration_ms),
        retry_count = retry_count + 1,
        last_updated = ?
    WHERE id = ?
  `);
  query.run(
    errorMessage,
    rawDifyResponse,
    crawlDurationMs,
    difyDurationMs,
    totalDurationMs,
    new Date().toISOString(),
    id
  );
}
