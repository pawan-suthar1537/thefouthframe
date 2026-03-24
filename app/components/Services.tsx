"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const services = [
  {
    icon: "01",
    title: "Cinematic Photography",
    description: "Capturing light and movement with high-end precision for bridal editorials and luxury fashion brands.",
  },
  {
    icon: "02",
    title: "Video Production",
    description: "Curation of professional reels and brand shorts with a cinematic edge for multi-channel digital exposure.",
  },
  {
    icon: "03",
    title: "Social Strategy",
    description: "Data-informed account management and strategy for modern influencers and visual creators.",
  },
  {
    icon: "04",
    title: "Creative Direction",
    description: "Developing visual identities and moodboards to align every frame with your brand's unique ethos.",
  },
  {
    icon: "05",
    title: "Digital Branding",
    description: "Building a consistent and premium digital presence from logo design to curated visual experiences.",
  },
  {
    icon: "06",
    title: "Portfolio Consulting",
    description: "Individual coaching on portfolio building and account growth for aspiring models and photographers.",
  },
];

export default function Services({ limit }: { limit?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="section" id="services" ref={ref}>
      <div className="page-container">
        <div style={{ marginBottom: "5rem" }}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Offerings
          </motion.span>
          <motion.h2
            style={{ fontSize: "3rem", maxWidth: "800px" }}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Curating Modern <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Solutions</span> for Vision-First Brands.
          </motion.h2>
        </div>

        <div className="services-grid-v2">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card-minimal"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
              style={{ position: "relative" }}
            >
              <span className="service-index">{s.icon}</span>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 500, marginBottom: "1.5rem" }}>{s.title}</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.8 }}>{s.description}</p>
              
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: "2px",
                  background: "var(--accent)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
