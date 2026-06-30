# UI Agent Workspace Architecture & Design Philosophy

This document details how the `@umangtalpara/ui-agent` package configures AI agents to work together and highlights key design rules.

---

## 1. Unified Workspace Specification (The Facade Pattern)

In modern development, teams use a variety of AI coding assistants (e.g., Claude Code in the terminal, Cursor Composer for multi-file generation, or Google Antigravity inside Gemini-enabled IDEs). 

Rather than maintaining separate, competing rule files for each tool, this workspace uses the **Facade Pattern**:

```
                       ┌─────────────────────────┐
                       │  .ai/ settings & rules  │
                       │  (Single Truth Source)  │
                       └────────────▲────────────┘
                                    │
         ┌──────────────────────────┼──────────────────────────┐
         │                          │                          │
┌────────┴────────┐        ┌────────┴────────┐        ┌────────┴────────┐
│    .agents/     │        │  .cursor/rules/ │        │    .claude/     │
│  Antigravity   │        │     Cursor      │        │  Claude Code    │
└─────────────────┘        └─────────────────┘        └─────────────────┘
```

*   **Primary Source**: `.ai/` contains the actual markdown files describing styles, rules, and workflows.
*   **Adapters**: `.agents/`, `.cursor/rules/`, and `.claude/` contain tiny stubs that point the respective AI tools back to the `.ai/` directory.
*   **Result**: Whichever AI tool you choose, they all read and follow the same guidelines.

---

## 2. The Multi-Agent Cooperation Loop

Building responsive UIs from designs is complex. It requires strategic wireframe translation, coding, responsive checking, and design auditing. 

This workspace structures these responsibilities across 5 specialized agents to automate the pipeline:

```
[Design Spec/Figma] 
       │
       ▼ (Workflow: design-to-prd)
 ┌───────────┐      (Workflow: prd-to-ui-plan)      ┌──────────────────┐
 │  DESIGN   ├─────────────────────────────────────►│   SUPER AGENT    │
 │  AGENT    │      Roadmap & Component Tokens      │ (Orchestrator /  │
 └───────────┘                                      │    Validator)    │
                                                    └────────┬─────────┘
                                                             │
       ┌─────────────────────────────────────────────────────┘
       │ (Workflow: ui-generation)
       ▼
 ┌───────────┐      (Workflow: responsive-a11y-check) ┌──────────────────┐
 │    UI     ├─────────────────────────────────────►│  RESPONSIVE QA   │
 │ DEVELOPER │      Generates React/Tailwind code   │      AGENT       │
 └───────────┘                                      └────────┬─────────┘
                                                             │
       ┌─────────────────────────────────────────────────────┘
       │ (Workflow: final-review)
       ▼
 ┌───────────┐
 │   CODE    ├───────────────► [Production Ready Codebase]
 │  REVIEWER │
 └───────────┘
```

1.  **Ingestion Phase**: The Super Agent reads `doc/design.md`. The Design Agent extracts colors, layout grids, typography, and writes `doc/prd.md`.
2.  **Planning Phase**: The Design Agent breaks down pages into a component inventory (atomic ui components and composite page layouts), writing the schedule to `roadmap.md`.
3.  **Generation Phase**: The UI Developer Agent codes the components inside `codebase/components/` and page paths.
4.  **Verification Phase**: The Responsive QA Agent reviews breakpoints and checks for tap boundaries. Any layout bug is logged to `blockers.md` and returned to the developer agent.
5.  **Audit Phase**: The Code Review Agent reviews the styling, verifies naming styles, and deletes placeholder text before final delivery.

---

## 3. Styling & Responsive Design Tips

### Tailwind Merge
When creating atomic components (like custom buttons or input cards), allow custom styles to be appended. Always use the `cn(...)` utility helper to resolve conflicts:

```tsx
import { cn } from "@/utils/cn";

export const ActionButton = ({ className, children, ...props }) => {
  return (
    <button 
      className={cn(
        "min-h-[48px] px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
```

### Contrast Compliance
Ensure text maintains legibility against gradient backdrops.
*   **Good**: Large white headers on navy overlays (`text-white bg-slate-950`).
*   **Avoid**: Dark text directly overlaying dark HSL gradient blobs.

### Responsive Breakpoint Collapsing
Ensure grids wrap dynamically for small screens:
*   **Do**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
*   **Avoid**: `grid grid-cols-3` without mobile overrides.
