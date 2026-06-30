# Autonomous UI Software Factory

Welcome to your new responsive UI workspace! This directory is configured with an autonomous multi-agent pipeline that processes Product Requirements Documents (PRDs) or Figma designs to generate premium, fully responsive, and animated user interfaces.

## Folder Structure

Once initialized, the workspace exposes:
```
├── AGENTS.md            ← Core cooperative rules for all agent platforms
├── CLAUDE.md            ← Claude Code adapter
├── GEMINI.md            ← Google Antigravity adapter
├── README.md            ← Human entry point
│
├── .ai/                 ← AI Agent rules, personas, skills, and status
│   ├── settings.json    ← UI development stack & path settings
│   ├── context/         ← Coding standards & Umang Talpara's UI guidelines
│   ├── skills/          ← Specific capabilities for frontend, UI/UX, and testing
│   ├── agents/          ← Base instructions for each agent role
│   ├── workflows/       ← Process checklists for development stages
│   ├── templates/       ← PRD, React Component, and Code Review templates
│   ├── memory/          ← Active decision logs and blocker trackers
│   └── project-management/ ← Progress, agent-status, and current-phase trackers
│
├── .agents/             ← Google Antigravity mapping stubs
├── .cursor/             ← Cursor MDC rules
├── .claude/             ← Claude Code skill stubs
│
├── doc/                 ← Product Requirements & Design Mockups (prd.md, design.md)
└── codebase/            ← Output folder where the UI components and pages are built
```

## How to Get Started

1. **Add Your Design/PRD**:
   - For design requirements, URLs (like Figma), or wireframe outlines, write them in **`doc/design.md`**.
   - For structured text requirements, write them in **`doc/prd.md`**.

2. **Launch the AI Coder**:
   - **Claude Code**: Run `claude` in your terminal, and prompt:
     > *Ingest doc/prd.md (or doc/design.md) and execute the UI generation workflow.*
   - **Cursor**: Open this project in Cursor, open Composer (`Ctrl+I` / `Cmd+I`), and prompt:
     > *Please analyze the design in doc/design.md, plan the responsive components, and build the UI.*
   - **Google Antigravity**: Open the workspace in your IDE with the extension enabled and ask:
     > *Ingest the design files and build the responsive website.*

3. **Track and Validate**:
   - Check the active phase in `.ai/project-management/current-phase.md` and current tasks in `.ai/project-management/progress.md`.
   - Run `npx ui-agent validate` to perform responsive and metadata checks on the generated code.
