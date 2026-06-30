# AI Agent Workspace Rules for UI Agent Factory

This repository runs a cooperative, multi-agent responsive UI software factory configured in `.ai/`. All AI coding assistants (Claude, Cursor, Gemini/Antigravity, Codex, etc.) must follow these rules, roles, and workflows.

## Core Directives

1. **Tech Stack Single Source of Truth**: Always refer to [.ai/settings.json](.ai/settings.json) for the active UI development stack and directories.
2. **Design System & Styling**:
   - Follow the styling rules defined in [.ai/context/ui-guidelines.md](.ai/context/ui-guidelines.md).
   - Standardize styling on Tailwind CSS + Framer Motion.
   - Adhere to Umang Talpara's premium palette (Navy bases, neon/cyan accents, glassmorphic card boundaries, and fluid typography).
3. **Responsive Design Requirements**:
   - Every layout and component must be tested and fully responsive across key breakpoints: `320px`, `768px`, `1024px`, and `1440px`.
   - Never use fixed layouts (except absolute-positioned background decorations). Leverage Flexbox and Grid.
   - Interactive elements must maintain a minimum tap target of `48px * 48px` for mobile compliance.
4. **Modularity & Architecture**:
   - Write pure functional React components with proper prop validation or TypeScript schemas.
   - Follow [.ai/context/architecture-rules.md](.ai/context/architecture-rules.md).
   - Use the `cn(...)` Tailwind merge helper class to resolve style overrides without collision.
5. **Naming Conventions**:
   - File paths must use `kebab-case`. Component files and classes must use `PascalCase`.
   - Refer to [.ai/context/naming-rules.md](.ai/context/naming-rules.md).

## Task Execution & Status Logging

- Report status changes in [.ai/project-management/agent-status.md](.ai/project-management/agent-status.md).
- Track phase progress in [.ai/project-management/current-phase.md](.ai/project-management/current-phase.md) and [.ai/project-management/progress.md](.ai/project-management/progress.md).
- Document design decisions in [.ai/memory/decisions.md](.ai/memory/decisions.md) and blockers in [.ai/memory/blockers.md](.ai/memory/blockers.md).
