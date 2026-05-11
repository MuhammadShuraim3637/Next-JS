import {
  Zap, Shield, BarChart3, Globe, Puzzle, Lock,
  ArrowRight, Sparkles, Users, Layers,
} from "lucide-react";
import type {
  NavItem, PricingTier, Testimonial,
  Feature, Metric, FaqItem,
} from "@/app/types";

/* ─── Navigation ──────────────────────────────────── */
export const NAV_ITEMS: NavItem[] = [
  {
    label: "Product",
    href: "#features",
    children: [
      { label: "Features",     href: "#features",     description: "Everything you need to ship fast" },
      { label: "Integrations", href: "#integrations", description: "Connect your existing stack" },
      { label: "Changelog",    href: "/changelog",    description: "What's new in Axiom" },
    ],
  },
  { label: "Pricing",    href: "#pricing" },
  { label: "Customers",  href: "#testimonials" },
  { label: "Docs",       href: "/docs" },
  { label: "Blog",       href: "/blog" },
];

/* ─── Metrics ─────────────────────────────────────── */
export const METRICS: Metric[] = [
  { value: "99.99%",  label: "Uptime SLA",         trend: "+0.01% this quarter" },
  { value: "< 50ms",  label: "Avg. Response Time",  trend: "2× faster YoY" },
  { value: "40,000+", label: "Active Teams",        trend: "+8,000 last month" },
  { value: "$2.4B",   label: "Revenue Processed",   trend: "+180% YoY" },
];

/* ─── Features ────────────────────────────────────── */
export const FEATURES: Feature[] = [
  {
    id: "ai",
    icon: Sparkles,
    title: "AI-Powered Insights",
    description:
      "Surface patterns in your data automatically. Axiom's ML engine flags anomalies before they become incidents.",
    badge: "New",
    color: "brand",
  },
  {
    id: "realtime",
    icon: Zap,
    title: "Real-time Streaming",
    description:
      "Process millions of events per second with sub-millisecond latency. No batching. No backpressure.",
    color: "violet",
  },
  {
    id: "collab",
    icon: Users,
    title: "Collaborative Dashboards",
    description:
      "Build dashboards together with live cursors, inline comments, and version history — like Figma, but for data.",
    color: "teal",
  },
  {
    id: "security",
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified. RBAC, SAML SSO, audit logs, and data residency controls out of the box.",
    color: "rose",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Deep Analytics",
    description:
      "Funnel analysis, cohorts, retention curves — all queryable with plain SQL or our no-code builder.",
    color: "amber",
  },
  {
    id: "integrations",
    icon: Puzzle,
    title: "200+ Integrations",
    description:
      "Connect Segment, Snowflake, Kafka, dbt, and more in one click. Bring your data wherever it lives.",
    color: "brand",
  },
];

/* ─── Pricing ─────────────────────────────────────── */
export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For indie hackers and early-stage startups.",
    price: { monthly: 0, annually: 0 },
    features: [
      "Up to 5 team members",
      "1 GB data ingestion / mo",
      "7-day data retention",
      "3 dashboards",
      "Community support",
    ],
    cta: "Start for free",
  },
  {
    id: "pro",
    name: "Pro",
    description: "When you're ready to move fast and break nothing.",
    price: { monthly: 49, annually: 39 },
    badge: "Most popular",
    features: [
      "Unlimited team members",
      "100 GB data ingestion / mo",
      "90-day data retention",
      "Unlimited dashboards",
      "AI anomaly detection",
      "Priority email & chat support",
      "Custom domains",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom contracts, dedicated infra, and white-glove onboarding.",
    price: { monthly: 299, annually: 249 },
    features: [
      "Everything in Pro",
      "Unlimited data ingestion",
      "Unlimited retention",
      "SAML SSO & SCIM",
      "Custom SLA & uptime",
      "Dedicated Slack channel",
      "Security review & BAA",
    ],
    cta: "Talk to sales",
  },
];

/* ─── Testimonials ────────────────────────────────── */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Axiom cut our debugging time in half. The real-time streaming + AI insights combo is genuinely magic — I can't imagine going back to our old stack.",
    author: {
      name: "Sarah Chen",
      title: "Head of Engineering",
      company: "Linear",
      avatar: "https://avatars.githubusercontent.com/u/1?v=4",
    },
    rating: 5,
  },
  {
    id: "2",
    quote:
      "We migrated from Datadog and cut our observability bill by 70%. The dashboards are faster, prettier, and our team actually uses them now.",
    author: {
      name: "Marcus Rivera",
      title: "CTO",
      company: "Raycast",
      avatar: "https://avatars.githubusercontent.com/u/2?v=4",
    },
    rating: 5,
  },
  {
    id: "3",
    quote:
      "The collaborative dashboards alone are worth the subscription. Our PM, data team, and engineers finally share one source of truth.",
    author: {
      name: "Priya Nair",
      title: "VP of Product",
      company: "Vercel",
      avatar: "https://avatars.githubusercontent.com/u/3?v=4",
    },
    rating: 5,
  },
  {
    id: "4",
    quote:
      "I've evaluated every observability tool on the market. Axiom wins on DX, price, and performance. Full stop.",
    author: {
      name: "James O'Brien",
      title: "Staff SRE",
      company: "Shopify",
      avatar: "https://avatars.githubusercontent.com/u/4?v=4",
    },
    rating: 5,
  },
  {
    id: "5",
    quote:
      "Onboarding took 20 minutes. We had our first dashboard live in an afternoon. The integrations just work.",
    author: {
      name: "Yuki Tanaka",
      title: "Senior Engineer",
      company: "Planetscale",
      avatar: "https://avatars.githubusercontent.com/u/5?v=4",
    },
    rating: 5,
  },
];

/* ─── FAQ ─────────────────────────────────────────── */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How does the free plan work?",
    answer:
      "The Starter plan is free forever with no credit card required. You get 1 GB of data ingestion per month, 7-day retention, and up to 5 seats. When you're ready to scale, upgrade with one click.",
  },
  {
    question: "Can I self-host Axiom?",
    answer:
      "Yes — Axiom is available as a managed cloud service and as a self-hosted deployment via our Helm chart for Kubernetes. Enterprise customers can run Axiom entirely in their own VPC.",
  },
  {
    question: "How does pricing scale beyond the included ingestion?",
    answer:
      "Additional ingestion is billed at $0.25/GB on Pro and $0.15/GB on Enterprise. You'll never get a surprise bill — you can set hard caps or soft alerts per workspace.",
  },
  {
    question: "Is my data encrypted?",
    answer:
      "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Enterprise plans include dedicated encryption keys (BYOK) and are eligible for HIPAA BAA agreements.",
  },
  {
    question: "What integrations do you support?",
    answer:
      "200+ integrations including Datadog agent compatibility, OpenTelemetry, Segment, Kafka, dbt, Snowflake, Databricks, Vercel, AWS, GCP, and Azure. Full list in our docs.",
  },
];

/* ─── Logo list ───────────────────────────────────── */
export const LOGOS = [
  "Vercel", "Linear", "Raycast", "Shopify", "Planetscale",
  "Loom", "Notion", "Retool", "Supabase", "Resend",
];