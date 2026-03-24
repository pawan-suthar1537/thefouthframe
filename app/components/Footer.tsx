import Link from "next/link";

const navigationLinks = [
  { label: "Selected Work", href: "/gallery" },
  { label: "Offerings", href: "/services" },
  { label: "Investment", href: "/plans" },
  { label: "Contact", href: "/contact" },
];

const connectLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/the_fourthframe_/",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:hello@thefourthframe.com",
    external: false,
  },
  {
    label: "Location",
    href: "/contact",
    external: false,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="logo-text">
              The Fourth<span>Frame</span>
            </Link>
            <p>
              Crafting stories, one frame at a time. The Fourth Frame blends
              photography, short-form film, and digital direction for brands that
              want a cleaner visual presence.
            </p>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <span className="footer-title">Navigation</span>
              {navigationLinks.map((link) => (
                <Link key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="footer-column">
              <span className="footer-title">Connect</span>
              {connectLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-caption">{year} The Fourth Frame. All rights reserved.</p>
          <div className="footer-meta">
            <Link href="/contact" className="footer-link footer-caption">
              Book a consultation
            </Link>
            <Link href="/gallery" className="footer-link footer-caption">
              See recent work
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
