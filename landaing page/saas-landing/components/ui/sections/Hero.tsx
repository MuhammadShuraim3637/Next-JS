"use client";

/**
 * Hero — the most important section on the page.
 *
 * TEACHING NOTES — Animation-delay stagger with Tailwind:
 * ────────────────────────────────────────────────────────
 * Tailwind doesn't have `animation-delay` utilities by default (v3).
 * Use inline `style={{ animationDelay: "Xms" }}` for staggered reveals.
 * The `animate-fade-up` class triggers the keyframe we defined in config.
 * `animation-fill-mode: both` (baked into the keyframe) means the element
 * starts at opacity:0 before the animation fires — no flash.
 *
 * Grid background:
 * ────────────────
 * `bg-grid-pattern` + `bg-grid` (custom background-size) creates a subtle
 * dot/line grid using only CSS — no SVG, no image asset.
 * The `[mask-image:...]` fades the grid out at the edges for a clean look.
 */

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/primitives";
import { METRICS } from "@/app/constants";

export function Hero() {
  return (
    <section className="relative isolate min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Grid + gradient background */}
      <div
        className="absolute inset-0 -z-10 bg-grid-pattern bg-grid opacity-100
                   [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,white_30%,transparent_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-hero-gradient"
        aria-hidden
      />
      {/* Decorative blobs */}
      <div
        className="absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                   rounded-full bg-brand-400/10 blur-3xl animate-pulse-glow"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Eyebrow badge */}
        <div
          className="animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          <Badge variant="brand" className="mb-6 cursor-pointer hover:ring-brand-400 transition-all">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Axiom 3.0 is live — What&apos;s new
            <ArrowRight className="w-3 h-3" />
          </Badge>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-surface-900 tracking-tight leading-[1.05]"
          style={{ animationDelay: "80ms" }}
        >
          Observe everything.{" "}
          <span className="bg-text-gradient bg-clip-text text-transparent">
            Fix it faster.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-up mt-6 text-lg sm:text-xl text-surface-500 max-w-2xl mx-auto leading-relaxed"
          style={{ animationDelay: "160ms" }}
        >
          Axiom is the modern observability platform for engineering teams who
          ship fast. Real-time streaming, AI-powered anomaly detection, and
          collaborative dashboards — all in one place.
        </p>

        {/* CTA row */}
        <div
          className="animate-fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <Button variant="gradient" size="xl" asChild>
            <Link href="/signup">
              Start for free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <Link href="#demo" className="gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-50 border border-brand-200">
                <Play className="w-3 h-3 text-brand-500 fill-brand-500" />
              </span>
              Watch demo
            </Link>
          </Button>
        </div>

        {/* Trust signal */}
        <p
          className="animate-fade-up mt-4 text-sm text-surface-400"
          style={{ animationDelay: "300ms" }}
        >
          No credit card required · Free plan forever · SOC 2 certified
        </p>

        {/* Metrics strip */}
        <div
          className="animate-fade-up mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-surface-200 rounded-2xl overflow-hidden border border-surface-200"
          style={{ animationDelay: "400ms" }}
        >
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="bg-white px-6 py-5 text-center hover:bg-surface-50 transition-colors"
            >
              <div className="font-display text-3xl font-bold text-surface-900">
                {m.value}
              </div>
              <div className="mt-1 text-sm font-body text-surface-500">
                {m.label}
              </div>
              {m.trend && (
                <div className="mt-1 text-xs text-brand-500 font-medium">
                  {m.trend}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}