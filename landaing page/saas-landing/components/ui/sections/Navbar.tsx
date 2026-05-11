"use client";

/**
 * Navbar — sticky, scroll-aware, glassmorphism on scroll
 *
 * TEACHING NOTES:
 * ───────────────
 * - `useEffect` + `scroll` listener to toggle the scrolled state.
 * - Glassmorphism via `backdrop-blur-md bg-white/80` — notice how
 *   Tailwind's opacity modifier (`/80`) is cleaner than rgba().
 * - `cn()` conditionally applies `border-b shadow-sm` only when scrolled.
 *   This is the pattern: base classes + conditional classes merged with cn().
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/app/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        // Always present
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        // Conditionally added on scroll
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-surface-100 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-display font-bold text-xl text-surface-900 hover:text-brand-500 transition-colors"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-gradient shadow-glow-sm">
            <Zap className="w-4 h-4 text-white" />
          </span>
          Axiom
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-body font-medium text-surface-600 hover:text-surface-900 hover:bg-surface-50 transition-all duration-150"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link href="/signup">Get started free</Link>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-surface-600 hover:bg-surface-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-surface-100 px-6 py-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm font-medium text-surface-700 hover:text-brand-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-surface-100 flex flex-col gap-2">
            <Button variant="outline" size="sm" asChild className="w-full">
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild className="w-full">
              <Link href="/signup">Get started free</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}