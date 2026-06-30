# UI/UX Design & Styling Skill

Use this skill when designing layout layouts, styling custom components, binding color variables, and planning layout scales.

## 1. Visual Token Implementations

### Glassmorphism Panel
To generate premium glassmorphism surfaces:
```tsx
<div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6 shadow-2xl">
  {/* Content */}
</div>
```

### Gradients and Text Glows
Use Tailwind's clip-text utility to create vibrant heading elements:
```tsx
<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyan-400">
  Vibrant Heading Title
</h1>
```

### Hover Micro-interactions
Bind scale adjustments and glowing borders:
```tsx
<div className="border border-slate-800 bg-slate-900/50 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer rounded-xl p-6">
  {/* Card Content */}
</div>
```

## 2. Layout Grid Scaling & Theme Matching
- Standard flex layout columns: `flex flex-col md:flex-row gap-6`.
- Standard grid layouts: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`.
- Ensure you wrap primary views in a container class, utilizing the color tokens extracted from Figma:
  ```tsx
  {/* Replace bg-slate-950 and text-slate-100 with the extracted brand colors */}
  <main className="min-h-screen bg-brand-background text-brand-text selection:bg-brand-accent selection:text-brand-contrast">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* View Modules */}
    </div>
  </main>
  ```
