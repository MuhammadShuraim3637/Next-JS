import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", ".dark"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ── Brand palette ───────────────────────────── */
      colors: {
        brand: {
          50:  "#f0f4ff",
          100: "#dce5ff",
          200: "#b8caff",
          300: "#86a1ff",
          400: "#4d6dff",
          500: "#2f4dff",   // primary action
          600: "#1a34e8",
          700: "#1428c0",
          800: "#162099",
          900: "#181f7a",
          950: "#0d1042",
        },
        surface: {
          0:   "#ffffff",
          50:  "#f8f9fc",
          100: "#f0f2f8",
          200: "#e4e7f0",
          300: "#cdd1e0",
          400: "#a0a8c0",
          500: "#6b7494",
          600: "#475068",
          700: "#333a52",
          800: "#1e2333",
          900: "#121726",
          950: "#0a0d18",
        },
        accent: {
          violet: "#7c3aed",
          teal:   "#0d9488",
          amber:  "#d97706",
          rose:   "#e11d48",
        },
      },

      /* ── Fonts ───────────────────────────────────── */
      fontFamily: {
        display: ["'Cabinet Grotesk'", "system-ui", "sans-serif"],
        body:    ["'Satoshi'",         "system-ui", "sans-serif"],
        mono:    ["'JetBrains Mono'",  "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        xs:    ["0.75rem",  { lineHeight: "1.125rem" }],
        sm:    ["0.875rem", { lineHeight: "1.375rem" }],
        base:  ["1rem",     { lineHeight: "1.625rem" }],
        lg:    ["1.125rem", { lineHeight: "1.75rem" }],
        xl:    ["1.25rem",  { lineHeight: "1.875rem" }],
        "2xl": ["1.5rem",   { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.375rem" }],
        "4xl": ["2.25rem",  { lineHeight: "2.75rem" }],
        "5xl": ["3rem",     { lineHeight: "1.1" }],
        "6xl": ["3.75rem",  { lineHeight: "1.05" }],
        "7xl": ["4.5rem",   { lineHeight: "1" }],
        "8xl": ["6rem",     { lineHeight: "1" }],
      },

      /* ── Spacing ─────────────────────────────────── */
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },

      /* ── Border radius ───────────────────────────── */
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      /* ── Shadows ─────────────────────────────────── */
      boxShadow: {
        "glow-sm":  "0 0 16px 0 rgba(47,77,255,0.25)",
        "glow":     "0 0 32px 0 rgba(47,77,255,0.30)",
        "glow-lg":  "0 0 64px 0 rgba(47,77,255,0.35)",
        "card":     "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.08)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.12)",
        "inset-top": "inset 0 2px 0 rgba(255,255,255,0.06)",
      },

      /* ── Background gradients ────────────────────── */
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(47,77,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(47,77,255,.04) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(47,77,255,0.15) 0%, transparent 70%)",
        "brand-gradient":
          "linear-gradient(135deg, #2f4dff 0%, #7c3aed 100%)",
        "text-gradient":
          "linear-gradient(135deg, #2f4dff 0%, #7c3aed 60%, #a855f7 100%)",
      },

      /* ── Keyframes ───────────────────────────────── */
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(47,77,255,0.2)" },
          "50%":      { boxShadow: "0 0 40px rgba(47,77,255,0.5)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up":    "fade-up 0.6s ease-out both",
        "fade-in":    "fade-in 0.4s ease-out both",
        "float":      "float 6s ease-in-out infinite",
        "shimmer":    "shimmer 3s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "marquee":    "marquee 30s linear infinite",
        "spin-slow":  "spin-slow 20s linear infinite",
      },

      /* ── Background size ─────────────────────────── */
      backgroundSize: {
        "grid": "48px 48px",
        "200":  "200% auto",
      },
    },
  },
  plugins: [],
};

export default config;