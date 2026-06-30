# How to Use the UI Agent Factory

This workspace uses cooperative AI agents to translate your Product Requirements Document (PRD) or Figma design into a premium, responsive website.

## 🚀 The Development Workflow

### Step 1: Input Requirements
Fill in your design details or PRD requirements:
- Design notes, wireframes, or Figma links in **`doc/design.md`**
- Page inventory, requirements, and flow descriptions in **`doc/prd.md`**

### Step 2: Trigger the Build Loop
Message your AI Coding assistant (Google Antigravity, Claude Code, Cursor, Codex, etc.) to start:
> *"I have filled in the design specifications in doc/design.md. Please ingest it, start the UI plan phase, and build the responsive components."*

---

## 🛠️ Behind the Scenes (Autonomous Pipeline)

```
 ┌────────────────────────────────┐
 │        1. Ingest Design        │
 │  Super Agent reads design.md   │
 │  and checks for color tokens   │
 └───────────────┬────────────────┘
                 │
                 ▼
 ┌────────────────────────────────┐
 │        2. UI Planning          │
 │  Design Agent creates the plan │
 │  and saves the component list  │
 └───────────────┬────────────────┘
                 │
                 ▼
 ┌────────────────────────────────┐
 │        3. UI Generation        │
 │  Developer Agent codes atomic  │
 │  components and layout screens │
 └───────────────┬────────────────┘
                 │
                 ▼
 ┌────────────────────────────────┐
 │       4. Responsive QA         │
 │  QA Agent validates contrast,  │
 │  a11y, and mobile breakpoints  │
 └───────────────┬────────────────┘
                 │
                 ▼
 ┌────────────────────────────────┐
 │       5. Style Audit           │
 │  Review Agent checks naming    │
 │  and removes placeholder files │
 └────────────────────────────────┘
```

## 📊 Monitoring Progress
Check active status inside `.ai/project-management/`:
- **`project-status.md`**: Shows high-level project stage.
- **`progress.md`**: Shows task checklist.
- **`agent-status.md`**: Shows what each agent is working on.
