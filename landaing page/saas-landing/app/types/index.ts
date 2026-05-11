import type { LucideIcon } from "lucide-react";

/* ─── Navigation ──────────────────────────────────── */
export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem extends NavLink {
  description?: string;
  icon?: LucideIcon;
  children?: NavLink[];
}

/* ─── Pricing ─────────────────────────────────────── */
export type BillingCycle = "monthly" | "annually";

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: { monthly: number; annually: number };
  badge?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

/* ─── Testimonials ────────────────────────────────── */
export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar: string;
  };
  rating: number;
}

/* ─── Features ────────────────────────────────────── */
export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  color?: string;
}

/* ─── Metrics ─────────────────────────────────────── */
export interface Metric {
  value: string;
  label: string;
  trend?: string;
}

/* ─── FAQ ─────────────────────────────────────────── */
export interface FaqItem {
  question: string;
  answer: string;
}