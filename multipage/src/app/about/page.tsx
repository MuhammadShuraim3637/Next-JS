// app/about/page.tsx
// 🧠 CONCEPT: Nested Routes
// This file is inside the `about` folder.
// Next.js automatically maps it to the URL: /about
//
// Folder structure:
//   app/
//   ├── page.tsx          →  /
//   ├── about/
//   │   └── page.tsx      →  /about   ← YOU ARE HERE
//   └── blog/
//       └── page.tsx      →  /blog

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about this Next.js project and the team behind it.",
};

const skills = [
  "Next.js", "React", "TypeScript", "CSS", "Node.js",
  "Git", "REST APIs", "Databases", "TailwindCSS", "Vercel",
];

const team = [
  {
    emoji: "👨‍💻",
    name: "Ali (You!)",
    role: "Beginner → Pro Developer",
    bio: "Started with zero knowledge, committed to mastering Next.js one concept at a time. This is step one of many.",
  },
  {
    emoji: "🤖",
    name: "Claude",
    role: "AI Teacher",
    bio: "Helps explain concepts, write clean code, and guide you through modern web development best practices.",
  },
  {
    emoji: "⚡",
    name: "Next.js",
    role: "The Framework",
    bio: "React-based framework by Vercel. Handles routing, rendering, performance, and deployment automatically.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Intro ──────────────────────────────────────────── */}
      <section className="container">
        <div className="about-intro">
          <div>
            <span className="badge" style={{ marginBottom: "20px", display: "inline-block" }}>
              About This Project
            </span>
            <h1>Learning Next.js, One Page at a Time</h1>
            <p>
              This project is your launchpad. Every file has comments explaining
              WHY things are done, not just how. Read the code like a book.
            </p>
            <p>
              The goal: by the time you've built 10 projects like this, you'll
              understand routing, layouts, components, and server rendering
              deeply enough to build anything.
            </p>

            {/* Skills */}
            <div className="skill-list">
              {skills.map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          {/* Avatar / Visual */}
          <div className="about-avatar">🚀</div>
        </div>
      </section>

      {/* ── Team ───────────────────────────────────────────── */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-header">
            <h2>The Team</h2>
            <p>Who's involved in this learning journey?</p>
          </div>

          <div className="grid-3">
            {team.map((member) => (
              <div key={member.name} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>
                  {member.emoji}
                </div>
                <h3 style={{ marginBottom: "6px" }}>{member.name}</h3>
                <p style={{ color: "var(--accent)", fontSize: "0.85rem", marginBottom: "12px", fontWeight: 600 }}>
                  {member.role}
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Concept Callout ────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="concept-box">
            <strong>💡 Key Concept: Why a separate About page?</strong>
            <p style={{ marginTop: "8px" }}>
              Each page in Next.js is a separate file. You navigate between them with{" "}
              <code>&lt;Link&gt;</code>. The browser doesn't do a full reload — Next.js
              swaps just the page content, keeping the Navbar and Footer in place.
              This is called <strong>client-side navigation</strong>.
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/blog" className="btn">
              Check out the Blog →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}