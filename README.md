# @umangtalpara/ui-agent

> **Autonomous Multi-Agent Responsive UI Software Factory CLI**

`@umangtalpara/ui-agent` is an NPM package and CLI tool designed to bootstrap any blank project directory into a collaborative AI-agentic workspace. It sets up files, rules, skills, and workflows that allow AI coding tools (**Google Antigravity**, **Claude Code**, **Cursor**, **Codex**, etc.) to act as a cooperative software development team to automatically build beautiful, fully responsive, and animated user interfaces from a PRD or Figma/design source.

---

## 🌟 Key Benefits

*   🤖 **Fully Agentic & Automatic**: Orchestrates 5 specialized agent personas (Orchestrator, Designer, Developer, QA, and Auditor) working in a cooperative loop.
*   💻 **Universal IDE Support**: Ready-to-use configurations for all major AI coding interfaces:
    *   **Google Antigravity** (`.agents/` workspace rules, skills, and workflows)
    *   **Cursor** (`.cursor/rules/` MDC rules)
    *   **Claude Code** (`.claude/` skill stubs)
*   📐 **Umang Talpara's Premium Design System**: Tailors generated code to follow high-end enterprise layouts (HSL Navy/Cyan themes, glassmorphism card gutters, Outfit/Inter typography hierarchy, fluid responsive scaling, and smooth hover micro-animations).
*   📱 **Strict Mobile-First & Responsive Focus**: Enforces viewport meta settings, fluid grid grids, and mobile-friendly tap targets of at least `48px * 48px`.
*   🔍 **Built-in Quality Auditing**: Includes a validation suite to check for placeholders, responsive grid configurations, and accessibility violations before production.

---

## 🚀 Installation & Initialization

You can initialize a project directly using `npx`:

```bash
# 1. Create your new UI project directory
mkdir my-premium-ui
cd my-premium-ui

# 2. Initialize a blank package.json
npm init -y

# 3. Boot the Agentic Workspace
npx @umangtalpara/ui-agent init
```

---

## 📖 Step-by-Step Usage Guide

Once you have initialized the workspace using the `init` command, follow these steps to configure your designs and launch the automated agent loop:

### Step 1: Input Your UI Requirements / Design Reference
Fill in **one or both** of the configuration files under the `doc/` directory to instruct the agent:

*   **If you have visual mockups, Figma links, or wireframe blueprints (`doc/design.md`)**:
    Open `doc/design.md` and enter:
    *   Links to your Figma mockups or visual boards.
    *   Markdown image references to layout wireframe screenshots (e.g. `![Landing layout](./wireframe.png)`).
    *   Descriptions of the design layout (e.g., "Left-aligned brand logo, center navbar items, floating cards on hover").
*   **If you have structured text requirements or a feature list (`doc/prd.md`)**:
    Open `doc/prd.md` and fill in:
    *   **Core Vision**: The purpose of the website or application.
    *   **Page Inventory**: List every page/screen (e.g. Landing Homepage, User Dashboard, Contact Page).
    *   **Layout Sections**: What specific sections should go on each page? (e.g. Hero banner, 3-column benefit cards, email sign-up footer).
    *   **Theme Options**: Color tokens (navy base/cyan accent HSL colors) and animation specifications.

---

### Step 2: Install UI Styling Dependencies
The CLI has already injected the necessary packages in your `package.json`. Install them using your preferred package manager:
```bash
npm install
# Or: pnpm install / yarn install / bun install
```

---

### Step 3: Trigger the AI Agent Build Loop
Open the project directory in your AI Coder of choice and run the starting prompt:

#### 1. In Claude Code (Terminal Coder)
Start Claude Code in your workspace root:
```bash
claude
```
In the Claude chat interface, send the start command:
> *"I have configured my design inputs in doc/design.md (or doc/prd.md). Ingest the requirements, run the design-to-prd workflow, and begin code generation."*

#### 2. In Cursor (Composer or Chat)
Open the workspace folder in Cursor. Open Cursor Composer (`Ctrl+I` / `Cmd+I`) or Chat (`Ctrl+L` / `Cmd+L`) and send the start command:
> *"Please read doc/design.md and doc/prd.md. Follow the rules in AGENTS.md, run the planning phase, and generate the React/Tailwind components."*

