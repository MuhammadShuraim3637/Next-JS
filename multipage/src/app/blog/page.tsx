// app/blog/page.tsx
// 🧠 CONCEPT: Data in Next.js
// For now our blog posts are "hardcoded" (written directly in the file).
// In a real app you would fetch this from a database or a CMS API.
// But the STRUCTURE of the page stays the same — only the data source changes.
//
// 🧠 CONCEPT: TypeScript Interfaces
// We define a `Post` type so TypeScript knows exactly what shape
// each post object must have. This prevents bugs like typos!

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about Next.js, React, and web development.",
};

// TypeScript interface — defines the shape of a blog post object
interface Post {
  id:       number;
  slug:     string;
  title:    string;
  excerpt:  string;
  date:     string;
  category: string;
  readTime: string;
}

// 🧠 CONCEPT: Static Data (hardcoded)
// Perfect for learning. Later you'll replace this with:
//   const posts = await fetch("https://your-api.com/posts").then(r => r.json())
const posts: Post[] = [
  {
    id: 1,
    slug: "what-is-nextjs",
    title: "What is Next.js and Why Should You Learn It?",
    excerpt:
      "Next.js is a React framework that adds file-based routing, server rendering, and optimized builds out of the box. Here's why it's the top choice for modern web apps.",
    date: "May 8, 2025",
    category: "Introduction",
    readTime: "4 min read",
  },
  {
    id: 2,
    slug: "app-router-explained",
    title: "App Router vs Pages Router: What's the Difference?",
    excerpt:
      "Next.js 13 introduced the App Router. It uses React Server Components and a new folder structure. This post breaks down what changed and why it matters.",
    date: "May 10, 2025",
    category: "Deep Dive",
    readTime: "6 min read",
  },
  {
    id: 3,
    slug: "layouts-in-nextjs",
    title: "Mastering Layouts: Share UI Across Pages Effortlessly",
    excerpt:
      "Layouts let you wrap pages with shared UI like headers and footers. Nest multiple layouts together for complex apps. Learn how with examples.",
    date: "May 13, 2025",
    category: "Tutorial",
    readTime: "5 min read",
  },
  {
    id: 4,
    slug: "server-vs-client-components",
    title: "Server vs Client Components: When to Use Each",
    excerpt:
      "By default, all components in the App Router are Server Components. But sometimes you need useState or event listeners — that's when you reach for 'use client'.",
    date: "May 16, 2025",
    category: "Deep Dive",
    readTime: "7 min read",
  },
  {
    id: 5,
    slug: "deploying-nextjs-vercel",
    title: "Deploy Your Next.js App to Vercel in 5 Minutes",
    excerpt:
      "Vercel is built by the creators of Next.js. Push your code to GitHub, connect to Vercel, and you're live. No server setup needed.",
    date: "May 19, 2025",
    category: "DevOps",
    readTime: "3 min read",
  },
];

// Color map for category badges
const categoryColors: Record<string, string> = {
  Introduction: "#22c55e",
  "Deep Dive":  "#6c63ff",
  Tutorial:     "#f59e0b",
  DevOps:       "#06b6d4",
};

export default function BlogPage() {
  return (
    <div className="container">
      {/* ── Page Header ──────────────────────────────────── */}
      <div className="page-header">
        <span className="badge" style={{ marginBottom: "16px", display: "inline-block" }}>
          📝 The Blog
        </span>
        <h1>Articles & Tutorials</h1>
        <p>
          {posts.length} posts on Next.js, React, and modern web development.
        </p>
      </div>

      {/* ── Posts List ───────────────────────────────────── */}
      <div className="blog-grid" style={{ paddingBottom: "80px" }}>
        {posts.map((post) => (
          // 🧠 CONCEPT: key prop
          // When rendering lists, React needs a unique `key` on each item.
          // It uses this to track which items changed. Always use a
          // stable, unique value — never use the array index if you can avoid it.
          <article key={post.id} className="card blog-card">
            <div className="blog-card-meta">
              {/* Category badge with dynamic color */}
              <span
                className="badge"
                style={{
                  background: `${categoryColors[post.category]}22`,
                  color: categoryColors[post.category],
                }}
              >
                {post.category}
              </span>
              <span className="blog-date">{post.date}</span>
              <span className="blog-date">· {post.readTime}</span>
            </div>

            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>

            {/* 
              🧠 NOTE: This link goes to /blog/[slug].
              We haven't created that dynamic route yet — that's your
              next challenge! (See README for hints 😉)
            */}
            <span className="blog-read-more">Read more →</span>
          </article>
        ))}
      </div>

      {/* ── Concept Callout ──────────────────────────────── */}
      <div className="concept-box" style={{ marginBottom: "80px" }}>
        <strong>💡 Next Challenge: Dynamic Routes</strong>
        <p style={{ marginTop: "8px" }}>
          See the "Read more →" links? They should lead to individual post pages
          like <code>/blog/what-is-nextjs</code>. Create{" "}
          <code>app/blog/[slug]/page.tsx</code> to make it work. The{" "}
          <code>[slug]</code> folder name tells Next.js this is a dynamic route!
        </p>
      </div>
    </div>
  );
}