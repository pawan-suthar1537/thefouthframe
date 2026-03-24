"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We map the brand, the audience, and the mood before a single frame is planned.",
    },
    {
      number: "02",
      title: "Curation",
      description: "Moodboards, references, pacing, and shot priorities are locked before production starts.",
    },
    {
      number: "03",
      title: "Execution",
      description: "Shoot day stays tight, clear, and efficient so the creative energy does not get diluted.",
    },
    {
      number: "04",
      title: "Refinement",
      description: "Edits, grade, and delivery are shaped for a stronger end-use across web, socials, and campaigns.",
    },
  ];

  return (
    <section className="section" id="process" ref={ref}>
      <div className="page-container">
        <div className="section-lead">
          <div>
            <span className="section-label">Workflow</span>
            <h2 className="section-title">
              Our <span className="accent-text">process</span> keeps the visuals sharp
              and the delivery predictable.
            </h2>
          </div>
          <p>
            Every project runs through the same structure so the output feels premium
            without becoming slow, vague, or overcomplicated.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="process-step"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <span className="process-step-label">
                {step.number} / {step.title}
              </span>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
