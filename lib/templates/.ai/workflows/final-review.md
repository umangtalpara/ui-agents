# Final Review Workflow

## Identity
- **Name**: Final Review
- **Trigger**: Testing phase finishes with no active blockers.
- **Owner**: Code Review Agent

---

## Execution Flow

```
┌─────────────────────────┐
│   1. LOAD SOURCE FILES  │
│   Load all CSS, markup, │
│   and config layouts    │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   2. AUDIT THEME COMPLIANCE
│   Verify HSL navy/cyan  │
│   theme adherence       │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   3. PLACEHOLDER SCAN   │
│   Search for TODO,      │
│   lorem ipsum, or empty │
│   elements              │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   4. NAMING AUDIT       │
│   Confirm file naming   │
│   and export styles     │
└────────────┬────────────┘
             │
     ┌───────┴───────┐
     │               │
     ▼               ▼
  [Pass]          [Fail]
     │               │
     │               ▼
     │     ┌──────────────────┐
     │     │ File quality report
     │     │ and list fixes   │
     │     └──────────────────┘
     ▼
┌─────────────────────────┐
│   5. PRODUCTION HANDOFF │
│   Super Agent sets      │
│   status: Completed     │
└─────────────────────────┘
```

## Input
- Code base folders.
- `.ai/context/ui-guidelines.md`

## Output
- Approved review log in `.ai/project-management/progress.md`.
- Completed state in `.ai/project-management/project-status.md`.

## Validation Rules
1. Zero placeholder strings (`TODO`, `Lorem`, etc.) in production source code.
2. File hierarchy conforms to `kebab-case` and components conform to `PascalCase`.
3. Tailwind merge utilities (`cn(...)`) are applied on all custom wrapper components.
