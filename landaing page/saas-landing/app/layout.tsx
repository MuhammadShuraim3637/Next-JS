import type { Metadata, Viewport } from "next";
import "./globals.css";

/* ── Metadata ──────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Axiom — Modern Observability Platform",
    template: "%s | Axiom",
  },
  description:
    "Real-time streaming analytics and observability for engineering teams. AI-powered anomaly detection, collaborative dashboards, and 200+ integrations.",
  keywords: ["observability", "monitoring", "analytics", "SaaS", "engineering"],
  authors: [{ name: "Axiom" }],
  creator: "Axiom",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://axiom.co",
    siteName: "Axiom",
    title: "Axiom — Modern Observability Platform",
    description: "Observe everything. Fix it faster.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axiom — Modern Observability Platform",
    description: "Observe everything. Fix it faster.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#2f4dff",
  width: "device-width",
  initialScale: 1,
};

/* ── Layout ────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}