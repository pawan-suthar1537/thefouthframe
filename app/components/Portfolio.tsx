export default function Portfolio() {
  const works = [
    {
      title: "Bridal Elegance",
      category: "Photography",
      gradient: "linear-gradient(135deg, #2a1f3d 0%, #4a2040 50%, #2a1020 100%)",
      large: true,
    },
    {
      title: "Behind The Scenes",
      category: "Video Production",
      gradient: "linear-gradient(135deg, #1a2030 0%, #2a3040 50%, #1a1a2a 100%)",
      large: false,
    },
    {
      title: "Fashion Editorial",
      category: "Photography",
      gradient: "linear-gradient(135deg, #302020 0%, #402a2a 50%, #201515 100%)",
      large: false,
    },
    {
      title: "Brand Campaign",
      category: "Digital Strategy",
      gradient: "linear-gradient(135deg, #1a2a20 0%, #2a3a2a 50%, #1a2020 100%)",
      large: false,
    },
    {
      title: "Product Showcase",
      category: "Photography",
      gradient: "linear-gradient(135deg, #2a2a1a 0%, #3a3a2a 50%, #20201a 100%)",
      large: false,
    },
    {
      title: "Pack Up Moments",
      category: "BTS Content",
      gradient: "linear-gradient(135deg, #1a1a30 0%, #2a2040 50%, #15152a 100%)",
      large: false,
    },
  ];

  return (
    <section className="section portfolio" id="portfolio">
      <div className="section-header">
        <div className="section-label">
          <span className="section-label-line"></span>
          Our Work
          <span className="section-label-line"></span>
        </div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A curated selection of our finest shoots and creative productions.
        </p>
      </div>

      <div className="portfolio-grid">
        {works.map((work) => (
          <div
            key={work.title}
            className={`portfolio-item ${work.large ? "portfolio-item-large" : ""}`}
          >
            <div
              className="portfolio-bg"
              style={{ background: work.gradient }}
            >
              {/* Decorative elements within portfolio items */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0.08,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: work.large ? "6rem" : "3rem",
                    fontWeight: 800,
                    color: "white",
                    letterSpacing: "-2px",
                  }}
                >
                  TF
                </span>
              </div>
            </div>
            <div className="portfolio-overlay">
              <h4>{work.title}</h4>
              <p>{work.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
