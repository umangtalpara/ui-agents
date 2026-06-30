# Component Implementation Reference Template

This template serves as a guide for implementing components with responsive properties, HSL theme colors, classname merging, and Framer Motion wrappers.

```tsx
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn"; // Tailwind merge helper
import { LucideIcon } from "lucide-react";

// 1. Define strong TypeScript interface prop schemas
export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: LucideIcon;
  actionText?: string;
  onAction?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  className,
  title,
  description,
  icon: Icon,
  actionText,
  onAction,
  ...props
}) => {
  return (
    // 2. Wrap component in interactive Framer Motion animation container
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      // 3. Apply Umang Talpara's glassmorphic dark border styling
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 md:p-8",
        "bg-slate-900/40 backdrop-blur-md border border-slate-800/60",
        "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
        "transition-colors duration-300",
        className
      )}
      {...props}
    >
      {/* Decorative Cyan background gradient glow blob */}
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      {/* 4. Semantic Icon header */}
      {Icon && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950/80 border border-cyan-800/50 text-cyan-400">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
      )}

      {/* 5. Accessible Heading structure */}
      <h3 className="text-xl font-bold tracking-tight text-white mb-2">
        {title}
      </h3>
      
      <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-6">
        {description}
      </p>

      {/* 6. Ergonomic Mobile Touch Target Button */}
      {actionText && (
        <button
          onClick={onAction}
          type="button"
          // Class targets minimum 48px size bounds
          className={cn(
            "inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold",
            "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950",
            "hover:from-cyan-400 hover:to-blue-500 active:scale-[0.98]",
            "transition-all duration-200 outline-none",
            "focus-visible:ring-2 focus-visible:ring-cyan-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
            "min-h-[48px] min-w-[120px]"
          )}
        >
          {actionText}
        </button>
      )}
    </motion.div>
  );
};
```
