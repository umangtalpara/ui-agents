# Technical Stack Single Source of Truth

This document contains the approved list of library packages, styling components, and runtimes used across the codebase.

## 1. Core Frameworks & Libraries

- **Runtime Environment**: Node.js 20+ LTS
- **Core Library**: React v19 or React v18
- **Framework Choice**: Next.js 14+ (App Router) or Vite + React
- **Language**: TypeScript 5.x

## 2. Style & Layout Engine

- **Styling Utility**: Tailwind CSS v3+ / v4
- **Post-processor**: PostCSS 8.x + Autoprefixer 10.x
- **Icons Library**: Lucide React
- **Class Merging**:
  - `clsx` (v2.x) - for conditional class names
  - `tailwind-merge` (v2.x) - for clean tailwind overrides

## 3. Motion & Animation

- **Motion Library**: Framer Motion 11.x (highly recommended for micro-animations and page transitions)
- **Timeline Engine**: GSAP (GreenSock Animation Platform) + ScrollTrigger (used for custom parallax and long scroll animations)

## 4. State Management

- **Global State**: Zustand 4.x (lightweight, hook-based state store)
