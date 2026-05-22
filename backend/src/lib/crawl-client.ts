import { getConfig } from "../config";
import { getLeadLogger } from "./logger";
import { CrawlResult, FailureClassification } from "../types";

export class CrawlError extends Error {
  constructor(message: string, public code: FailureClassification) {
    super(message);
    this.name = "CrawlError";
  }
}

/**
 * Normalizes text by collapsing multiple spaces/newlines, trimming,
 * and performing basic commercial signal extraction filters.
 */
function normalizeCrawlText(text: string): string {
  if (!text) return "";
  
  // Replace multiple newlines/tabs/spaces with single spaces/newlines
  let cleanText = text
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*\n+/g, "\n")
    .trim();

  // Enforce a cap of 20,000 characters to prevent token overflow
  if (cleanText.length > 20000) {
    cleanText = cleanText.substring(0, 20000) + "... [TRUNCATED_TO_20000_CHARS]";
  }

  return cleanText;
}

/**
 * Checks if URL is commercial target or legal/careers metadata
 */
export function isCommercialUrl(url: string): boolean {
  const lowercase = url.toLowerCase();
  const ignorePatterns = [
    "/privacy", "/legal", "/careers", "/jobs", "/cookie", "/terms", "/privacy-policy",
    "/impressum", "/disclaimer", "/agb"
  ];
  return !ignorePatterns.some(pattern => lowercase.includes(pattern));
}

/**
 * Scrapes a company website by hitting the configured primary Crawl4AI server,
 * falling back to the backup server if the primary fails.
 */
export async function crawlWebsite(
  websiteUrl: string,
  pipelineRunId: string,
  leadContext: { id: string; company_name: string }
): Promise<CrawlResult> {
  const log = getLeadLogger(pipelineRunId, leadContext);
  const config = getConfig();
  const bodyPayload = JSON.stringify({ url: websiteUrl });

  log.info({ website: websiteUrl }, "Starting crawl operation");
  const startTime = Date.now();

  if (!isCommercialUrl(websiteUrl)) {
    log.warn({ website: websiteUrl }, "Target URL matches non-commercial path pattern, but continuing crawl as requested");
  }

  let response: Response;
  let crawlerUsed: "primary" | "backup" = "primary";

  // Try Primary Crawler
  try {
    log.info({ primary_url: config.PRIMARY_CRAWLER_URL }, "Attempting primary crawler");
    response = await fetchWithTimeout(
      config.PRIMARY_CRAWLER_URL,
      bodyPayload,
      config.CRAWL_TIMEOUT_MS
    );

    if (!response.ok) {
      throw new Error(`Primary crawler returned status ${response.status}`);
    }
  } catch (primaryErr: any) {
    const isTimeout = primaryErr.name === "AbortError" || primaryErr.message?.includes("timeout");
    log.warn(
      { 
        err: primaryErr.message ?? primaryErr, 
        reason: isTimeout ? "timeout" : "network_error" 
      },
      "Primary crawler failed. Attempting failover to backup crawler..."
    );

    // Failover to Backup Crawler
    try {
      crawlerUsed = "backup";
      log.info({ backup_url: config.BACKUP_CRAWLER_URL }, "Attempting backup crawler");
      response = await fetchWithTimeout(
        config.BACKUP_CRAWLER_URL,
        bodyPayload,
        config.CRAWL_TIMEOUT_MS
      );

      if (!response.ok) {
        throw new Error(`Backup crawler returned status ${response.status}`);
      }
    } catch (backupErr: any) {
      const isBackupTimeout = backupErr.name === "AbortError" || backupErr.message?.includes("timeout");
      log.error({ err: backupErr.message ?? backupErr }, "Backup crawler also failed.");
      
      throw new CrawlError(
        `Crawl Failed: Both primary and backup crawlers failed. Primary: ${primaryErr.message}. Backup: ${backupErr.message}`,
        isBackupTimeout ? "crawl_timeout" : "crawl_network"
      );
    }
  }

  // Parse response (Rule 5: Accept only known response shapes: markdown, content, text. No magical fallback)
  let rawText = "";
  try {
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      const jsonRes = await response.json() as any;
      if (jsonRes && typeof jsonRes === "object") {
        const possibleText = jsonRes.markdown ?? jsonRes.content ?? jsonRes.text;
        if (typeof possibleText === "string" && possibleText.trim() !== "") {
          rawText = possibleText;
        } else {
          throw new Error("JSON response missing markdown, content, or text fields.");
        }
      } else {
        throw new Error("Response is not a valid JSON object.");
      }
    } else {
      throw new Error(`Expected application/json response but received content-type: ${contentType}`);
    }
  } catch (parseErr: any) {
    log.error({ err: parseErr.message }, "Failed to parse crawler response body.");
    throw new CrawlError(
      `Crawl Failed: Malformed or unaccepted response shape from crawler. ${parseErr.message}`,
      "crawl_network"
    );
  }

  const crawledText = normalizeCrawlText(rawText);
  const durationMs = Date.now() - startTime;

  // Rejection threshold check (correction 10: lowered from 1000 to 500 chars)
  if (crawledText.length < 500) {
    log.error({ length: crawledText.length }, "Crawl output rejected: content too short");
    throw new CrawlError(
      `Crawl Failed: Extracted website content is too short (${crawledText.length} chars). Minimum threshold is 500 characters.`,
      "crawl_network"
    );
  }

  log.info(
    { 
      crawler_used: crawlerUsed, 
      duration_ms: durationMs, 
      text_length: crawledText.length 
    },
    "Crawl operation completed successfully"
  );

  return {
    sourceUrl: websiteUrl,
    crawlerUsed,
    text: crawledText,
    crawl_duration_ms: durationMs,
  };
}

/**
 * Helper to fetch with absolute timeout controller signal
 */
async function fetchWithTimeout(
  url: string,
  bodyPayload: string,
  timeoutMs: number
): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyPayload,
      signal: controller.signal,
    });
    return res;
  } finally {
    clearTimeout(id);
  }
}
