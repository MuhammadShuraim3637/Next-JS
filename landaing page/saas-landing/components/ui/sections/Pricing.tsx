"use client";

/**
 * Pricing — interactive billing toggle, highlighted tier, feature lists
 *
 * TEACHING NOTES — State-driven class switching:
 * ──────────────────────────────────────────────
 * `billingCycle` is the single state variable that drives everything:
 * - The toggle button's aria-checked
 * - Which price number is shown
 * - The "Save 20%" badge visibility
 * 
 * The highlighted card uses `ring-2 ring-brand-500 shadow-glow scale-[1.02]`
 * to pop out of the grid. `scale-[1.02]` is an arbitrary value — Tailwind
 * lets you escape its scale presets with `[...]` for precise control.
 */

import { useState } from "react";
import Link from "next/link";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge, Section, SectionHeader } from "@/components/ui/primitives";
import { PRICING_TIERS } from "@/app/constants";
import { cn } from "@/lib/utils";
import type { BillingCycle } from "@/app/types";

export function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const isAnnual = billing === "annually";

  return (
    <Section id="pricing" className="bg-surface-50">
      <SectionHeader
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        subtitle="Start free, no credit card. Scale as your team grows. Cancel anytime."
      />

      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-3 mb-14">
        <span
          className={cn(
            "text-sm font-body font-medium transition-colors",
            !isAnnual ? "text-surface-900" : "text-surface-400"
          )}
        >
          Monthly
        </span>

        {/* 
          TEACHING — Custom toggle with a hidden checkbox:
          The `peer` class exposes the checkbox state to sibling elements.
          `peer-checked:bg-brand-500` changes the track color when checked.
          `peer-checked:translate-x-5` slides the thumb.
          This is CSS-only interactivity via Tailwind's peer modifier.
        */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isAnnual}
            onChange={(e) => setBilling(e.target.checked ? "annually" : "monthly")}
            aria-label="Toggle annual billing"
          />
          <div
            className="w-11 h-6 bg-surface-200 rounded-full
                       peer-checked:bg-brand-500 transition-colors duration-300"
          />
          <div
            className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow
                       transition-transform duration-300 peer-checked:translate-x-5"
          />
        </label>

        <span
          className={cn(
            "text-sm font-body font-medium transition-colors flex items-center gap-2",
            isAnnual ? "text-surface-900" : "text-surface-400"
          )}
        >
          Annually
          <Badge variant="teal" className="text-2xs">Save 20%</Badge>
        </span>
      </div>

      {/* Pricing grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.id}
            className={cn(
              "relative rounded-2xl bg-white border transition-all duration-300",
              tier.highlighted
                ? "border-brand-400 shadow-glow ring-2 ring-brand-500/20 scale-[1.02]"
                : "border-surface-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
            )}
          >
            {/* Popular badge */}
            {tier.badge && (
              <div className="absolute -top-3.5 inset-x-0 flex justify-center">
                <Badge variant="new" className="shadow-glow-sm">
                  <Zap className="w-3 h-3" />
                  {tier.badge}
                </Badge>
              </div>
            )}

            <div className="p-8">
              {/* Header */}
              <h3 className="font-display text-xl font-bold text-surface-900">
                {tier.name}
              </h3>
              <p className="mt-1 text-sm font-body text-surface-500">
                {tier.description}
              </p>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold text-surface-900">
                  ${isAnnual ? tier.price.annually : tier.price.monthly}
                </span>
                {tier.price.monthly > 0 && (
                  <span className="text-surface-400 font-body text-sm">/mo</span>
                )}
              </div>
              {isAnnual && tier.price.monthly > 0 && (
                <p className="mt-1 text-xs text-surface-400">
                  Billed annually (${tier.price.annually * 12}/yr)
                </p>
              )}

              {/* CTA */}
              <Button
                variant={tier.highlighted ? "gradient" : "outline"}
                size="lg"
                asChild
                className="w-full mt-6"
              >
                <Link href={tier.id === "enterprise" ? "/contact" : "/signup"}>
                  {tier.cta}
                </Link>
              </Button>

              {/* Divider */}
              <div className="my-8 border-t border-surface-100" />

              {/* Features */}
              <ul className="space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-body text-surface-600">
                    <Check
                      className={cn(
                        "w-4 h-4 mt-0.5 shrink-0",
                        tier.highlighted ? "text-brand-500" : "text-teal-500"
                      )}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-10 text-center text-sm font-body text-surface-400">
        All plans include unlimited API calls, webhooks, and our 24/7 status page.
        <Link href="/pricing" className="text-brand-500 hover:underline ml-1">
          Compare all features →
        </Link>
      </p>
    </Section>
  );
}