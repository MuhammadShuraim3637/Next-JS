// app/page.tsx
// 🧠 CONCEPT: File-based Routing
// In Next.js App Router, the FILE LOCATION = the URL.
//
//   app/page.tsx          →  /          (Home)
//   app/about/page.tsx    →  /about
//   app/blog/page.tsx     →  /blog
//
// Every route MUST have a file named page.tsx inside its folder.
// The folder name becomes the URL segment.

import Link from "next/link";
import type { Metadata } from "next";

// 🧠 CONCEPT: Per-page Metadata
// Each page can export its own metadata. Next.js merges it with
// the root layout's metadata (the template we set in layout.tsx).
// This page will have: <title>Home | NextJS Basics</title>
export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to NextJS Basics — your first multi-page website!",
};

// Feature cards data — keeping data separate from UI is good practice
const features = [
  {
    icon: "🗂️",
    title: "App Router",
    desc: "Next.js 14's modern routing system. Folders become URL paths, files become pages. Simple and intuitive.",
  },
  {
    icon: "🧩",
    title: "Layouts",
    desc: "Shared UI like Navbar and Footer lives in layout.tsx. It wraps every page so you never repeat yourself.",
  },
  {
    icon: "🔗",
    title: "Routing",
    desc: "Navigate between pages instantly with <Link>. No page reloads. Fast like a native app.",
  },
  {
    icon: "⚡",
    title: "Server Components",
    desc: "Components render on the server by default. Zero JavaScript sent to browser unless you need it.",
  },
  {
    icon: "🎨",
    title: "CSS Modules / Global CSS",
    desc: "Style your app with global CSS or scoped CSS Modules. No class name conflicts.",
  },
  {
    icon: "🔍",
    title: "SEO Ready",
    desc: "Export metadata from any page to get perfect <title> and <meta> tags for search engines.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">
            <span className="badge">🚀 Next.js 14 · App Router</span>
          </div>

          <h1>Build Modern Websites with Next.js</h1>

          <p>
            This is your first multi-page Next.js project. Explore the pages,
            read the comments in the code, and become a pro developer step by
            step.
          </p>

          <div className="hero-buttons">
            <Link href="/about" className="btn">
              Meet the Team →
            </Link>
            <Link href="/blog" className="btn btn-outline">
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What You're Learning</h2>
            <p>
              This project demonstrates the core concepts of Next.js App Router.
              Click around and check the source code!
            </p>
          </div>

          <div className="grid-3">
            {features.map((f) => (
              <div key={f.title} className="card">
                <div style={{ fontSize: "2rem", marginBottom: "14px" }}>
                  {f.icon}
                </div>
                <h3 style={{ marginBottom: "10px" }}>{f.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div
            className="card"
            style={{
              textAlign: "center",
              background:
                "linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(255,101,132,0.10) 100%)",
              borderColor: "rgba(108,99,255,0.4)",
              padding: "60px 40px",
            }}
          >
            <h2 style={{ marginBottom: "16px" }}>Ready to go deeper?</h2>
            <p
              style={{
                color: "var(--text-muted)",
                marginBottom: "28px",
                maxWidth: "460px",
                margin: "0 auto 28px",
              }}
            >
              Read the README, explore the blog page, and then try adding your
              own page!
            </p>
            <Link href="/blog" className="btn">
              Explore Blog Posts →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}