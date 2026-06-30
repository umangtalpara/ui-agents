# Design to PRD Workflow

## Identity
- **Name**: Design to PRD
- **Trigger**: New design mockup, Figma link, or layout specification submitted in `doc/design.md` or `doc/prd.md`.
- **Owner**: Super Agent → Design Agent

---

## Execution Flow

```
┌─────────────────────────┐
│   1. INGEST DESIGN      │
│   Super Agent reads     │
│   doc/design.md         │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   2. PARSE BLUEPRINT    │
│   Design Agent extracts │
│   colors, fonts, grids  │
│   & pages required      │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   3. VALIDATE TOKENS    │
│   Check if tokens match │
│   HSL electric navy/cyan│
│   design palette        │
└────────────┬────────────┘
             │
     ┌───────┴───────┐
     │               │
     ▼               ▼
 [Matches]       [Mismatch]
     │               │
     │               ▼
     │     ┌──────────────────┐
     │     │ Warn & rewrite   │
     │     │ to use HSL tokens│
     │     └────────┬─────────┘
     │              │
     ▼◄─────────────┘
┌─────────────────────────┐
│   4. GENERATE PRD       │
│   Produce detailed      │
│   doc/prd.md containing │
│   page inventory & specs│
└─────────────────────────┘
```

## Input
- `doc/design.md` — Figma link, image layouts, or wireframe descriptions.
- `doc/assets/` — Mockup images folder (automatically scanned by agent).
- `.ai/templates/prd-template.md` — Standard formatting layout.

## Output
- `doc/prd.md` — Completed, structured UI Product Requirements Document.
- `.ai/project-management/project-status.md` — Updated status to "Ingestion Complete".

## Validation Rules
1. The agent must automatically scan `doc/assets/` and ingest all image files (`.png`, `.jpg`, `.jpeg`, `.svg`) as design blueprints.
2. All target pages mentioned in design specifications or found in mockup images must exist in the PRD.
3. Color guidelines must map to HSL variables.
4. Interactive state animations must be declared.
