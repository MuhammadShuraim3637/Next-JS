/**
 * UI primitives — Badge, Card, Section
 *
 * TEACHING NOTES:
 * ───────────────
 * These are building blocks. Each uses CVA + cn() for composable,
 * conflict-free Tailwind class merging. Notice how:
 *
 * 1. `cn()` is always the final call — it deduplicates and merges.
 * 2. CVA `variants` handle the *semantic states* (color, size).
 * 3. The `className` prop always comes last in `cn()` so callers
 *    can override anything from the outside.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ══════════════════════════════════════════════════
   BADGE
   ══════════════════════════════════════════════════ */
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium font-body transition-colors",
  {
    variants: {
      variant: {
        brand:   "bg-brand-50 text-brand-600 ring-1 ring-brand-200",
        violet:  "bg-violet-50 text-violet-600 ring-1 ring-violet-200",
        teal:    "bg-teal-50 text-teal-600 ring-1 ring-teal-200",
        amber:   "bg-amber-50 text-amber-600 ring-1 ring-amber-200",
        rose:    "bg-rose-50 text-rose-600 ring-1 ring-rose-200",
        surface: "bg-surface-100 text-surface-600 ring-1 ring-surface-200",
        new:     "bg-brand-gradient text-white shadow-glow-sm",
      },
    },
    defaultVariants: { variant: "brand" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

/* ══════════════════════════════════════════════════
   CARD
   ══════════════════════════════════════════════════ */
const cardVariants = cva(
  "rounded-2xl transition-all duration-300",
  {
    variants: {
      variant: {
        default: [
          "bg-white border border-surface-100 shadow-card",
          "hover:shadow-card-hover hover:-translate-y-1",
        ],
        elevated: [
          "bg-white border border-surface-100 shadow-card-hover",
        ],
        ghost: [
          "bg-surface-50 border border-transparent",
          "hover:bg-white hover:border-surface-100 hover:shadow-card",
        ],
        gradient: [
          "bg-gradient-to-br from-brand-50 to-violet-50",
          "border border-brand-100",
        ],
        dark: [
          "bg-surface-900 border border-surface-700 text-white",
        ],
      },
      padding: {
        none: "",
        sm:   "p-4",
        md:   "p-6",
        lg:   "p-8",
        xl:   "p-10",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding }), className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

/* ══════════════════════════════════════════════════
   SECTION
   Layout wrapper: max-width + centered + vertical rhythm
   ══════════════════════════════════════════════════ */
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  containerClass?: string;
}

export function Section({
  as: Tag = "section",
  className,
  containerClass,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag className={cn("py-24 sm:py-32", className)} {...props}>
      <div className={cn("mx-auto max-w-7xl px-6 lg:px-8", containerClass)}>
        {children}
      </div>
    </Tag>
  );
}

/* ══════════════════════════════════════════════════
   SECTION HEADER
   Reusable eyebrow + heading + subtext block
   ══════════════════════════════════════════════════ */
interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-16",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Badge variant="brand" className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-surface-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-surface-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════
   GRADIENT TEXT
   Reusable shimmer text span
   ══════════════════════════════════════════════════ */
export function GradientText({
  className,
  children,
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "bg-text-gradient bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}