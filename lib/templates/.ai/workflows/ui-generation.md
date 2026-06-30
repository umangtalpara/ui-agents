# UI Generation Workflow

## Identity
- **Name**: UI Generation
- **Trigger**: Active Phase in `current-phase.md` has uncompleted coding tasks.
- **Owner**: UI Developer Agent

---

## Execution Flow

```
┌─────────────────────────┐
│   1. LOAD DESIGN        │
│   Load roadmap tasks    │
│   and styling rules     │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   2. CONFIGURE THEME    │
│   Ensure tailwind.config│
│   has HSL color tokens  │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   3. ATOMIC COMPONENTS  │
│   Build elements under  │
│   components/ui/        │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   4. LAYOUTS & CONTAINERS│
│   Write Header, Footer  │
│   and grid layout structures│
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   5. PAGE ROUTING & DATA │
│   Connect modules to    │
│   pages/views           │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   6. INTERACTION BINDING│
│   Apply Framer Motion    │
│   and micro-animations  │
└─────────────────────────┘
```

## Input
- `.ai/project-management/roadmap.md` — Active phase tasks.
- `.ai/context/coding-rules.md` — Component guidelines.
- `.ai/context/ui-guidelines.md` — Theme colors and typography.

## Output
- Source files inside `codebase/` (components, pages, styles, configs).
- Updated `.ai/project-management/progress.md` logging task completions.

## Validation Rules
1. No inline style attributes are written.
2. Components merge classes with the `cn(...)` template helper class.
3. Every button or tap boundary has a minimum area of `48px * 48px`.
4. Page outlines scale fluidly to `320px` without horizontal scroll.
