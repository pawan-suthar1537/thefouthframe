"use client";

import { useEffect, useEffectEvent, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Talent", href: "#talent" },
  { label: "Production", href: "#services" },
  { label: "Locations", href: "#locations" },
  { label: "Work", href: "#work" },
  { label: "Investment", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const syncScrollState = useEffectEvent(() => {
    setScrolled(window.scrollY > 24);
  });

  useEffect(() => {
    syncScrollState();
    const handleScroll = () => syncScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
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
            Start Project
          </Link>

          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? "Close" : "Menu"}
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
                  <span aria-hidden="true">/</span>
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-main mobile-menu-cta"
                onClick={() => setMobileOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
