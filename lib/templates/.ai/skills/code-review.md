# Code Review & Audit Skill

Use this skill when auditing generated UI component files, reviewing naming styles, checking styles, and checking for placeholders.

## Review Audit Checklist

### 1. Style & Theme Compliance
- [ ] Uses Electric Navy and Cyber Cyan color tokens correctly.
- [ ] No generic background overrides (e.g. `bg-blue-500` or raw `#0000ff`).
- [ ] Smooth transitions are configured on hover.
- [ ] Fluid responsive container widths (`max-w-7xl` or similar grids) are declared.

### 2. Code Modularity & Cleanup
- [ ] Components are modular and single-responsibility.
- [ ] Reusable buttons, cards, and inputs are stored in `components/ui/`.
- [ ] Tailwind class overrides merge using the `cn(...)` utility helper.
- [ ] Unused imports or debugging variables are removed.

### 3. Placeholder Inspection
- [ ] Zero placeholder strings (`TODO`, `lorem ipsum`, `placeholder`, `lorem`) in production source files.
- [ ] Proper error messages are displayed for missing assets.

### 4. Accessibility Check
- [ ] Page headings follow correct order hierarchy (a single `h1` per page).
- [ ] Icon-only buttons have descriptive `aria-label` tags.
- [ ] Keyboard focus outlines are styled.
