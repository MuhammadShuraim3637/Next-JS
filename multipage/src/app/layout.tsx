// app/layout.tsx
// 🧠 CONCEPT: Root Layout
// This file wraps EVERY page in your app.
// Think of it as the "frame" of your house — the walls stay the same,
// only the content inside changes when you navigate.

import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

// 🧠 CONCEPT: Metadata
// Next.js lets you define <title> and <meta> tags using this export.
// No need to manually write HTML <head> tags!
export const metadata: Metadata = {
  title: {
    default: "NextJS Basics",
    // %s will be replaced by the page's own title, e.g. "About | NextJS Basics"
    template: "%s | NextJS Basics",
  },
  description: "A beginner-friendly multi-page Next.js website",
};

// 🧠 CONCEPT: children prop
// Whatever page the user visits, Next.js injects it here as `children`.
// Layout renders once; only children swap out on navigation.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar stays on every page ✅ */}
        <Navbar />

        {/* This is where Home / About / Blog pages render */}
        <main className="main-content">{children}</main>

        {/* Footer stays on every page ✅ */}
        <Footer />
      </body>
    </html>
  );
}