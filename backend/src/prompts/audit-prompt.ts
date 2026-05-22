/**
 * AFFEXAI Outbound Engine MVP
 * Prompt Versioning & Dify API Contract
 */

export const PROMPT_VERSION = "affexai-audit-v1";

/**
 * Technical specification for the Dify Workflow prompt layout.
 * This contract is stored here for architectural alignment and audit trail.
 */
export const DIFY_PROMPT_CONTRACT = {
  version: PROMPT_VERSION,
  description: "Audits crawled B2B website text, scoring ICP match and compiling risks and issues.",
  outputContract: `
    Return JSON only.
    No markdown.
    No explanation.
    No prose.
  `,
  expectedOutputSchema: {
    icpScore: "Integer from 0 to 10 evaluating alignment with the target profile",
    observedIssues: [
      "Exactly 3 unique strings, min 20 chars long, summarizing commercial site issues.",
      "Must not contain low-value phrases, placeholders, or N/A descriptions."
    ],
    risks: [
      "Exactly 2 unique strings, min 20 chars long, evaluating B2B sales or technical operational risks."
    ],
    outreachDraft: "Highly tailored, personalized outbound pitch draft based on observed technical or sales deficiencies."
  }
};
