"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { title: "Storytelling", text: "Cinematic narratives for luxury brands.", icon: "01" },
    { title: "Production", text: "Full-scale professional shoot management.", icon: "02" },
    { title: "Strategy", text: "A creative approach to digital growth.", icon: "03" },
  ];

  return (
    <section className="section" id="about" ref={ref}>
      <div className="page-container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10vw", alignItems: "start" }}>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
            style={{ borderRadius: "var(--radius)", overflow: "hidden", position: "relative", aspectRatio: "4/5", background: "var(--bg-secondary)" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"
              alt="Studio Texture"
              fill
              style={{ objectFit: "cover", opacity: 0.4, filter: "grayscale(1)" }}
              unoptimized
            />
            <div style={{ position: "absolute", bottom: "3rem", left: "3rem", zIndex: 2, color: "var(--text-primary)" }}>
              <h4 style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "3px" }}>Est. 2024</h4>
            </div>
          </motion.div>

          <div style={{ padding: "4rem 0" }}>
            <motion.span
              className="section-label"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
            >
              Our Philosophy
            </motion.span>

            <motion.h2
              style={{ fontSize: "3.5rem", marginBottom: "3rem", lineHeight: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We Manage Your <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Visuals</span> & Your Account.
            </motion.h2>

            <motion.div
              style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {features.map((f, i) => (
                <div key={f.title} style={{ display: "flex", gap: "2rem" }}>
                  <span style={{ color: "var(--accent)", fontSize: "11px", fontWeight: 700, paddingTop: "0.2rem" }}>{f.icon}</span>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 500, marginBottom: "0.5rem" }}>{f.title}</h3>
                    <p style={{ color: "var(--text-secondary)", fontWeight: 300, fontSize: "0.95rem" }}>{f.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
