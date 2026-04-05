"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Models", href: "/#work" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-shell">
        <Link
          href="/"
          className="logo-brand"
          aria-label="THE AGENCY FRAME home"
        >
          <img
            src="/images/logo.jpg"
            alt="The Agency Frame Logo"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`nav-link ${pathname === item.href ? "active" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link href="/contact" className="btn-premium nav-cta">
            Let’s Build the Frame
          </Link>
        </div>
      </div>
    </nav>
  );
}
