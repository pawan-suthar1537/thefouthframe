"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const steps = [
    { number: "01", title: "Discovery", description: "We understand your brand, vision, and goals through detailed consultation." },
    { number: "02", title: "Concept", description: "Mood boards, storyboards, and creative direction tailored to your brand." },
    { number: "03", title: "Production", description: "Professional shoots with top-tier equipment and experienced crew." },
    { number: "04", title: "Delivery", description: "Polished content delivered on time, ready to elevate your brand." },
  ];

  return (
    <section className="section" id="process" ref={ref} style={{ background: "var(--bg-secondary)" }}>
      <div className="section-header">
        <div className="section-label">
          <span className="section-label-line" />
          How We Work
          <span className="section-label-line" />
        </div>
        <h2 className="section-title">Our Process</h2>
        <p className="section-subtitle">
          From concept to creation — a seamless journey to bring your vision to life.
        </p>
      </div>

      <div className="process-grid">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className="process-step"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="process-number">{step.number}</div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
