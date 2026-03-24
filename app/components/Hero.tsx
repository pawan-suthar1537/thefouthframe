"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="page-container">
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.span
              className="section-label"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
            >
              The Fourth Frame / Editorial Production Studio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              Make every <em>frame</em> feel intentional.
            </motion.h1>

            <motion.p
              className="hero-p"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              We produce photography, films, and brand visuals that feel polished,
              cinematic, and ready to convert attention into trust.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <Link href="/contact" className="btn-main">
                Start a Project
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link href="/gallery" className="btn-ghost">
                View Gallery
              </Link>
            </motion.div>

            <motion.div
              className="hero-inline-stats"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <div className="hero-stat">
                <strong>20+</strong>
                <span>Brand Projects</span>
              </div>
              <div className="hero-stat">
                <strong>7k+</strong>
                <span>Social Reach</span>
              </div>
              <div className="hero-stat">
                <strong>100%</strong>
                <span>Client Focus</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span>Scroll</span>
              <span className="hero-scroll-line" aria-hidden="true"></span>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1400"
              alt="Creative production scene"
              fill
              className="hero-image"
              unoptimized
            />

            <div className="hero-badge">
              <span className="hero-badge-label">Current Focus</span>
              <p>
                Premium brand shoots, bridal editorials, and short-form campaign
                films with cleaner direction and stronger pacing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
