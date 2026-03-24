"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false); // Minimal theme defaults to light
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navItems = [
    { label: "Overview", href: "/" },
    { label: "Work", href: "/gallery" },
    { label: "Offerings", href: "/services" },
    { label: "Pricing", href: "/plans" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          <Link href="/" className="logo-text" style={{ textDecoration: "none", color: "var(--text-primary)" }}>
            TheFourth<span>Frame</span>
          </Link>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? "active" : ""}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {dark ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>

          <div style={{ display: "none" }} id="mobile-toggle-v2">
             {/* Mobile implementation would go here, simplified for desktop-first review */}
          </div>
        </div>
      </nav>
    </>
  );
}
