import pino from "pino";
import { getConfig } from "../config";

let level = "info";
try {
  level = getConfig().LOG_LEVEL;
} catch (e) {
  // If config is not loaded yet, default to info
}

export const logger = pino({
  level,
  base: null, // remove default hostname/pid fields to keep logs clean
  timestamp: pino.stdTimeFunctions.isoTime,
  serializers: {
    // Custom scrubbers to explicitly prevent logging secrets
    headers: (headers: Record<string, unknown>) => {
      const scrubbed = { ...headers };
      if ("authorization" in scrubbed) scrubbed["authorization"] = "[REDACTED_AUTH_HEADER]";
      if ("Authorization" in scrubbed) scrubbed["Authorization"] = "[REDACTED_AUTH_HEADER]";
      if ("x-api-key" in scrubbed) scrubbed["x-api-key"] = "[REDACTED_API_KEY]";
      return scrubbed;
    },
    apiKey: () => "[REDACTED_API_KEY]",
    api_key: () => "[REDACTED_API_KEY]",
    token: () => "[REDACTED_TOKEN]",
    env: () => "[REDACTED_ENV_DUMP]",
  },
});

/**
 * Returns a child logger pre-seeded with context fields to satisfy structured logging mandates.
 * Correction: Every structured log line inside lead-processing context must include:
 * pipeline_run_id, lead_id, company_name.
 */
export function getLeadLogger(
  pipelineRunId: string,
  lead: { id: string; company_name: string }
) {
  return logger.child({
    pipeline_run_id: pipelineRunId,
    lead_id: lead.id,
    company_name: lead.company_name,
  });
}
