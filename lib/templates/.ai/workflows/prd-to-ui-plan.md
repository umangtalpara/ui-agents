# PRD to UI Plan Workflow

## Identity
- **Name**: PRD to UI Plan
- **Trigger**: New or updated `doc/prd.md` available.
- **Owner**: Super Agent → Design Agent

---

## Execution Flow

```
┌─────────────────────────┐
│   1. VALIDATE PRD       │
│   Super Agent validates │
│   PRD structure         │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   2. DECOMPOSE PAGES    │
│   Identify screens &    │
│   component parts       │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   3. DEFINE PRIMITIVES  │
│   Identify reusable     │
│   atom elements (UI)    │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   4. ROADMAP GENERATION │
│   Break down tasks into  │
│   sequential phases     │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   5. ROADMAP VALIDATION │
│   Validate dependencies │
│   and layout targets    │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   6. SAVE ROADMAP       │
│   Write to roadmap.md   │
│   Set Phase 1 active    │
└─────────────────────────┘
```

## Input
- `doc/prd.md` — Product requirements.
- `.ai/context/ui-guidelines.md` — Responsive styling rules.

## Output
- `.ai/project-management/roadmap.md` — Phased component roadmap with task lists.
- `.ai/project-management/current-phase.md` — Initialized to Phase 1.
- `.ai/project-management/project-status.md` — Updated to "Planning Complete".

## Validation Rules
1. Every screen in the PRD has a corresponding phase or task.
2. Every task has a unique task ID, assignee, and responsive acceptance criteria.
3. Component primitives are developed in Phase 1 before composite modules in Phase 2.
