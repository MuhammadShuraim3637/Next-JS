# ⚡ Next.js Basics — Multi-Page Website

> Your **first step** to becoming a professional Next.js developer.
> Every file in this project is packed with comments explaining the *why*, not just the *how*.

---

## 🚀 Quick Start (Get it running in 3 steps)

```bash
# Step 1 — Install dependencies
npm install

# Step 2 — Start the dev server
npm run dev

# Step 3 — Open your browser
# Visit: http://localhost:3000
```

That's it. You have a running multi-page website! 🎉

---

## 📦 Dependencies Explained

| Package | What it is | Why you need it |
|---|---|---|
| `next` | The framework | Routing, rendering, build system — the core |
| `react` | UI library | How you build components (JSX) |
| `react-dom` | React for the browser | Renders your React components into HTML |
| `typescript` | Type-safe JavaScript | Catches bugs before you run the code |
| `@types/react` | TypeScript types for React | Makes your editor understand React |
| `eslint` | Code linter | Warns you about bad code patterns |

**To install a new package:**
```bash
npm install package-name
# Example: npm install framer-motion
```

---

## 📁 Folder Structure

```
nextjs-basics/
│
├── app/                      ← 🧠 APP ROUTER lives here
│   ├── layout.tsx            ← Root layout (Navbar + Footer wrap every page)
│   ├── page.tsx              ← Home page  →  URL: /
│   ├── globals.css           ← Global styles for the whole app
│   ├── not-found.tsx         ← Shown on 404 errors
│   │
│   ├── about/
│   │   └── page.tsx          ← About page  →  URL: /about
│   │
│   └── blog/
│       └── page.tsx          ← Blog page   →  URL: /blog
│
├── components/               ← Reusable UI pieces
│   ├── Navbar.tsx            ← Navigation bar (used in layout.tsx)
│   └── Footer.tsx            ← Footer (used in layout.tsx)
│
├── public/                   ← Static files (images, icons, fonts)
│   └── (put images here)
│
├── package.json              ← Project config & dependencies
├── tsconfig.json             ← TypeScript config
└── next.config.js            ← Next.js config
```

> **Golden Rule:** Folder name = URL segment. File named `page.tsx` = the actual page.

---

## 🧠 Core Concepts — Explained Simply

### 1. File-Based Routing

In traditional web development you configure routes manually. In Next.js, **the file system IS the router**.

```
app/page.tsx           →  yoursite.com/
app/about/page.tsx     →  yoursite.com/about
app/blog/page.tsx      →  yoursite.com/blog
app/contact/page.tsx   →  yoursite.com/contact  (create this yourself!)
```

**To add a new page:**
1. Create a new folder inside `app/`
2. Add a `page.tsx` file inside it
3. Export a React component as default

Done. No router config needed.

---

### 2. Layouts

A layout wraps one or more pages and provides **shared UI**.

```
┌─────────────────────────────┐
│          NAVBAR             │  ← From layout.tsx
├─────────────────────────────┤
│                             │
│    {children} = your page   │  ← From page.tsx
│                             │
├─────────────────────────────┤
│          FOOTER             │  ← From layout.tsx
└─────────────────────────────┘
```

When you navigate from `/` to `/about`:
- ✅ Navbar stays (no re-render)
- ✅ Footer stays (no re-render)  
- 🔄 Only the page content swaps

This is why your app feels **instant** — much less work for the browser.

**You can nest layouts:**
```
app/
├── layout.tsx          ← Root layout (all pages)
└── blog/
    ├── layout.tsx      ← Blog layout (only blog pages)
    └── page.tsx
```

---

### 3. Server Components vs Client Components

This is the biggest concept in Next.js 13+.

| | Server Component | Client Component |
|---|---|---|
| **Default?** | ✅ Yes | ❌ No, opt-in |
| **Runs on** | Server (Node.js) | Browser |
| **Can use hooks?** | ❌ No | ✅ Yes |
| **Can use useState?** | ❌ No | ✅ Yes |
| **JS sent to browser?** | ❌ None | ✅ Yes |
| **Good for** | Data fetching, static UI | Interactivity, forms |

**To make a Client Component, add at the very top:**
```tsx
"use client";
```

**Rule of thumb:** Start with Server Components. Only add `"use client"` when you need useState, useEffect, or event handlers like onClick.

---

### 4. The `<Link>` Component

Never use `<a href="...">` for internal links. Always use Next.js `<Link>`.

```tsx
// ❌ Wrong — causes full page reload
<a href="/about">About</a>

// ✅ Right — instant client-side navigation
import Link from "next/link";
<Link href="/about">About</Link>
```

---

### 5. Metadata (SEO)

Each page can export a `metadata` object for SEO:

```tsx
export const metadata = {
  title: "About",        // becomes: <title>About | NextJS Basics</title>
  description: "...",    // becomes: <meta name="description" content="...">
};
```

The `template: "%s | NextJS Basics"` in `layout.tsx` automatically appends your site name.

---

### 6. Special Files

| Filename | Purpose |
|---|---|
| `page.tsx` | The actual page content |
| `layout.tsx` | Wrapper with shared UI |
| `loading.tsx` | Loading skeleton/spinner |
| `error.tsx` | Error boundary UI |
| `not-found.tsx` | Custom 404 page |

---

## 🏗️ Useful Commands

```bash
npm run dev      # Start development server (with hot reload)
npm run build    # Build for production
npm run start    # Run the production build
npm run lint     # Check for code problems
```

---

## 🎯 Your Next Challenges

Try these after you understand the basics:

### 🟢 Easy
- [ ] Add a **Contact** page (`app/contact/page.tsx`)
- [ ] Change the color scheme in `globals.css` (edit the CSS variables)
- [ ] Add more blog posts to the array in `app/blog/page.tsx`

### 🟡 Medium
- [ ] Create a **dynamic blog post** page (`app/blog/[slug]/page.tsx`)
- [ ] Add a `loading.tsx` file to show a spinner while pages load
- [ ] Create a **nested layout** just for the blog section

### 🔴 Hard
- [ ] Fetch blog posts from a real API (try `jsonplaceholder.typicode.com/posts`)
- [ ] Add search functionality to the blog page (needs `"use client"`)
- [ ] Deploy to **Vercel** (free, takes 5 minutes)

---

## 🌐 Deploy to Vercel (Free!)

1. Push this project to **GitHub**
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub
3. Click "New Project" → Import your repo
4. Click **Deploy** — that's it!

Your site will be live at `https://your-project.vercel.app` in ~2 minutes.

---

## 📚 Learning Resources

| Resource | Link |
|---|---|
| Official Docs | https://nextjs.org/docs |
| Learn Next.js (free course) | https://nextjs.org/learn |
| React Docs | https://react.dev |
| TypeScript for Beginners | https://www.typescriptlang.org/docs/handbook/intro.html |

---

## 🗺️ Your Learning Roadmap

```
Step 1 (NOW)    → Understand this project ← You are here
Step 2          → Add new pages & components
Step 3          → Learn dynamic routes [slug]
Step 4          → Fetch data from APIs
Step 5          → Learn useState & useEffect
Step 6          → Add a database (Prisma + PostgreSQL)
Step 7          → Authentication (NextAuth.js)
Step 8          → Deploy & share with the world
Step 9          → Build your portfolio
Step 10         → Get hired 🎉
```

---

*Built with ❤️ as a beginner learning project. Read every comment in the code!*