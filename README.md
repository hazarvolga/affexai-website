# AFFEXAI — Enterprise Commercial Systems Platform

A unified, multi-module monorepo containing the frontend web application and outbound automation/crawling backend modules for AFFEXAI.

---

## Directory Structure

```
affexai-website/ (Root)
├── frontend/                     # React 19 + TypeScript + Vite + Tailwind CSS Web App
│   ├── src/
│   └── package.json
├── backend/                      # Node.js/TypeScript Backend & Automation Pipelines (Future Integration)
├── shared/                       # Shared type definitions and schemas between Frontend & Backend
├── fpvlover-auto-blog.md         # Reference CTO server and crawler configurations
└── metadata.json                 # Project capabilities manifest
```

---

## Modules

### 1. Frontend
The frontend application represents the client portal and interactive diagnostic tools of the AFFEXAI credibility platform.

#### Getting Started
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set your local environment variable `GEMINI_API_KEY` in `frontend/.env.local`.
4. Run in development mode:
   ```bash
   npm run dev
   ```

---

## Technical Architecture & Development Guidelines
*   **Monorepo Separation**: All code files, dependencies, and local modules for the client app reside exclusively inside `frontend/`. 
*   **Git Integrity**: File histories are fully preserved in Git.
*   **Type Safety**: TypeScript 5.x check-safety enforced. Runs `npx tsc --noEmit` inside sub-directories.
