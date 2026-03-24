"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section" id="contact-cta" ref={ref} style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="page-container">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "2rem", flexWrap: "wrap" }}
        >
          <div style={{ maxWidth: "800px" }}>
            <span className="section-label">Selected Works</span>
            <h2 style={{ fontSize: "5.5rem", fontWeight: 500 }}>Ready to <span className="accent-text">Visualize</span> Your Brand?</h2>
            <p style={{ maxWidth: "600px", marginTop: "3.5rem", color: "var(--text-secondary)", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.8 }}>
              Let&apos;s discuss how a minimal and cinematic approach can transform your brand&apos;s digital story. We collaborate with brands seeking an editorial perspective.
            </p>
          </div>

          <div style={{ display: "flex", gap: "10rem", alignItems: "center", marginBottom: "3rem" }}>
             <a href="/contact" className="btn-minimal">
               Enquire
             </a>
             <a href="https://www.instagram.com/the_fourthframe_/" target="_blank" className="btn-ghost">
               @the_fourthframe_
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
