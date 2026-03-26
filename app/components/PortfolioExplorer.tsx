"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { portfolioImagePool } from "../lib/imageLinks";

const INITIAL_PROJECTS = [
  { id: 1, title: "L'OREAL PARIS", service: "PRODUCTION MANAGEMENT", image: portfolioImagePool[0], size: "tall" },
  { id: 2, title: "VOGUE INDIA", service: "TALENT CURATION", image: portfolioImagePool[1], size: "small" },
  { id: 3, title: "CARTIER LUXE", service: "CINEMATIC FILM", image: portfolioImagePool[2], size: "medium" },
  { id: 4, title: "NIKE ACTIVE", service: "LOCATION SERVICES", image: portfolioImagePool[3], size: "wide" },
  { id: 5, title: "CHANEL NO. 5", service: "EDITORIAL SHOOT", image: portfolioImagePool[4], size: "medium" },
  { id: 6, title: "ZARA CAMPAIGN", service: "PRODUCTION MANAGEMENT", image: portfolioImagePool[5], size: "tall" },
  { id: 7, title: "GUCCI BLOOM", service: "TALENT CURATION", image: portfolioImagePool[6], size: "small" },
  { id: 8, title: "ROLEX MASTER", service: "LOCATION SERVICES", image: portfolioImagePool[7], size: "wide" },
];

const ADDITIONAL_PROJECTS = Array.from({ length: 42 }).map((_, i) => ({
  id: i + 9,
  title: `PROJECT ${i + 9}`,
  service: i % 2 === 0 ? "PRODUCTION" : "TALENT",
  image: portfolioImagePool[i % portfolioImagePool.length],
  size: ["small", "medium", "tall", "wide"][i % 4],
}));

export default function PortfolioExplorer() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [loading, setLoading] = useState(false);
  const [nextProjectIndex, setNextProjectIndex] = useState(0);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const chunk = ADDITIONAL_PROJECTS.slice(nextProjectIndex, nextProjectIndex + 12);
      setProjects((current) => [...current, ...chunk]);
      setNextProjectIndex((current) => current + chunk.length);
      setLoading(false);
    }, 800);
  };

  return (
    <section className="section bg-white" id="work">
      <div className="page-container">
        <div className="section-center mb-16">
          <span className="section-label">OUR TRACK RECORD</span>
          <h2 className="section-title">
            Defining the standard of{" "}
            <span className="metallic-gold">visual excellence</span>
          </h2>
        </div>

        <div className="masonry-grid">
          <AnimatePresence>
            {projects.map((proj, i) => (
              <motion.div
                key={`${proj.id}-${i}`}
                className={`masonry-item item-${proj.size}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 22,
                  mass: 0.8,
                  delay: (i % 3) * 0.05,
                }}
                viewport={{ once: true, amount: 0.18 }}
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="masonry-image"
                />
                <div className="masonry-overlay">
                  <div className="p-8 text-center">
                    <h3 className="text-white text-xl font-serif tracking-widest">
                      {proj.title}
                    </h3>
                    <p className="metallic-gold text-[0.6rem] tracking-widest mt-2">
                      {proj.service}
                    </p>
                    <button className="btn-outline-gold mt-6 py-2 px-6 text-[0.6rem]">
                      VIEW CASE STUDY
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {nextProjectIndex < ADDITIONAL_PROJECTS.length && (
          <div className="flex justify-center mt-16">
            <button
              className="btn-premium flex items-center gap-4"
              onClick={loadMore}
              disabled={loading}
            >
              {loading ? "LOADING..." : "LOAD MORE PROJECTS"}
              {!loading && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