#### 3. In Google Antigravity (Gemini Extension)
Open the workspace folder in your IDE with the Google Antigravity extension enabled. In the agent chat box, send:
> *"Ingest the requirements in doc/prd.md and run the /prd-to-ui-plan workflow to generate the component inventory and begin coding."*

---

### Step 4: Monitor & Validate Progress
*   **Watch the Agent Progress**: Open `.ai/project-management/progress.md` or run:
    ```bash
    npx ui-agent status
    ```
    *This outputs the currently active tasks, phase status, and logs.*
*   **Run Responsive Layout Verification**: Once the agent writes components into the `codebase/` directory, verify that spacing, touch bounds (>= 48px), and responsive viewport settings meet WCAG guidelines by running:
    ```bash
    npx ui-agent validate
    ```

---

## 🛠️ CLI Command Reference

### 1. `ui-agent init`
Copies all agent personas, standard skills, workflows, and rule files into your directory. 
*   Injects dependencies into `package.json` (`tailwindcss`, `postcss`, `autoprefixer`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`).
*   Dynamically configures or appends standard exclusions to `.gitignore`.
*   Detects lockfiles (`pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`) to output custom dependency installation commands.

### 2. `ui-agent status`
Outputs the current execution phase, active tasks, and status reports of the running agents:
```bash
npx ui-agent status
```

### 3. `ui-agent validate`
Runs automated audit checks on the generated code, reporting errors or recommendations:
```bash
npx ui-agent validate
```
*   **Viewport Tag Check**: Ensures standard `<meta name="viewport" content="width=device-width...">` tags exist.
*   **Responsive Prefix Scan**: Scans for Tailwind utility breakpoints (`sm:`, `md:`, `lg:`).
*   **Touch Target Audit**: Flags interactive tags (`<button>`, `<a>`, and `onClick` hooks) that lack spacing classes ensuring `48px` boundaries.
*   **Placeholder Detector**: Alerts you if `TODO`, `lorem ipsum`, or standard placeholders remain.

---

## 🤖 The Cooperative Agent Team

When initialized, the following personas are configured to cooperatively build your project:

```
                  ┌──────────────────────────────┐
                  │         SUPER AGENT          │
                  │   Orchestrator & Validator   │
                  └──────────────┬───────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  DESIGN AGENT   │     │  DEVELOPER AGENT│     │    QA AGENT     │
│ Figma & Tokens  │     │  React Coder    │     │ Breakpoint & a11y│
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                 │
                                 ▼
                        ┌─────────────────┐
                        │  REVIEW AGENT   │
                        │ Aesthetic Audit │
                        └─────────────────┘
```

1.  **Super Agent (Orchestrator)**: Ingests PRDs and design specifications, constructs the roadmap, logs progress, delegates tasks, and validates each development phase.
2.  **Design Agent (Figma Spec Parser)**: Translates design requirements, wireframes, or Figma links into structural tokens and components inventory.
3.  **UI Developer Agent (Vite/React Coder)**: Writes components (`components/ui`), pages, CSS frameworks, and coordinates motion wrappers (Framer Motion).
4.  **Responsive QA Agent (Breakpoint Tester)**: Validates layouts across device viewports (`320px`, `768px`, `1024px`, `1440px`) and asserts WCAG compliance.
5.  **Code Review Agent (Aesthetic Auditor)**: Inspects naming rules, ensures clean HSL color systems, and checks for placeholder removal.

---

## 📂 Generated Workspace Layout

```
├── AGENTS.md            ← Master workspace directive and layout pointers
├── CLAUDE.md            ← Claude Code adapter
├── GEMINI.md            ← Google Antigravity adapter
├── README.md            ← Human introduction
│
├── .ai/                 ← Base configurations, personas, and workflows
│   ├── settings.json    ← UI development stack & directory map
│   ├── context/         ← Coding-rules, ui-guidelines, and naming conventions
│   ├── agents/          ← Base personas and directives for each agent
│   ├── workflows/       ← Phased checklists for design-to-prd, coding, and review
│   └── project-management/ ← Progress logs and phase status sheets
│
├── .agents/             ← Google Antigravity rule and workflow mappings
├── .cursor/rules/       ← Cursor MDC attach-rules (core, ui, coding)
├── .claude/skills/      ← Claude skill facades
│
├── doc/                 ← Input specs (prd.md, design.md, how-to-use-ai.md)
└── codebase/            ← Output folder where the UI components and pages are generated
```

---

## 📄 License
MIT © [Umang Talpara](https://github.com/umangtalpara)
