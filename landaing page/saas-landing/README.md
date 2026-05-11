# Axiom SaaS Landing Page

A production-grade Next.js 15 SaaS landing page built with Tailwind CSS + ShadCN UI patterns.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open browser
open http://localhost:3000
```

---

## Dependency Install Commands

```bash
# Core framework
npm install next@15.2.4 react@^19 react-dom@^19

# Tailwind CSS + PostCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p          # generates tailwind.config + postcss.config

# ShadCN utilities (the "engine" behind ShadCN components)
npm install class-variance-authority clsx tailwind-merge

# Radix UI primitives (headless, accessible)
npm install @radix-ui/react-accordion \
            @radix-ui/react-dialog \
            @radix-ui/react-navigation-menu \
            @radix-ui/react-slot \
            @radix-ui/react-tabs \
            @radix-ui/react-tooltip

# Icons
npm install lucide-react

# Animation (optional but recommended)
npm install framer-motion

# TypeScript
npm install -D typescript @types/node @types/react @types/react-dom
```

---

## Folder Structure

```
saas-landing/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout — fonts, metadata, global CSS
│   └── page.tsx                # Home page (server component)
│
├── components/
│   ├── ui/                     # Design system primitives (reuse everywhere)
│   │   ├── button.tsx          # Button — CVA variants (default, outline, gradient…)
│   │   └── primitives.tsx      # Badge, Card, Section, SectionHeader, GradientText
│   │
│   └── sections/               # Page sections (composed from primitives)
│       ├── Navbar.tsx          # Sticky nav with scroll-aware glassmorphism
│       ├── Hero.tsx            # Headline, CTA, metrics strip
│       ├── Features.tsx        # LogoStrip + Features grid
│       ├── Pricing.tsx         # Billing toggle + pricing cards
│       ├── Testimonials.tsx    # Column masonry testimonial grid
│       └── FooterFAQ.tsx       # FAQ accordion + CTA banner + Footer
│
├── constants/
│   └── index.ts                # All site data (nav, features, pricing, testimonials…)
│
├── hooks/
│   └── index.ts                # useScrollProgress, useMediaQuery, useIntersectionObserver
│
├── lib/
│   └── utils.ts                # cn() — Tailwind class merging utility
│
├── styles/
│   └── globals.css             # @tailwind directives, base resets, custom properties
│
├── types/
│   └── index.ts                # TypeScript interfaces for all data shapes
│
├── tailwind.config.ts          # Design tokens — colors, fonts, animations, shadows
├── next.config.ts              # Next.js config (image domains, etc.)
├── postcss.config.js           # PostCSS plugins
└── tsconfig.json               # TypeScript compiler options
```

---

## Architecture Decisions

### Why `cn()` everywhere?
`cn()` is `clsx` + `tailwind-merge`. It:
- Merges conditional class arrays cleanly
- Resolves Tailwind conflicts (e.g. `px-4 px-6` → `px-6`)
- Lets callers override component defaults via `className` prop

```tsx
// Without cn() — messy and conflict-prone
className={`base-class ${isActive ? "text-blue" : ""} ${className}`}

// With cn() — clean and conflict-safe
className={cn("base-class", isActive && "text-blue", className)}
```

### Why CVA for components?
`class-variance-authority` defines variant maps once:
```ts
const buttonVariants = cva("base", {
  variants: {
    variant: { default: "...", outline: "..." },
    size: { sm: "...", lg: "..." },
  },
});
```
Then in JSX: `<Button variant="outline" size="lg" />` — no switch statements.

### Why Radix UI?
Radix ships zero CSS. It handles all the accessibility complexity (ARIA, keyboard nav, focus management) so you only write Tailwind. ShadCN is simply pre-styled Radix components.

### Server vs Client components
- `app/page.tsx` → **server** (fast, SEO-friendly, no JS for layout)
- `Navbar`, `Pricing`, `FAQ` → **"use client"** (need useState/useEffect)
- Everything else → server by default

---

## Tailwind Patterns to Master

### 1. Responsive prefixes (mobile-first)
```tsx
// Mobile: 1 col → tablet: 2 col → desktop: 3 col
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

### 2. State variants
```tsx
// Hover, focus, active — all built in
<button className="bg-brand-500 hover:bg-brand-600 active:scale-95 focus-visible:ring-2">
```

### 3. Group hover
```tsx
// Parent hover controls child
<div className="group">
  <div className="group-hover:translate-y-1 transition-transform">
    Moves when parent is hovered
  </div>
</div>
```

### 4. Peer (checkbox trick)
```tsx
<input type="checkbox" className="sr-only peer" />
<div className="peer-checked:bg-brand-500 bg-gray-200 transition-colors" />
```

### 5. Arbitrary values
```tsx
// Escape the scale when you need exact values
<div className="scale-[1.02] top-[72px] w-[calc(100%-2rem)]">
```

### 6. Tailwind merge conflict resolution
```tsx
// tailwind-merge automatically resolves:
cn("px-4 py-2", "px-6") // → "py-2 px-6"  ✓ (not "px-4 py-2 px-6")
```

### 7. Animation with delay
```tsx
// Stagger reveals with inline style
{items.map((item, i) => (
  <div
    className="animate-fade-up"
    style={{ animationDelay: `${i * 80}ms` }}
  />
))}
```

---

## Adding ShadCN Components

ShadCN components are just files you copy into your project:

```bash
npx shadcn@latest init          # configure shadcn for your project
npx shadcn@latest add button    # adds components/ui/button.tsx
npx shadcn@latest add dialog    # adds the Dialog component
npx shadcn@latest add tabs      # etc.
```

The generated files use the same `cn()` + `cva` + Radix pattern shown here.

---

## Performance Tips

1. **Fonts** — Use `next/font` for zero-FOUT Google fonts (swap `@import` in globals.css)
2. **Images** — Always use `next/image` for automatic WebP + lazy loading
3. **Animations** — Prefer CSS animations over JS; use `will-change: transform` sparingly
4. **Code splitting** — Mark only interactive components as `"use client"` — keep server components server-side
5. **Tailwind purge** — The `content` array in `tailwind.config.ts` ensures unused classes are removed in production builds

---

## Scripts

```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```