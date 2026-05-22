import { z } from "zod";
import { DifyAuditResponse } from "../types";

// Helper to filter case-insensitive empty/placeholder values
const isNotPlaceholder = (val: string): boolean => {
  const normalized = val.toLowerCase().trim();
  const placeholders = [
    "",
    "n/a",
    "none",
    "placeholder",
    "null",
    "undefined",
    "no issues found",
    "no risks found",
    "n/a.",
    "none."
  ];
  return !placeholders.includes(normalized);
};

// Strict Zod schema for a single observed issue
const issueSchema = z.string()
  .min(20, { message: "Each observed issue must be at least 20 characters long" })
  .refine(isNotPlaceholder, { message: "Observed issues cannot be empty, N/A, or generic placeholders" });

// Strict Zod schema for a single risk
const riskSchema = z.string()
  .min(20, { message: "Each risk description must be at least 20 characters long" })
  .refine(isNotPlaceholder, { message: "Risks cannot be empty, N/A, or generic placeholders" });

// Anti-generic outreach phrases (Correction 10)
const BANNED_OUTREACH_PHRASES = [
  "hello sir",
  "dear business owner",
  "we build websites",
  "affordable website",
  "cheap website",
  "generic digital solutions",
];

// Strict Zod schema for outreach draft
const outreachDraftSchema = z.string()
  .min(50, { message: "Outreach draft must be at least 50 characters long to ensure quality content" })
  .refine(
    (val) => {
      const lower = val.toLowerCase();
      return !BANNED_OUTREACH_PHRASES.some((phrase) => lower.includes(phrase));
    },
    {
      message: `Outreach draft contains generic or low-quality outreach phrases. Banned phrases: ${BANNED_OUTREACH_PHRASES.join(", ")}`,
    }
  );

// Combined Zod validation schema for Dify Audit Response
export const difyAuditSchema = z.object({
  icpScore: z.number()
    .int({ message: "ICP Score must be a whole integer" })
    .min(0, { message: "ICP Score must be at least 0" })
    .max(10, { message: "ICP Score must not exceed 10" }),
  observedIssues: z.array(issueSchema)
    .length(3, { message: "Must have exactly 3 observed issues" })
    .refine(
      (arr) => {
        // Enforce uniqueness
        const unique = new Set(arr.map((s) => s.trim().toLowerCase()));
        return unique.size === arr.length;
      },
      { message: "All 3 observed issues must be unique" }
    ),
  risks: z.array(riskSchema)
    .length(2, { message: "Must have exactly 2 risks" })
    .refine(
      (arr) => {
        // Enforce uniqueness
        const unique = new Set(arr.map((s) => s.trim().toLowerCase()));
        return unique.size === arr.length;
      },
      { message: "All 2 risk descriptions must be unique" }
    ),
  outreachDraft: outreachDraftSchema,
});

/**
 * Validates the Dify response against strict business rules.
 * Throws clean formatting errors if validation fails.
 */
export function validateAuditResponse(data: unknown): DifyAuditResponse {
  return difyAuditSchema.parse(data) as DifyAuditResponse;
}
