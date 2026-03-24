"use client";

import { motion } from "motion/react";

const plans = [
  {
    name: "Visual Starter",
    price: "₹14,999",
    period: "Single Shoot",
    features: ["4-Hour Session", "20 Edited Stills", "2 Cinematic Reels", "Standard Grading", "Digital Delivery"],
    cta: "Request Start",
    featured: false,
  },
  {
    name: "Editorial Growth",
    price: "₹34,999",
    period: "Per Month",
    features: ["Bi-Monthly Shoots", "50 Edited Stills", "8 Cinematic Reels", "Advanced Grading", "Social Curation", "Strategy Consult"],
    cta: "Request Growth",
    featured: true,
  },
  {
    name: "Elite Production",
    price: "₹89,999",
    period: "Per Month",
    features: ["Weekly Shoots", "Unlimited Captures", "Unlimited Cinematic Reels", "Full Channel Management", "Direct Messaging Support", "Brand Identity Systems"],
    cta: "Request Elite",
    featured: false,
  },
];

export default function PlansPage() {
  return (
    <>
      <div className="page-hero" style={{ textAlign: "left", padding: "10rem 4rem 4rem" }}>
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
         >
           <span className="section-label">Investment</span>
           <h1 style={{ fontSize: "5rem", maxWidth: "800px" }}>Tailored <span className="accent-text">Plans</span> for Modern Growth.</h1>
           <p style={{ maxWidth: "500px", marginTop: "2rem", color: "var(--text-secondary)", fontWeight: 300 }}>
             Flexible packages designed with a cinematic vision and strategic curation in mind. Choose the level of production your brand deserves.
           </p>
         </motion.div>
      </div>

      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="page-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
            <div style={{ background: "var(--bg-primary)", padding: "4rem 2rem", borderRight: "1px solid var(--border)" }}>
               <h3 style={{ fontSize: "1.2rem", fontWeight: 500, marginBottom: "2rem" }}>Packages</h3>
               <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.8 }}>Every brand has unique needs. If our standard plans don&apos;t fit your requirements, we offer custom strategy sessions.</p>
               <a href="/contact" className="btn-ghost" style={{ marginTop: "2rem", borderBottomColor: "var(--accent)" }}>Custom Quote</a>
            </div>

            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                style={{ background: p.featured ? "var(--bg-secondary)" : "var(--bg-primary)", padding: "4rem 2rem", transition: "var(--transition)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)", marginBottom: "1rem", display: "block" }}>{p.name}</span>
                <div style={{ fontSize: "2.5rem", fontWeight: 500, marginBottom: "0.5rem" }}>{p.price}</div>
                <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "3rem" }}>{p.period}</div>
                
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "4rem" }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ fontSize: "0.82rem", color: "var(--text-secondary)", fontWeight: 300 }}>• {f}</li>
                  ))}
                </ul>

                <a href="/contact" className={p.featured ? "btn-minimal" : "btn-ghost"} style={{ width: "100%", justifyContent: "center" }}>{p.cta}</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
