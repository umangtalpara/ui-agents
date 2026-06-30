# Architecture & Folder Rules

This document outlines the folder layout and directory structure for generated UI code.

## 1. Directory Structure

Generate all UI source code inside the `codebase/` folder. The standard structure is:

```
codebase/
├── public/              ← Static assets (images, icons, fonts)
├── src/
│   ├── assets/          ← Global stylesheets, fonts
│   ├── components/      ← Reusable presentation components
│   │   ├── ui/          ← Atom-level primitives (buttons, inputs, cards)
│   │   ├── layout/      ← Structure components (Header, Footer, Sidebar)
│   │   └── modules/     ← Feature-specific composite cards/forms
│   ├── hooks/           ← Custom React hooks (useScroll, useResponsive)
│   ├── pages/ (or app/) ← Routes and Page Views
│   ├── state/           ← Zustand store / Global State binders
│   └── utils/           ← Helper utilities (cn, formatting, validators)
├── tailwind.config.js   ← Configuration for themes, HSL colors, animations
└── package.json         ← Frontend dependencies
```

## 2. Abstraction Layers

- **Atomic Components (`components/ui`)**:
  - Tiny, stateless components representing simple elements.
  - Highly reusable. Must support passing class names (`className`) using the `cn` utility.
- **Layout Panels (`components/layout`)**:
  - Components that structure the screen.
  - Must remain fully responsive (e.g., Collapsible mobile sidebars, grid-based gutters).
- **Module Screens (`components/modules` & `pages`)**:
  - Coordinates state and multiple sub-components to deliver a functional view.
  - Ensure all layout shifts are minimized (CLS guidelines) by explicitly declaring container bounds or providing skeleton frames.

## 3. Global CSS & Tailwind Integration

- Include a primary `index.css` or `globals.css` that initializes Tailwind:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- Configure tailwind themes in `tailwind.config.js` to support HSL custom design tokens:
  ```javascript
  module.exports = {
    theme: {
      extend: {
        colors: {
          navy: {
            950: 'hsl(222.2, 84%, 4.9%)',
          },
          cyan: {
            500: 'hsl(180, 100%, 50%)',
          }
        }
      }
    }
  }
  ```
- Animations must be defined either directly using Tailwind utilities or using Framer Motion wrappers. Avoid mixing competing stylesheet libraries.
