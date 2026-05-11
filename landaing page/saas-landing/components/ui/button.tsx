/**
 * Button — ShadCN-style with CVA variants
 *
 * TEACHING NOTES (Tailwind + CVA):
 * ─────────────────────────────────
 * `cva` (class-variance-authority) is the backbone of ShadCN components.
 * It lets you define a *base* set of classes and then layer on *variants*
 * without string-concatenation hell.
 *
 * Pattern:
 *   const thing = cva("base classes", {
 *     variants: { size: { sm: "...", lg: "..." } },
 *     defaultVariants: { size: "sm" },
 *   });
 *
 * Then in JSX: <Button size="lg" variant="outline" />
 * CVA merges everything cleanly; twMerge resolves conflicts (e.g. px-4 vs px-6).
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ── Variant map ─────────────────────────────────── */
const buttonVariants = cva(
  // Base — always applied
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-xl font-body font-medium",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "select-none",
  ],
  {
    variants: {
      variant: {
        /* Solid brand CTA */
        default: [
          "bg-brand-500 text-white shadow-glow-sm",
          "hover:bg-brand-600 hover:shadow-glow hover:-translate-y-0.5",
          "active:translate-y-0 active:shadow-glow-sm",
        ],
        /* Subtle outlined */
        outline: [
          "border border-surface-200 bg-white text-surface-700",
          "hover:bg-surface-50 hover:border-surface-300 hover:-translate-y-0.5",
          "dark:border-surface-700 dark:bg-surface-900 dark:text-surface-200",
          "dark:hover:bg-surface-800",
        ],
        /* Ghost — no border, just hover fill */
        ghost: [
          "text-surface-600 hover:bg-surface-100 hover:text-surface-900",
          "dark:text-surface-400 dark:hover:bg-surface-800 dark:hover:text-surface-100",
        ],
        /* Gradient hero CTA */
        gradient: [
          "bg-brand-gradient text-white shadow-glow",
          "hover:shadow-glow-lg hover:-translate-y-0.5",
          "active:translate-y-0",
        ],
        /* Destructive */
        destructive: [
          "bg-rose-500 text-white",
          "hover:bg-rose-600 hover:-translate-y-0.5",
        ],
        /* Link */
        link: [
          "text-brand-500 underline-offset-4 hover:underline p-0 h-auto",
        ],
      },
      size: {
        xs: "h-7 px-3 text-xs",
        sm: "h-9 px-4 text-sm",
        md: "h-10 px-5 text-sm",
        lg: "h-11 px-6 text-base",
        xl: "h-13 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

/* ── Component ───────────────────────────────────── */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * When `asChild` is true, the Button renders as its child element
   * (e.g. a Next.js <Link>) while keeping all button styles.
   * This is the Radix "Slot" pattern — zero wrapper nodes.
   */
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-4 w-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12" cy="12" r="10"
                stroke="currentColor" strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span>Loading…</span>
          </>
        ) : children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };