import { getConfig } from "../config";
import { getLeadLogger } from "./logger";
import { DifyAuditResponse, FailureClassification } from "../types";

export class DifyError extends Error {
  constructor(
    message: string,
    public code: FailureClassification,
    public rawResponse: string | null = null
  ) {
    super(message);
    this.name = "DifyError";
  }
}

/**
 * Normalizes Dify outputs from variations (camelCase vs snake_case) and
 * parses nested result strings if the workflow output is serialized.
 */
function extractAuditResponse(outputs: Record<string, any>): Record<string, any> {
  // If the workflow returns a serialized JSON string in a 'result' or 'text' output node
  const serializedNode = outputs["result"] ?? outputs["text"] ?? outputs["output"];
  if (typeof serializedNode === "string" && serializedNode.trim().startsWith("{")) {
    try {
      const parsed = JSON.parse(serializedNode.trim());
      if (parsed && typeof parsed === "object") {
        return parsed;
      }
    } catch {
      // Bypassed, check direct outputs
    }
  }

  return outputs;
}

/**
 * Triggers the Dify Workflow API to audit the crawled text of a lead.
 * Captures raw text responses in full for debugging and error logging.
 */
export async function executeDifyAudit(
  lead: { 
    id: string; 
    company_name: string; 
    website: string; 
    country: string | null; 
    industry: string | null; 
  },
  crawledText: string,
  pipelineRunId: string
): Promise<{ audit: DifyAuditResponse; rawResponse: string; dify_duration_ms: number }> {
  const log = getLeadLogger(pipelineRunId, lead);
  const config = getConfig();
  const startTime = Date.now();

  const url = `${config.DIFY_BASE_URL.replace(/\/$/, "")}/workflows/run`;
  
  const payload = {
    inputs: {
      company_name: lead.company_name,
      website: lead.website,
      country: lead.country ?? "Unknown",
      industry: lead.industry ?? "Unknown",
      crawled_text: crawledText,
    },
    response_mode: "blocking",
    user: "affexai-outbound-engine",
  };

  log.info({ dify_url: url }, "Starting Dify Workflow Execution");

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), config.DIFY_TIMEOUT_MS);

  let rawResponseText = "";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.DIFY_API_KEY}`,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const difyDurationMs = Date.now() - startTime;
    rawResponseText = await response.text();

    if (response.status === 401 || response.status === 403) {
      log.error({ status: response.status }, "Dify API authentication failed");
      throw new DifyError(
        `Dify Workflow Auth Failure: Received status ${response.status} from server.`,
        "dify_auth",
        rawResponseText
      );
    }

    if (!response.ok) {
      log.error({ status: response.status }, "Dify API returned HTTP error status");
      throw new DifyError(
        `Dify Workflow HTTP Failure: Server returned status ${response.status}.`,
        "dify_malformed_json", // Treated as API execution failure
        rawResponseText
      );
    }

    // Attempt to parse JSON response
    let jsonRes: any;
    try {
      jsonRes = JSON.parse(rawResponseText);
    } catch (jsonErr: any) {
      log.error({ err: jsonErr.message }, "Failed to parse Dify API raw response as JSON");
      throw new DifyError(
        `Dify Workflow Parse Failure: Server returned non-JSON body. ${jsonErr.message}`,
        "dify_malformed_json",
        rawResponseText
      );
    }

    // Verify Dify standard response block structure
    if (!jsonRes || typeof jsonRes !== "object" || !("data" in jsonRes) || !jsonRes.data || !jsonRes.data.outputs) {
      log.error("Dify API response missing data.outputs structure");
      throw new DifyError(
        "Dify Workflow Structure Failure: Missing required 'data.outputs' in block.",
        "dify_malformed_json",
        rawResponseText
      );
    }

    const outputs = extractAuditResponse(jsonRes.data.outputs);
    
    // Normalize properties to support snake_case variations gracefully
    const icpScore = outputs["icpScore"] ?? outputs["icp_score"];
    const observedIssues = outputs["observedIssues"] ?? outputs["observed_issues"];
    const risks = outputs["risks"];
    const outreachDraft = outputs["outreachDraft"] ?? outputs["outreach_draft"] ?? outputs["outreach_text"];

    // Validate existence of basic keys (strict layout checks in validation.ts)
    if (icpScore === undefined || !observedIssues || !risks || outreachDraft === undefined) {
      log.error({ outputs }, "Dify output schema missing essential keys");
      throw new DifyError(
        "Dify Workflow Validation Failure: Missing essential outcome keys (icpScore, observedIssues, risks, outreachDraft).",
        "dify_malformed_json",
        rawResponseText
      );
    }

    const parsedAudit: DifyAuditResponse = {
      icpScore: typeof icpScore === "string" ? parseInt(icpScore, 10) : Number(icpScore),
      observedIssues: (Array.isArray(observedIssues) ? observedIssues : []) as [string, string, string],
      risks: (Array.isArray(risks) ? risks : []) as [string, string],
      outreachDraft: String(outreachDraft).trim(),
    };

    log.info(
      { 
        dify_duration_ms: difyDurationMs, 
        icp_score: parsedAudit.icpScore 
      },
      "Dify Workflow execution succeeded"
    );

    return {
      audit: parsedAudit,
      rawResponse: rawResponseText,
      dify_duration_ms: difyDurationMs,
    };

  } catch (err: any) {
    clearTimeout(timeoutId);

    // Differentiate timeout abort from general network failures
    if (err.name === "AbortError" || err.message?.includes("timeout")) {
      log.error("Dify workflow execution timed out");
      throw new DifyError(
        `Dify Workflow Timed Out: Execution exceeded ${config.DIFY_TIMEOUT_MS}ms limit.`,
        "dify_timeout",
        rawResponseText || null
      );
    }

    if (err instanceof DifyError) {
      throw err;
    }

    log.error({ err: err.message ?? err }, "Dify workflow connection failed");
    throw new DifyError(
      `Dify Connection Failed: ${err.message}`,
      "crawl_network", // Treat connection failure as network issue
      rawResponseText || null
    );
  } finally {
    clearTimeout(timeoutId);
  }
}
