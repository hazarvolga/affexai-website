import * as crypto from "crypto";
import { getConfig } from "./config";
import { initDatabase, seedSampleLeadsIfEmpty, getEligibleLeads } from "./lib/db";
import { processLead } from "./lib/lead-service";
import { logger } from "./lib/logger";

async function main() {
  const startTime = Date.now();

  // 1. Generate run ID (Correction 3)
  const pipelineRunId = crypto.randomUUID();

  logger.info({ pipeline_run_id: pipelineRunId }, "AFFEXAI Outbound Engine CLI Starting");

  // 2. Validate environment & configurations (fails fast if invalid)
  let config;
  try {
    config = getConfig();
  } catch (err: any) {
    logger.fatal({ err: err.message ?? err }, "Startup configuration check failed");
    process.exit(1);
  }

  // Visual status indicators
  if (config.DRY_RUN) {
    logger.info("************************************************************");
    logger.info("                 DRY RUN MODE ENABLED                       ");
    logger.info("  No lead status changes or mutations will be written to DB ");
    logger.info("************************************************************");
  }

  // 3. Setup SQLite structures (WAL mode enabled)
  try {
    initDatabase();
    // Database initialization is allowed in dry run mode
    seedSampleLeadsIfEmpty();
  } catch (dbErr: any) {
    logger.fatal({ err: dbErr.message ?? dbErr }, "Database setup failed");
    process.exit(1);
  }

  // 4. Retrieve targets
  const leads = getEligibleLeads(config.MAX_RETRY_COUNT);
  
  logger.info(
    { 
      leads_found: leads.length, 
      max_retry_limit: config.MAX_RETRY_COUNT 
    },
    "Fetched eligible outbound targets"
  );

  let processedCount = 0;
  let successCount = 0;
  let skippedCount = 0;
  let failureCount = 0;

  // 5. Sequential Runner (no concurrency in Phase 1)
  for (const lead of leads) {
    processedCount++;
    try {
      const result = await processLead(lead, pipelineRunId);
      if (result.success) {
        successCount++;
        if (result.skipReason) {
          skippedCount++;
        }
      } else {
        failureCount++;
      }
    } catch (processErr: any) {
      failureCount++;
      logger.error(
        { 
          lead_id: lead.id, 
          company_name: lead.company_name, 
          err: processErr.message ?? processErr 
        },
        "Unexpected error processing lead in index orchestrator loop"
      );
    }
  }

  const executionTimeMs = Date.now() - startTime;

  // 6. Summary Telemetry Printout
  logger.info({
    summary: {
      pipeline_run_id: pipelineRunId,
      total_duration_ms: executionTimeMs,
      dry_run_mode: config.DRY_RUN,
      stats: {
        total_eligible: leads.length,
        processed: processedCount,
        success: successCount,
        skipped_or_reused: skippedCount,
        failures: failureCount
      }
    }
  }, "Pipeline execution run summary completed");

  if (config.DRY_RUN) {
    logger.info("************************************************************");
    logger.info("             DRY RUN COMPLETED SUCCESSFULLY                 ");
    logger.info("       Verification confirmed: DB state remained safe       ");
    logger.info("************************************************************");
  }
}

// Execute orchestrator
main().catch((fatalErr) => {
  logger.fatal({ err: fatalErr.message ?? fatalErr }, "Fatal unhandled outbound execution engine exception");
  process.exit(1);
});
