import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";
import { AppConfig } from "./types";

// Load .env relative to current working directory or directory of execution
// Support running from both repo root and backend/ subdirectory
const localEnvPath = path.resolve(process.cwd(), ".env");
const parentEnvPath = path.resolve(process.cwd(), "backend", ".env");

if (fs.existsSync(localEnvPath)) {
  dotenv.config({ path: localEnvPath });
} else if (fs.existsSync(parentEnvPath)) {
  dotenv.config({ path: parentEnvPath });
} else {
  dotenv.config(); // fallback to standard dotenv lookup
}

export function loadAndValidateConfig(): AppConfig {
  const missingVars: string[] = [];

  const checkRequired = (key: string): string => {
    const val = process.env[key];
    if (val === undefined || val.trim() === "") {
      missingVars.push(key);
      return "";
    }
    return val;
  };

  const difyApiKey = checkRequired("DIFY_API_KEY");
  const difyBaseUrl = checkRequired("DIFY_BASE_URL");
  const primaryCrawlerUrl = checkRequired("PRIMARY_CRAWLER_URL");
  const backupCrawlerUrl = checkRequired("BACKUP_CRAWLER_URL");
  const databasePath = checkRequired("DATABASE_PATH");

  if (missingVars.length > 0) {
    throw new Error(
      `Startup Failure: Missing required environment variables: ${missingVars.join(", ")}`
    );
  }

  // Parse numeric values with safe fallbacks
  const crawlTimeoutMs = parseInt(process.env["CRAWL_TIMEOUT_MS"] ?? "30000", 10);
  const difyTimeoutMs = parseInt(process.env["DIFY_TIMEOUT_MS"] ?? "45000", 10);
  const maxRetryCount = parseInt(process.env["MAX_RETRY_COUNT"] ?? "3", 10);

  if (isNaN(crawlTimeoutMs) || crawlTimeoutMs <= 0) {
    throw new Error("Startup Failure: CRAWL_TIMEOUT_MS must be a positive integer.");
  }
  if (isNaN(difyTimeoutMs) || difyTimeoutMs <= 0) {
    throw new Error("Startup Failure: DIFY_TIMEOUT_MS must be a positive integer.");
  }
  if (isNaN(maxRetryCount) || maxRetryCount < 0) {
    throw new Error("Startup Failure: MAX_RETRY_COUNT must be a non-negative integer.");
  }

  const dryRun = (process.env["DRY_RUN"] ?? "true").toLowerCase() === "true";
  const logLevel = (process.env["LOG_LEVEL"] ?? "info").toLowerCase();

  const validLogLevels = ["fatal", "error", "warn", "info", "debug", "trace", "silent"];
  if (!validLogLevels.includes(logLevel)) {
    throw new Error(`Startup Failure: Invalid LOG_LEVEL '${logLevel}'. Must be one of ${validLogLevels.join(", ")}`);
  }

  return {
    DIFY_API_KEY: difyApiKey,
    DIFY_BASE_URL: difyBaseUrl,
    PRIMARY_CRAWLER_URL: primaryCrawlerUrl,
    BACKUP_CRAWLER_URL: backupCrawlerUrl,
    DATABASE_PATH: databasePath,
    DRY_RUN: dryRun,
    CRAWL_TIMEOUT_MS: crawlTimeoutMs,
    DIFY_TIMEOUT_MS: difyTimeoutMs,
    MAX_RETRY_COUNT: maxRetryCount,
    LOG_LEVEL: logLevel,
  };
}

// Global cached configuration
let cachedConfig: AppConfig | null = null;

export function getConfig(): AppConfig {
  if (!cachedConfig) {
    cachedConfig = loadAndValidateConfig();
  }
  return cachedConfig;
}
