"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const agencyNav = [
  { label: "Services", href: "/" },
  { label: "Models", href: "/" },

];



const studioPresence = [
  { city: "Bikaner", note: "Primary Base" },

];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/the_fourthframe_/" },

];

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    <footer className="footer footer-reimagined">
      <div className="footer-backdrop" aria-hidden="true" />
      <div className="footer-watermark">FOURTH FRAME</div>

      {/* Full-width Video CTA Band */}
      {!isContactPage && (
        <div className="footer-top-band flex-center-vertical" style={{ position: "relative", overflow: "hidden" }}>
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
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
          {/* Dark overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.6) 100%)",
              zIndex: 1,
            }}
          />
          {/* Content */}
          <div className="footer-top-copy" style={{ position: "relative", zIndex: 2 }}>

            <h2>Build visuals that look premium before production even starts.</h2>
          </div>

        </div>
      )}

      <div className="page-container">
        <div className="footer-main-layout">
          {/* Column 1: Agency (Left Align) */}
          <div className="footer-nav-col">
            <span className="footer-label-gold">AGENCY</span>
            <div className="footer-nav-links-v4">
              {agencyNav.map((link) => (
                <Link key={link.label} href={link.href} className="footer-nav-link-v4">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Spacer to restore symmetry after removing Quick Links */}
          <div className="footer-spacer" aria-hidden="true" />

          {/* Column 3: Central Branding (The Anchor - Center Align) */}
          <div className="footer-brand-central">
            <Link href="/" className="logo-text-gold-center">
              We Command the Stage. We Curate the Face
            </Link>
            <p className="footer-desc-v4">
              Premium talent casting for global brands and comprehensive backstage logistics for large-scale fashion shows. We handle the hustle; you take the applause
            </p>
            <div className="footer-contact-pills-v4">
              <a href="mailto:hello@thefourthframe.com" className="footer-pill-v4">
                hello@thefourthframe.com
              </a>
            </div>
          </div>

          {/* Column 4: Studio Presence (Right Align) */}
          <div className="footer-nav-col align-right">
            <span className="footer-label-gold">STUDIO</span>
            <div className="footer-location-stack-v4 align-right">
              {studioPresence.map((location) => (
                <div key={location.city} className="footer-location-item-v4 align-right">
                  <strong>{location.city}</strong>
                  <span>{location.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 5: Socials (Right Align) */}
          <div className="footer-nav-col align-right">
            <span className="footer-label-gold">SOCIALS</span>
            <div className="footer-social-strip-v4 align-right">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link-editorial align-right"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Symmetric Bottom section */}
        <div className="footer-bottom-premium-v4">
          <div className="footer-badges-v4">
            <span className="badge-outline-gold-v4">EST. 2024</span>
            <span className="badge-outline-gold-v4">PRODUCTION PARTNER</span>
            <span className="badge-outline-gold-v4">PAN-INDIA</span>
          </div>
          <p className="copyright-text-v4">
            &copy; {year} THE AGENCY FRAME. OPERATED BY THE FOURTH FRAME.
          </p>
        </div>
      </div>
    </footer>
  );
}
