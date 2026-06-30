# UI/UX & Styling Guidelines

These guidelines define the design system, colors, aesthetics, typography, and responsive rules for all generated screens and components.

## 1. Visual Aesthetics & Design System

To construct premium, modern user interfaces that represent a state-of-the-art enterprise identity, use these core design tokens:

### A. Color Palette
Never use raw/generic CSS colors (like `#ff0000` or `bg-blue-500` blindly). Standardize on this curated, high-end HSL system:

*   **Primary Base**: Deep Electric Navy
    *   Dark backgrounds: `hsl(222.2, 84%, 4.9%)` (Tailwind slate-950)
    *   Slate Slate: `hsl(217.2, 32.6%, 17.5%)`
*   **Accent Glow**: Cyber/Electric Cyan
    *   Primary: `hsl(180, 100%, 50%)`
    *   Secondary/Glow: `hsl(190, 95%, 45%)`
*   **Surface / Glass Panels**:
    *   High-tech glassmorphism panels: `bg-slate-900/40 backdrop-blur-md border border-slate-800/60`
    *   White text contrasts: `text-slate-100` and descriptions in `text-slate-400`

### B. Glassmorphism & Visual Gradients
- Implement linear gradients for buttons, title cards, and background rings:
  `bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700`
- Use background radial or linear ambient blobs to break flat surfaces:
  `bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950`

### C. Typography
- Standardize on modern sans-serif fonts: **Outfit**, **Inter**, or **Roboto**.
- **Hero Headers**: `text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-cyan-400`
- **Section Titles**: `text-3xl md:text-4xl font-bold tracking-tight text-white`
- **Body Content**: `text-base md:text-lg text-slate-300 leading-relaxed`

---

## 2. Responsive & Adaptive Layouts (Mobile-First)

- **Mobile Viewports (`320px` to `480px`)**:
  - Keep padding small: `px-4 py-6` to maximize screen real estate.
  - Collapse all multi-column layouts to single columns (`grid-cols-1`).
  - Hamburger menu navigation.
- **Tablet Viewports (`768px` to `1024px`)**:
  - Allow double columns (`grid-cols-2`).
  - Increase padding: `px-8 py-12`.
- **Desktop & High Resolution (`1024px` and above)**:
  - Full grids: `grid-cols-3` or `grid-cols-4`.
  - Maximize content bounds using a standard container: `max-w-7xl mx-auto`.

---

## 3. Interaction & Micro-Animations

Create elements that react to interaction to feel alive:
- **Hover Transitions**:
  `hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out`
- **Card Glows**: Apply a subtle border color shift and drop-shadow on hover:
  `hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]`
- **Page Transitions**: Wrap routes/pages in Framer Motion wrappers for fluid fades and offsets:
  `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}`
