"use client";

/**
 * FAQ — Radix Accordion with smooth animation
 * CTA — full-bleed gradient section
 * Footer — clean multi-column
 *
 * TEACHING NOTES — Radix Accordion:
 * ────────────────────────────────────
 * Radix components are "headless" — they ship zero CSS.
 * You apply Tailwind to the primitives. `data-[state=open]` and
 * `data-[state=closed]` are data-attributes Radix sets automatically.
 * We use `data-[state=open]:rotate-180` to animate the chevron.
 * The content uses CSS grid animation via `grid-rows-[0fr]` →
 * `grid-rows-[1fr]` — the smoothest way to animate height in CSS.
 */

import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/primitives";
import { FAQ_ITEMS } from "@/app/constants";
import { cn } from "@/lib/utils";

/* Brand icons — lucide-react no longer ships brand/logo icons */
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════
   FAQ
   ══════════════════════════════════════════════════ */
export function FAQ() {
  return (
    <Section id="faq" className="bg-surface-50">
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you wanted to know. If you don't find your answer, email us at hello@axiom.co."
      />

      <div className="max-w-2xl mx-auto">
        <Accordion.Root type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="bg-white border border-surface-100 rounded-xl overflow-hidden shadow-sm data-[state=open]:shadow-card"
            >
              <Accordion.Trigger
                className={cn(
                  "w-full flex items-center justify-between px-6 py-4",
                  "text-left text-sm font-semibold font-body text-surface-900",
                  "hover:bg-surface-50 transition-colors group"
                )}
              >
                {item.question}
                {/* 
                  TEACHING — Radix data-attribute targeting:
                  `data-[state=open]:rotate-180` rotates the chevron
                  when Accordion sets `data-state="open"` on the trigger.
                  This is pure CSS via Tailwind's arbitrary variant syntax.
                */}
                <ChevronDown
                  className="w-4 h-4 text-surface-400 transition-transform duration-200 shrink-0 ml-4
                             group-data-[state=open]:rotate-180"
                />
              </Accordion.Trigger>

              <Accordion.Content
                className={cn(
                  // Grid animation — most performant height transition
                  "grid transition-all duration-300 ease-out",
                  "data-[state=open]:grid-rows-[1fr] data-[state=closed]:grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm font-body text-surface-500 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </Section>
  );
}

/* ══════════════════════════════════════════════════
   CTA BANNER
   ══════════════════════════════════════════════════ */
export function CTABanner() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        {/* 
          TEACHING — Gradient border trick:
          A `p-px` wrapper with `bg-brand-gradient` creates a 1px gradient border.
          The inner div has a solid bg that "punches through", leaving only the gradient border.
          More control than `border-image` which doesn't work with border-radius.
        */}
        <div className="relative rounded-3xl bg-brand-gradient p-px shadow-glow-lg overflow-hidden">
          <div className="relative rounded-[calc(1.5rem-1px)] bg-surface-950 px-8 py-16 text-center overflow-hidden">
            {/* Background glow */}
            <div
              className="absolute inset-0 bg-brand-gradient opacity-10 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <p className="font-body text-sm font-medium text-brand-300 uppercase tracking-widest mb-4">
                Ready when you are
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
                Ship. Observe. Iterate.
                <br />
                Repeat.
              </h2>
              <p className="mt-5 text-lg text-surface-400 max-w-xl mx-auto leading-relaxed">
                Join 40,000+ teams who&apos;ve replaced 3 tools with one.
                Start free in under 2 minutes.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="gradient" size="xl" asChild>
                  <Link href="/signup">
                    Get started for free
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="xl"
                  className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  asChild
                >
                  <Link href="/contact">Talk to sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   FOOTER
   ══════════════════════════════════════════════════ */
const FOOTER_LINKS = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  Company: ["About", "Blog", "Careers", "Press", "Legal"],
  Developers: ["Docs", "API Reference", "SDKs", "Integrations", "Discord"],
  Support: ["Help Center", "Contact", "Community", "Security", "Privacy"],
};

export function Footer() {
  return (
    <footer className="border-t border-surface-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-display font-bold text-lg text-surface-900"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-gradient shadow-glow-sm">
                <Zap className="w-3.5 h-3.5 text-white" />
              </span>
              Axiom
            </Link>
            <p className="mt-3 text-sm font-body text-surface-500 leading-relaxed">
              Modern observability for teams who ship fast.
            </p>
            <div className="mt-5 flex gap-3">
              {[TwitterIcon, GithubIcon, LinkedinIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg border border-surface-200 flex items-center justify-center text-surface-400 hover:text-surface-700 hover:border-surface-300 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold font-body uppercase tracking-wider text-surface-900 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-body text-surface-500 hover:text-surface-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-surface-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-surface-400">
            © {new Date().getFullYear()} Axiom, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs font-body text-surface-400 hover:text-surface-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}