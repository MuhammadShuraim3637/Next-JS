/**
 * Home page — orchestrates all landing page sections.
 *
 * TEACHING NOTES — Next.js App Router:
 * ────────────────────────────────────
 * - This file is a SERVER component by default (no "use client").
 * - Server components can't use hooks (useState, useEffect) or browser APIs.
 * - Sections that need interactivity (Navbar, Pricing, FAQ) are marked
 *   "use client" in their own files — Next.js will automatically split
 *   them into client bundles.
 * - This keeps the page shell lightweight and SSR-friendly.
 */

import { Navbar }        from "@/components/ui/sections/Navbar";
import { Hero }          from "@/components/ui/sections/Hero";
import { LogoStrip, Features } from "@/components/ui/sections/Features";
import { Pricing }       from "@/components/ui/sections/Pricing";
import { Testimonials }  from "@/components/ui/sections/Testimonials";
import { FAQ, CTABanner, Footer } from "@/components/ui/sections/FooterFAQ";

export default function HomePage() {
  return (
    <>
      {/* Sticky navigation */}
      <Navbar />

      <main>
        {/* Above the fold */}
        <Hero />

        {/* Social proof — logos */}
        <LogoStrip />

        {/* Product features grid */}
        <Features />

        {/* Interactive pricing table */}
        <Pricing />

        {/* Customer testimonials */}
        <Testimonials />

        {/* FAQ accordion */}
        <FAQ />

        {/* Full-bleed CTA banner */}
        <CTABanner />
      </main>

      <Footer />
    </>
  );
}