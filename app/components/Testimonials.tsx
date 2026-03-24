"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      initials: "AK",
      name: "Ananya Krishnan",
      role: "Fashion Brand Owner",
      text: "The team's attention to detail and creative direction exceeded all expectations. They curated our brand imagery perfectly.",
    },
    {
      initials: "RS",
      name: "Rahul Sharma",
      role: "Wedding Client",
      text: "Every frame captured told a beautiful and cinematic story. The quality is simply world-class.",
    },
    {
      initials: "PM",
      name: "Priya Mehta",
      role: "Influencer",
      text: "Their digital strategy doubled our engagement within months. Professional and truly visionary content curation.",
    },
  ];

  return (
    <section className="section" id="testimonials" ref={ref} style={{ background: "var(--bg-secondary)" }}>
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
           <span className="section-label">Selected Reviews</span>
           <h2 style={{ fontSize: "3.5rem", fontWeight: 500 }}>Shared <span className="accent-text">Perspectives</span> from Our Clients.</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4rem" }}>
           {testimonials.map((t, i) => (
             <motion.div
               key={t.name}
               style={{ borderLeft: "1px solid var(--border)", paddingLeft: "3rem", transition: "var(--transition)" }}
               initial={{ opacity: 0, y: 15 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8, delay: i * 0.2 }}
             >
                <div style={{ fontSize: "2.5rem", color: "var(--accent)", fontFamily: "var(--font-heading)", marginBottom: "1rem" }}>&ldquo;</div>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.8, fontStyle: "italic", marginBottom: "4rem" }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                   <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--accent)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem" }}>{t.initials}</div>
                   <div>
                      <h4 style={{ fontSize: "0.85rem", fontWeight: 600 }}>{t.name}</h4>
                      <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.15em" }}>{t.role}</span>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
