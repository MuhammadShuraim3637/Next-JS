"use client";

/**
 * LogoStrip — auto-scrolling marquee of customer logos
 *
 * TEACHING NOTES — Marquee with pure CSS:
 * ────────────────────────────────────────
 * We duplicate the logo list so the scroll is seamless.
 * `animate-marquee` translates X by -50% (exactly one copy width).
 * `overflow-hidden` + `flex` + `whitespace-nowrap` lock the layout.
 * The gradient overlay fades edges using `[mask-image:]` — this is
 * Tailwind's arbitrary property syntax: `[property:value]`.
 */

import { cn } from "@/lib/utils";
import { LOGOS, FEATURES } from "@/app/constants";
import { Section, SectionHeader, Card, Badge } from "@/components/ui/primitives";

/* ══════════════════════════════════════════════════
   LOGO STRIP
   ══════════════════════════════════════════════════ */
export function LogoStrip() {
  const doubled = [...LOGOS, ...LOGOS]; // seamless loop

  return (
    <section className="py-16 border-y border-surface-100 bg-surface-50">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-body font-medium text-surface-400 uppercase tracking-widest mb-10">
          Trusted by 40,000+ engineering teams worldwide
        </p>
        {/* Outer mask fades edges */}
        <div
          className="relative overflow-hidden
            [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]"
        >
          {/* Marquee track — hover pauses */}
          <ul
            className="flex gap-16 w-max animate-marquee hover:[animation-play-state:paused]"
            aria-label="Customer logos"
          >
            {doubled.map((name, i) => (
              <li
                key={`${name}-${i}`}
                className="flex items-center font-display font-bold text-lg text-surface-300 hover:text-surface-500 transition-colors select-none whitespace-nowrap"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   FEATURES
   ══════════════════════════════════════════════════ */

// Color map for icon backgrounds
const colorMap: Record<string, string> = {
  brand:  "bg-brand-50 text-brand-500 ring-brand-100",
  violet: "bg-violet-50 text-violet-500 ring-violet-100",
  teal:   "bg-teal-50   text-teal-500   ring-teal-100",
  rose:   "bg-rose-50   text-rose-500   ring-rose-100",
  amber:  "bg-amber-50  text-amber-500  ring-amber-100",
};

export function Features() {
  return (
    <Section id="features" className="bg-white">
      <SectionHeader
        eyebrow="Platform"
        title={
          <>
            Built for teams who{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              move fast
            </span>
          </>
        }
        subtitle="Everything you need to observe, debug, and improve your systems — no duct tape required."
      />

      {/* 
        TEACHING — Responsive grid:
        `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` is the bread-and-butter
        responsive grid. Each breakpoint prefix (sm:, lg:) overrides the
        mobile-first default. `group` on the card enables `group-hover:` on
        children — the icon lifts when you hover the whole card.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feature, i) => {
          const Icon = feature.icon;
          const colors = colorMap[feature.color ?? "brand"];
          return (
            <Card
              key={feature.id}
              className="group relative overflow-hidden"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Hover glow spot */}
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-brand-400/5
                           group-hover:bg-brand-400/10 transition-all duration-500 blur-2xl"
                aria-hidden
              />

              {/* Icon */}
              <div
                className={cn(
                  "inline-flex items-center justify-center w-12 h-12 rounded-xl ring-1 mb-4 transition-transform duration-300 group-hover:-translate-y-0.5",
                  colors
                )}
              >
                <Icon className="w-5 h-5" />
              </div>

              {/* Badge */}
              {feature.badge && (
                <Badge variant="new" className="absolute top-4 right-4 text-2xs">
                  {feature.badge}
                </Badge>
              )}

              <h3 className="font-display text-lg font-semibold text-surface-900 mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-surface-500 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}