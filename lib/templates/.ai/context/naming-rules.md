# Naming Rules & Conventions

To maintain a clean and scanable workspace, developers and agents must adhere to the following naming standards:

## 1. Files and Folders

- **Directory Names**: Always use `kebab-case`. Examples: `components/layout`, `components/ui`, `custom-hooks`.
- **Component Files**: Use `PascalCase` for React components. Examples: `HeroSection.tsx`, `Navbar.tsx`, `CustomButton.tsx`.
- **Hook Files**: Use `camelCase` starting with `use`. Examples: `useResponsive.ts`, `useWindowScroll.ts`.
- **Utility / Test Files**: Use `kebab-case`. Examples: `tailwind-merge.ts`, `hero-section.test.tsx`.

## 2. Components and Code Variables

- **React Component Names**: Must use `PascalCase` matching the file name. Examples: `export const GlassCard = () => { ... }`.
- **TypeScript Interfaces / Types**: Must use `PascalCase`. Examples: `interface ButtonProps`, `type ThemeMode`.
- **CSS Class Names (if using custom stylesheet classes)**: Use `kebab-case` prefixed with a namespace. Examples: `.pp-card-container`, `.pp-text-glowing`.
- **Variables / Functions**: Must use `camelCase`. Examples: `const menuItems`, `const handleToggleMenu`.
- **Constants**: Use `UPPER_SNAKE_CASE`. Examples: `const BREAKPOINT_MOBILE = 320`.
