/**
 * AFFEXAI Outbound Engine MVP
 * Type Definitions
 */

export type LeadStatus =
  | "New"
  | "Crawled"
  | "Audit Failed"
  | "Draft Ready"
  | "Approved"
  | "Sent";

export type FailureReason =
  | "crawl_timeout"
  | "crawl_network"
  | "dify_timeout"
  | "dify_auth"
  | "dify_malformed_json"
  | "validation_failed"
  | "retry_limit_exceeded"
  | "unknown_error";

export type FailureClassification = FailureReason;

export interface Lead {
  id: string;
  company_name: string;
  website: string;
  country: string | null;
  industry: string | null;
  contact_name: string | null;
  contact_role: string | null;
  email: string | null;
  status: LeadStatus;
  crawled_text: string | null;
  crawl_hash: string | null;
  icp_score: number | null; // Integer 0-10
  observed_issues: string | null; // JSON array of 3 strings
  risks: string | null; // JSON array of 2 strings
  outreach_draft: string | null;
  raw_dify_response: string | null;
  error_message: string | null;
  retry_count: number;
  pipeline_run_id: string | null;
  prompt_version: string | null;
  human_reviewed: number; // 0 or 1
  crawl_duration_ms: number | null;
  dify_duration_ms: number | null;
  total_duration_ms: number | null;
  audit_generated_at: string | null;
  last_updated: string;
}

export interface CrawlResult {
  sourceUrl: string;
  crawlerUsed: "primary" | "backup";
  text: string;
  crawl_duration_ms: number;
}

export interface DifyAuditResponse {
  icpScore: number;
  observedIssues: [string, string, string]; // exactly 3 items
  risks: [string, string]; // exactly 2 items
  outreachDraft: string;
}

export interface AppConfig {
  DIFY_API_KEY: string;
  DIFY_BASE_URL: string;
  PRIMARY_CRAWLER_URL: string;
  BACKUP_CRAWLER_URL: string;
  DATABASE_PATH: string;
  DRY_RUN: boolean;
  CRAWL_TIMEOUT_MS: number;
  DIFY_TIMEOUT_MS: number;
  MAX_RETRY_COUNT: number;
  LOG_LEVEL: string;
}
