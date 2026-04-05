"use client";

import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToHash } from "../lib/scrollToHash";

const agencyNav = [
  { label: "Services", href: "/#services" },
  { label: "Models", href: "/#work" },
];

const studioPresence = [{ city: "Bikaner", note: "Primary Base" }];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/the_fourthframe_/" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const isHomePage = pathname === "/";
  const ctaBandRef = useRef<HTMLDivElement>(null);
  const [shouldLoadBandVideo, setShouldLoadBandVideo] = useState(false);

  useEffect(() => {
    if (isContactPage || shouldLoadBandVideo) {
      return;
    }

    const band = ctaBandRef.current;

    if (!band) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setShouldLoadBandVideo(true);
        observer.disconnect();
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(band);

    return () => {
      observer.disconnect();
    };
  }, [isContactPage, shouldLoadBandVideo]);

  const handleAgencyClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage || !href.startsWith("/#")) {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", href);
    scrollToHash(href.slice(1));
  };

  return (
    <footer className="footer footer-reimagined">
      <div className="footer-backdrop" aria-hidden="true" />
      <div className="footer-watermark">FOURTH FRAME</div>

      {!isContactPage && (
        <div
          ref={ctaBandRef}
          className="footer-top-band flex-center-vertical"
          style={{ position: "relative", overflow: "hidden" }}
        >
          {shouldLoadBandVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                zIndex: 0,
              }}
            >
              <source src="/main/CTABG.mp4" type="video/mp4" />
            </video>
          ) : (
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "var(--bg-dark)",
                zIndex: 0,
              }}
            />
          )}

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.6) 100%)",
              zIndex: 1,
            }}
          />

          <div className="footer-top-copy" style={{ position: "relative", zIndex: 2 }}>
            <h2>Build visuals that look premium before production even starts.</h2>
          </div>
        </div>
      )}

      <div className="page-container">
        <div className="footer-main-v5">
          <div className="footer-left-v5">
            <h2 className="footer-heading-v5">
              WE COMMAND <br />
              THE STAGE. <br />
              WE CURATE <br />
              THE FACE
            </h2>
            <div className="footer-info-v5">
              <p className="footer-desc-v5">
                Premium talent casting for global brands and comprehensive backstage
                logistics for large-scale fashion shows. We handle the hustle; you take
                the applause.
              </p>
              <a href="mailto:hello@thefourthframe.com" className="footer-email-v5">
                HELLO@THEFOURTHFRAME.COM
              </a>
            </div>
          </div>

          <div className="footer-right-v5">
            <div className="footer-nav-section-v5">
              <span className="footer-label-v5">SOCIALS</span>
              <div className="footer-links-v5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link-v5"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-nav-section-v5">
              <span className="footer-label-v5">STUDIO</span>
              <div className="footer-links-v5">
                {studioPresence.map((location) => (
                  <div key={location.city} className="footer-location-v5">
                    <strong>{location.city}</strong>
                    <span>{location.note}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="footer-nav-section-v5">
              <span className="footer-label-v5">AGENCY</span>
              <div className="footer-links-v5">
                {agencyNav.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="footer-link-v5"
                    onClick={(event) => handleAgencyClick(event, link.href)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-v5">
          <div className="footer-badges-v5">
            <span className="badge-v5">EST. 2024</span>
            <span className="badge-v5">PRODUCTION PARTNER</span>
            <span className="badge-v5">PAN-INDIA</span>
          </div>
          <p className="copyright-v5">
            &copy; {year} THE AGENCY FRAME. OPERATED BY THE FOURTH FRAME.
          </p>
        </div>
      </div>
    </footer>
  );
}
