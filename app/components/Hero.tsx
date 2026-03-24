"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-right">
        <Image
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1400"
          alt="Minimal Studio"
          fill
          style={{ objectFit: "cover", filter: "grayscale(1) contrast(1.1)" }}
          unoptimized
        />
      </div>

      <div className="page-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <div className="hero-left">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            THE FOURTH FRAME • EST. 2024
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A Modern Eye for<br />
            <em>Cinematic</em> Brands.
          </motion.h1>

          <motion.p
            className="hero-p"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We curate visual identities through a minimal lens. From architectural spacing to cinematic movement, we help modern brands tell their truth.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="/contact" className="btn-main">
              Let&apos;s Create
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <line x1="5" y1="12" x2="19" y2="12"></line>
                 <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "5vw",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          opacity: 0.4,
          fontSize: "10px",
          letterSpacing: "3px",
          textTransform: "uppercase"
        }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span>Scroll Down</span>
        <div style={{ width: "30px", height: "1px", background: "currentColor" }}></div>
      </motion.div>
    </section>
  );
}
