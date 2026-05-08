// app/not-found.tsx
// 🧠 CONCEPT: Special Files in Next.js
// Next.js has special file names with built-in meaning:
//
//   page.tsx       → the page UI
//   layout.tsx     → wraps pages
//   loading.tsx    → shown while page loads
//   error.tsx      → shown when something crashes
//   not-found.tsx  → shown on 404 (wrong URL) ← THIS FILE
//
// You don't have to configure anything — just create the file!

import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="container"
      style={{ textAlign: "center", padding: "120px 24px" }}
    >
      <div style={{ fontSize: "5rem", marginBottom: "24px" }}>🔍</div>
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          marginBottom: "16px",
          fontFamily: "var(--font-heading)",
        }}
      >
        404 — Page Not Found
      </h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "36px", fontSize: "1.1rem" }}>
        Oops! This page doesn't exist. Check the URL or go back home.
      </p>
      <Link href="/" className="btn">
        ← Back to Home
      </Link>

      <div className="concept-box" style={{ maxWidth: "520px", margin: "48px auto 0", textAlign: "left" }}>
        <strong>💡 How does this work?</strong>
        <p style={{ marginTop: "8px" }}>
          Next.js automatically shows this page whenever a user visits a URL
          that doesn't match any <code>page.tsx</code> file. You can also
          trigger it programmatically using <code>notFound()</code> from
          <code>next/navigation</code>.
        </p>
      </div>
    </div>
  );
}