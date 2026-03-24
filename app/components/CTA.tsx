"use client";

import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="section"
      id="contact-cta"
      ref={ref}
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="page-container">
        <motion.div
          className="cta-shell"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="section-label">Next Project</span>
            <h2>
              Ready to <span className="accent-text">visualize</span> your brand with
              more intent?
            </h2>
            <p>
              If the current website, feed, or campaign material feels inconsistent,
              this is the point where we tighten the look and build a stronger visual
              system around it.
            </p>
          </div>

          <div className="cta-actions">
            <Link href="/contact" className="btn-main">
              Enquire
            </Link>
            <a
              href="https://www.instagram.com/the_fourthframe_/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              @the_fourthframe_
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
