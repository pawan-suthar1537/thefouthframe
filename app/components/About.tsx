"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: "📸", text: "Professional Shoots" },
    { icon: "🎬", text: "Video Production" },
    { icon: "📱", text: "Social Media" },
    { icon: "🎨", text: "Brand Strategy" },
  ];

  return (
    <section className="section" id="about" ref={ref}>
      <div className="about-grid">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ position: "relative" }}
        >
          <div className="about-image-frame" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="section-label">
            <span className="section-label-line" />
            About Us
            <span className="section-label-line" />
          </div>

          <h2>
            We Manage Your <span>Visuals</span> & Your Account
          </h2>

          <p>
            At The Fourth Frame, we believe every brand has a story worth
            telling. We are a creative production house specializing in
            professional photography, videography, and digital strategy.
          </p>

          <p>
            From concept to creation, our team crafts visually stunning
            content that resonates with your audience and elevates your
            brand presence across all platforms.
          </p>

          <div className="about-features">
            {features.map((feature, i) => (
              <motion.div
                key={feature.text}
                className="about-feature"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              >
                <div className="about-feature-icon">{feature.icon}</div>
                <span className="about-feature-text">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          <a
            href="/services"
            className="btn-primary"
            style={{ width: "fit-content", marginTop: "0.5rem" }}
          >
            Our Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
