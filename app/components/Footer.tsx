import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-primary)", padding: "8rem 0 4rem", borderTop: "1px solid var(--border)" }}>
      <div className="page-container">
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "4rem", marginBottom: "6rem" }}>
          
          <div style={{ maxWidth: "400px" }}>
            <Link href="/" className="logo-text" style={{ textDecoration: "none", color: "var(--text-primary)" }}>
              TheFourth<span>Frame</span>
            </Link>
            <p style={{ marginTop: "2rem", fontSize: "0.95rem", color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.8 }}>
              Crafting stories, one frame at a time. A visual production house specializing in cinematic photography and digital strategy.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
               <span style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--text-muted)", marginBottom: "1rem" }}>Navigation</span>
               <Link href="/gallery" style={{ textDecoration: "none", fontSize: "0.85rem", color: "var(--text-secondary)" }}>Selected Work</Link>
               <Link href="/services" style={{ textDecoration: "none", fontSize: "0.85rem", color: "var(--text-secondary)" }}>Offerings</Link>
               <Link href="/plans" style={{ textDecoration: "none", fontSize: "0.85rem", color: "var(--text-secondary)" }}>Investment</Link>
               <Link href="/contact" style={{ textDecoration: "none", fontSize: "0.85rem", color: "var(--text-secondary)" }}>Contact</Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
               <span style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--text-muted)", marginBottom: "1rem" }}>Connect</span>
               <a href="https://www.instagram.com/the_fourthframe_/" target="_blank" style={{ textDecoration: "none", fontSize: "0.85rem", color: "var(--text-secondary)" }}>Instagram</a>
               <a href="mailto:hello@thefourthframe.com" style={{ textDecoration: "none", fontSize: "0.85rem", color: "var(--text-secondary)" }}>Email</a>
               <a href="#" style={{ textDecoration: "none", fontSize: "0.85rem", color: "var(--text-secondary)" }}>X / Twitter</a>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border)", paddingTop: "2rem", flexWrap: "wrap", gap: "1.5rem" }}>
          <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 300, letterSpacing: "0.05em" }}>
            © 2024 THE FOURTH FRAME. ALL RIGHTS RESERVED.
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
            <a href="#" style={{ fontSize: "0.7rem", color: "var(--text-muted)", textDecoration: "none" }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: "0.7rem", color: "var(--text-muted)", textDecoration: "none" }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
