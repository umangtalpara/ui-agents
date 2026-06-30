# Coding Rules & Conventions

All UI components and layouts must adhere to these coding standards.

## 1. Component Modularity & Structure

- **Functional Components**: Write pure, single-responsibility React functional components. Use arrow function syntax (`const MyComponent = () => { ... }`).
- **One Component Per File**: Export one primary component per file. Place sub-elements or helper components in the same file only if they are small and private.
- **Strong Typing**: Use TypeScript for all prop interfaces and states. Avoid using `any`. If TypeScript is not enabled, use strict React `PropTypes`.
- **Hooks Usage**: Keep states as local as possible. Extract shared state patterns into custom hooks (e.g., `useScroll`, `useResponsive`).

## 2. HTML & Accessibility (a11y)

- **Semantic Elements**: Never use `<div>` for everything. Use appropriate semantic tags:
  - Header & Navigation: `<header>`, `<nav>`, `<menu>`
  - Document Flow: `<main>`, `<section>`, `<article>`, `<aside>`
  - Layout Blocks: `<figure>`, `<figcaption>`
  - Footers: `<footer>`
- **Interactive Elements**:
  - Buttons MUST use the `<button>` tag or have `role="button"` with keyboard listeners if an absolute necessity.
  - Links must use standard `<a>` or framework Link tags.
  - Form fields must have associated `<label>` tags (using `htmlFor`).
- **Touch Target Ergonomics**:
  - Interactive targets must have a minimum size of `48px * 48px` to prevent tap mistakes on mobile devices.
- **ARlA Labels**:
  - Include descriptive `aria-label` or `aria-describedby` attributes on icon-only buttons, modal close triggers, and navigation drawers.
  - Implement appropriate focus outlines (`focus-visible:ring-2 focus-visible:ring-cyan-500`).

## 3. Style Resolution & CSS

- **Tailwind CSS Utility Order**: Group classes by layout, sizing, spacing, colors/backgrounds, borders, interactive states, and responsive overrides.
- **No Class Name Overlap**: Use the `cn(...)` styling utility to dynamically merge classes and prevent overrides:
  ```typescript
  import { clsx, type ClassValue } from "clsx";
  import { twMerge } from "tailwind-merge";
  
  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  ```
- **Responsive Layout Design**:
  - Implement mobile-first styling (`flex flex-col md:flex-row`).
  - Use responsive grid structures instead of fixed sizes:
    `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.

## 4. Asset Integrity & Layout Shift (CLS)

- **Vector Graphics (SVG)**: Favor SVG vectors for illustrations and decorative shapes. Inline the SVGs or use Lucide React icons. Avoid using local `.png` or `.jpg` references unless the file is verified to exist.
- **Image Dimensions**: Always specify explicit `width` and `height` (or aspect ratios like `aspect-video` / `aspect-square`) on image elements to prevent Cumulative Layout Shift (CLS).
- **Tailwind Config Synchronization**: When using custom theme colors (like `bg-navy-950` or `text-cyan-500`), ensure they are configured inside the project's `tailwind.config.js` first. Do not use arbitrary colors (e.g. `bg-[#0b1329]`) directly in utilities; always bind them to theme variables.

