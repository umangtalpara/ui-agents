# Frontend Engineering Skill

Use this skill when implementing React code, state stores, animation wrappers, and styling helper classes.

## 1. Classname Merging Template
Always import and apply the custom `cn(...)` utility helper to resolve Tailwind CSS class overlaps on reusable UI components:
```typescript
// src/utils/cn.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Example usage:
```tsx
import { cn } from "@/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export const StatusCard = ({ className, active, children, ...props }: CardProps) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-xl border border-slate-800 bg-slate-900/50 transition-all",
        active && "border-cyan-500/80 shadow-[0_0_20px_rgba(6,182,212,0.1)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
```

## 2. Framer Motion Page Wrappers
Wrap page boundaries in animated transition states:
```tsx
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } }
};

export const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
```
