import Link from "next/link";

const agencyNav = [
  { label: "Talent Roster", href: "#talent" },
  { label: "Production", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "Locations", href: "#locations" },
];

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Plans", href: "/plans" },
  { label: "Contact", href: "/contact" },
];

const studioPresence = [
  { city: "Pune", note: "Primary Base" },
  { city: "Mumbai", note: "Campaign Production" },
  { city: "Remote", note: "Pan-India + International" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/the_fourthframe_/" },
  { label: "Vimeo", href: "https://vimeo.com/" },
  { label: "Behance", href: "https://www.behance.net/" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer-reimagined">
      <div className="footer-backdrop" aria-hidden="true" />
      <div className="footer-watermark">FOURTH FRAME</div>

      <div className="page-container">
        {/* Editorial Top Band - Vertically Centered */}
        <div className="footer-top-band flex-center-vertical">
          <div className="footer-top-copy">
            <span className="footer-label-gold accent-line-both">NEXT CAMPAIGN</span>
            <h2>Build visuals that look premium before production even starts.</h2>
          </div>
          <Link href="/contact" className="btn-premium">
            START PROJECT
          </Link>
        </div>

        {/* Perfectly Symmetric 5-Column Grid */}
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

          {/* Column 2: Pages (Left Align) */}
          <div className="footer-nav-col">
            <span className="footer-label-gold">PAGES</span>
            <div className="footer-nav-links-v4">
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href} className="footer-nav-link-v4">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Central Branding (The Anchor - Center Align) */}
          <div className="footer-brand-central">
            <Link href="/" className="logo-text-gold-center">
              THE <br /> AGENCY <br /> FRAME
            </Link>
            <p className="footer-desc-v4">
              A visual production partner for campaigns that need
              sharper execution.
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
