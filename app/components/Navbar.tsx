"use client";

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToHash } from "../lib/scrollToHash";
import { SITE, NAV_ITEMS, NAV_CTA } from "../lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage || !href.startsWith("/#")) {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", href);
    scrollToHash(href.slice(1));
  };

  // On non-home pages, we always want the 'scrolled' styling so text is visible on white background
  const navClass = `navbar ${!isHomePage || isScrolled ? "scrolled" : ""}`;

  return (
    <nav className={navClass}>
      <div className="navbar-shell">
        <Link href="/" className="logo-brand" aria-label={`${SITE.name} home`}>
          <Image
            src={SITE.logo}
            alt={`${SITE.name} Logo`}
            width={48}
            height={48}
            priority
            sizes="48px"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </Link>

        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="nav-link"
                onClick={(event) => handleNavClick(event, item.href)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {pathname === "/contact" ? (
            <Link
              href="/"
              className="flex items-center justify-center p-2 rounded-full transition-transform hover:-translate-x-1"
              style={{ color: "#0F0F0F", background: "white", width: "40px", height: "40px" }}
              aria-label="Go back"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </Link>
          ) : (
            <Link href={NAV_CTA.href} className="btn-premium nav-cta">
              {NAV_CTA.label}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
