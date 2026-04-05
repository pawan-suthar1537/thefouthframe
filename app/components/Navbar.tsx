"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Models", href: "/#work" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-shell">
        <Link
          href="/"
          className="logo-brand"
          aria-label="THE AGENCY FRAME home"
          onClick={() => setMobileOpen(false)}
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
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link href="/contact" className="btn-premium nav-cta" onClick={() => setMobileOpen(false)}>
            Let’s Build the Frame
          </Link>

          {/* Hamburger Icon */}
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <div className={`hamburger-icon ${mobileOpen ? "open" : ""}`}>
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu-inner">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`mobile-link ${pathname === item.href ? "active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
              {/* <Link
                href="/contact"
                className="btn-main mobile-menu-cta"
                onClick={() => setMobileOpen(false)}
              >
                Start Project
              </Link> */}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
