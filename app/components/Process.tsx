"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { number: "01", title: "Discovery", description: "Understanding your brand world and core goals." },
    { number: "02", title: "Curation", description: "Moodboarding and conceptual alignment." },
    { number: "03", title: "Execution", description: "Professional-grade shoot management." },
    { number: "04", title: "Refinement", description: "Final cinematic grading and delivery." },
  ];

  return (
    <section className="section" id="process" ref={ref}>
      <div className="page-container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10rem", marginBottom: "6rem", alignItems: "end" }}>
           <div>
              <span className="section-label">Workflow</span>
              <h2 style={{ fontSize: "3.5rem", fontWeight: 500 }}>Our <span className="accent-text">Process</span> for Cinematic Excellence.</h2>
           </div>
           <p style={{ maxWidth: "450px", color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.8 }}>
              We follow a streamlined editorial production flow, ensuring every detail of your brand vision is meticulously captured and refined.
           </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
           {steps.map((s, i) => (
             <motion.div
               key={s.number}
               style={{ background: "var(--bg-primary)", padding: "4rem 2rem", transition: "var(--transition)" }}
               initial={{ opacity: 0, y: 15 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: i * 0.15 }}
             >
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)", marginBottom: "2rem", display: "block" }}>{s.number} — {s.title}</span>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.8 }}>{s.description}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
