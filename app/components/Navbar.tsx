"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToHash } from "../lib/scrollToHash";
import { SITE, NAV_ITEMS, NAV_CTA } from "../lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage || !href.startsWith("/#")) {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", href);
    scrollToHash(href.slice(1));
  };

  return (
    <nav className="navbar">
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
          <Link href={NAV_CTA.href} className="btn-premium nav-cta">
            {NAV_CTA.label}
          </Link>
        </div>
      </div>
    </nav>
  );
}
