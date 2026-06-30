# Project Context

This workspace is structured as an AI-driven responsive UI factory. The AI developers and reviewer agents cooperate to translate input product specifications or design references into responsive, premium React/Tailwind web interfaces.

## Workspace Layout

- **`doc/design.md` or `doc/prd.md`**: Contains Figma links, screenshots (via Markdown links), design notes, or a structured PRD that details what screens to build.
- **`codebase/`**: The generated codebase directory containing all layouts, styles, page views, and assets.
- **`.ai/project-management/`**: Files that track active phase, agent status, and task progress.

## Agent Personas

1. **Super Agent (Orchestrator)**: Regulates the development process, verifies outputs, transitions between phases, and logs results.
2. **Design Agent**: Parses layout requirements, creates wireframes, and sets up design token variables.
3. **UI Developer Agent**: Generates components, global styles, pages, structures, and animations.
4. **Responsive QA Agent**: Performs layout checks across breakpoints and resolves tap target or contrast problems.
5. **Code Review Agent**: Conducts final design reviews, styling validations, and checks for placeholders.

## Development Workflow

1. Ingest design documents to build a component plan.
2. Break down components into atomic tasks.
3. Generate styles, layout modules, and page routes.
4. Verify responsive design and tap targets.
5. Review code and polish transition animations.
