import * as crypto from "crypto";
import { z } from "zod";
import { getConfig } from "../config";
import { Lead, LeadStatus, FailureClassification } from "../types";
import { getLeadLogger } from "./logger";
import { 
  updateLeadStatus, 
  saveLeadCrawl, 
  saveAuditResult, 
  saveLeadError, 
  getLeadByWebsite 
} from "./db";
import { crawlWebsite, CrawlError } from "./crawl-client";
import { executeDifyAudit, DifyError } from "./dify-client";
import { validateAuditResponse } from "./validation";
import { PROMPT_VERSION } from "../prompts/audit-prompt";

/**
 * Executes the Phase 1 pipeline sequentially for a single lead.
 */
export async function processLead(
  lead: Lead,
  pipelineRunId: string
): Promise<{ success: boolean; skipReason?: string }> {
  const log = getLeadLogger(pipelineRunId, lead);
  const config = getConfig();
  const totalStartTime = Date.now();

  log.info({ status: lead.status }, "Processing lead target");

  // Check retry limit before starting (Rule 8)
  if (lead.retry_count >= config.MAX_RETRY_COUNT) {
    log.warn(
      { 
        retry_count: lead.retry_count, 
        max: config.MAX_RETRY_COUNT,
        failure_reason: "retry_limit_exceeded"
      },
      "Lead exceeded maximum retry limit. Skipping processing."
    );
    return { success: false, skipReason: "retry_limit_exceeded" };
  }

  // Load existing DB record BEFORE any mutations to check previous valid audit state (Rule 2)
  const existingDbRecord = getLeadByWebsite(lead.website);
  const hasValidPriorAudit = existingDbRecord !== null && 
    existingDbRecord.status === "Draft Ready" &&
    existingDbRecord.outreach_draft !== null &&
    existingDbRecord.icp_score !== null &&
    existingDbRecord.crawl_hash !== null;
  const priorCrawlHash = existingDbRecord ? existingDbRecord.crawl_hash : null;

  // 1. Dry Run / Active Status Mutator Helper
  const setStatus = (status: LeadStatus) => {
    if (config.DRY_RUN) {
      log.info(`[DRY RUN SIMULATION] Bypassed status update in DB: -> ${status}`);
    } else {
      updateLeadStatus(lead.id, status);
    }
  };

  let crawlDurationMs = 0;
  let difyDurationMs = 0;
  let crawlHash = "";
  let crawledText = "";
  let rawDifyResponse: string | null = null;

  try {
    // Phase 1.1: Scrape
    setStatus("Crawled");
    const crawlResult = await crawlWebsite(lead.website, pipelineRunId, lead);
    crawledText = crawlResult.text;
    crawlDurationMs = crawlResult.crawl_duration_ms;
    
    // Calculate SHA-256 of crawled text (Correction 1)
    crawlHash = crypto.createHash("sha256").update(crawledText).digest("hex");

    if (config.DRY_RUN) {
      log.info({ crawl_hash: crawlHash }, "[DRY RUN SIMULATION] Bypassed saving crawl result in DB");
    } else {
      saveLeadCrawl(lead.id, crawledText, crawlHash, crawlDurationMs, pipelineRunId);
    }

    // Phase 1.2: Check Hash Reuse Rule (Rule 2: Skip Dify only if identical hash AND previous valid audit exists with Draft Ready status)
    if (hasValidPriorAudit && priorCrawlHash === crawlHash && existingDbRecord) {
      log.info("Crawl content hash is identical to previous successful crawl and valid audit exists. Skipping Dify Workflow step.");
      
      const totalDurationMs = Date.now() - totalStartTime;
      
      if (config.DRY_RUN) {
        log.info("[DRY RUN SIMULATION] Bypassed updating lead as reused and successful");
      } else {
        // Reuse prior audit outputs
        saveAuditResult(lead.id, {
          icpScore: existingDbRecord.icp_score!,
          observedIssues: existingDbRecord.observed_issues!,
          risks: existingDbRecord.risks!,
          outreachDraft: existingDbRecord.outreach_draft!,
          rawDifyResponse: existingDbRecord.raw_dify_response ?? "REUSED_FROM_PREVIOUS_RUN",
          promptVersion: PROMPT_VERSION,
          difyDurationMs: 0, // Dify step skipped
          totalDurationMs,
          pipelineRunId,
        });
      }

      return { success: true, skipReason: "hash_matched_reuse" };
    }

    // Phase 1.3: Trigger Dify workflow audit
    const difyRes = await executeDifyAudit(lead, crawledText, pipelineRunId);
    rawDifyResponse = difyRes.rawResponse;
    difyDurationMs = difyRes.dify_duration_ms;

    // Phase 1.4: Strict Schema & Custom Business Validation (Correction 10 & 14)
    log.info("Executing Zod validation and anti-generic phrase filters on audit outputs");
    let validatedAudit;
    try {
      validatedAudit = validateAuditResponse(difyRes.audit);
    } catch (valErr: any) {
      const errorMsg = valErr instanceof z.ZodError 
        ? valErr.errors.map(e => `${e.path.join(".")}: ${e.message}`).join(" | ")
        : valErr.message;

      log.error({ err: errorMsg }, "Audit response failed schema validation constraints");
      
      throw new CrawlError(
        `Validation Failed: Dify response violated business rules. ${errorMsg}`,
        "validation_failed"
      );
    }

    const totalDurationMs = Date.now() - totalStartTime;

    // Save success audit results
    if (config.DRY_RUN) {
      log.info(
        {
          simulated_outcome: {
            icpScore: validatedAudit.icpScore,
            observedIssues: validatedAudit.observedIssues,
            risks: validatedAudit.risks,
            outreachDraft: validatedAudit.outreachDraft,
            promptVersion: PROMPT_VERSION,
            latencies: { crawlDurationMs, difyDurationMs, totalDurationMs }
          }
        },
        "[DRY RUN SIMULATION] Audit validation succeeded. Simulating SQLite persistence."
      );
    } else {
      saveAuditResult(lead.id, {
        icpScore: validatedAudit.icpScore,
        observedIssues: JSON.stringify(validatedAudit.observedIssues),
        risks: JSON.stringify(validatedAudit.risks),
        outreachDraft: validatedAudit.outreachDraft,
        rawDifyResponse: rawDifyResponse || "NO_RESPONSE",
        promptVersion: PROMPT_VERSION,
        difyDurationMs,
        totalDurationMs,
        pipelineRunId,
      });
      log.info("Lead successfully processed and promoted to Draft Ready");
    }

    return { success: true };

  } catch (err: any) {
    const totalDurationMs = Date.now() - totalStartTime;
    
    // Classify Failure (Correction 16)
    let errorCode: FailureClassification = "unknown_error";
    if (err instanceof CrawlError) {
      errorCode = err.code;
    } else if (err instanceof DifyError) {
      errorCode = err.code;
      // capture raw Dify response from DifyError
      rawDifyResponse = err.rawResponse;
    } else if (err instanceof z.ZodError) {
      errorCode = "validation_failed";
    }

    log.error(
      { 
        err: err.message ?? err, 
        failure_classification: errorCode,
        latencies: { crawlDurationMs, difyDurationMs, totalDurationMs }
      },
      "Lead pipeline execution failed"
    );

    // Save failures (Correction 5: Store raw Dify response even when JSON parsing fails)
    if (config.DRY_RUN) {
      log.info(
        {
          simulated_error: {
            message: err.message ?? err,
            errorCode,
            rawDifyResponse: rawDifyResponse ? "[RAW_DIFY_RESPONSE_CAPTURED]" : null,
            retry_count_increment: 1
          }
        },
        "[DRY RUN SIMULATION] Simulating failure record in database."
      );
    } else {
      saveLeadError(
        lead.id,
        `${errorCode}: ${err.message ?? err}`,
        rawDifyResponse,
        crawlDurationMs || null,
        difyDurationMs || null,
        totalDurationMs
      );
    }

    return { success: false };
  }
}
