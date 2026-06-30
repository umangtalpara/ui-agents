# Testing & Verification Skill

Use this skill when verifying UI outputs, checking responsive layout scaling, testing accessibility rules, and checking navigation flows.

## 1. Responsive Viewport Checklists
Confirm elements scale appropriately on standard width widths:
- **Mobile (`320px` to `480px`)**:
  - Open page in developer tools and check responsive wrap.
  - Verify that padding doesn't push content bounds past margins.
  - Ensure zero horizontal scrolling exists on pages.
- **Tablet (`768px`)**:
  - Verify multi-column grid wrap fits cleanly.
- **Desktop (`1024px` to `1440px`)**:
  - Verify page container aligns to `max-w-7xl` boundaries.

## 2. Accessibility Compliance Audit
- Check interactive element sizes: Confirm buttons and links maintain a tap boundary of at least `48px * 48px`.
- Check keyboard navigation: Tab focus outline ring (`focus-visible:ring-2`) must be visible when stepping using keyboard commands.
- Check text contrast: Ensure text is clearly visible against backgrounds (especially gradients or dark panel backdrops).
- Check standard HTML validation: Ensure page headers use correct hierarchy (`h1` -> `h2` -> `h3`).
