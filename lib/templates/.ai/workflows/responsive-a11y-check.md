# Responsive & Accessibility Check Workflow

## Identity
- **Name**: Responsive & Accessibility Check
- **Trigger**: Coding tasks in the active phase are marked COMPLETED.
- **Owner**: Responsive QA Agent

---

## Execution Flow

```
┌─────────────────────────┐
│   1. SCREEN SCANNING    │
│   Load all UI files and  │
│   compile check         │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   2. VIEWPORT RESOLUTION│
│   Scan styles for fluid │
│   breakpoints (grid, flex)│
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   3. TAP TARGET CHECK   │
│   Verify targets are    │
│   >= 48px * 48px size   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   4. CONTRAST & ACCESSIBILITY
│   Verify font ratios,   │
│   aria-labels, and tab  │
│   keyboard focus outlines│
└────────────┬────────────┘
             │
     ┌───────┴───────┐
     │               │
     ▼               ▼
  [Pass]          [Fail]
     │               │
     │               ▼
     │     ┌──────────────────┐
     │     │ Log layout bugs  │
     │     │ to blockers.md & │
     │     │ return to Dev    │
     │     └──────────────────┘
     ▼
┌─────────────────────────┐
│   5. AUDIT REPORT       │
│   Publish test results  │
│   in progress.md        │
└─────────────────────────┘
```

## Input
- Generated codebase files under `codebase/`.
- `.ai/context/coding-rules.md#accessibility`

## Output
- Verification logs in `.ai/project-management/progress.md`.
- Layout alignment bugs filed in `.ai/memory/blockers.md` (if any).

## Validation Rules
1. Zero horizontal scrolling at `320px` width.
2. All interactive elements have focus rings (`focus-visible`).
3. Icon buttons have `aria-label` definitions.
4. Color contrasts of text against gradients satisfy `4.5:1`.
