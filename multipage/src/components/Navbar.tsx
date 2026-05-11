// components/Navbar.tsx
// 🧠 CONCEPT: Components
// A component is a reusable piece of UI. Instead of copying the navbar
// HTML on every page, we write it ONCE here and use <Navbar /> anywhere.
//
// 🧠 CONCEPT: "use client"
// Next.js components are SERVER components by default (fast, no JS sent to browser).
// When you need browser features like hooks (useState, usePathname),
// you must add "use client" at the very top.

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// 🧠 CONCEPT: Link vs <a>
// Always use Next.js <Link> instead of <a> for internal navigation.
// Link does client-side navigation (no full page reload = instant & smooth).
// <a> would reload the entire page — slow!

// 🧠 CONCEPT: usePathname
// This hook tells you the current URL path, e.g. "/about".
// We use it to add an "active" class to the current nav link.

const navLinks = [
  { href: "/",       label: "Home"  },
  { href: "/about",  label: "About" },
  { href: "/blog",   label: "Blog"  },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo / Brand */}
        <Link href="/" className="navbar-logo">
          ⚡ NextBasics
        </Link>

        {/* Navigation Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                // Add "active" class when this link matches the current page
                className={pathname === link.href ? "active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}