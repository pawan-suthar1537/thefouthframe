"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { portfolioImagePool } from "../lib/imageLinks";

const INITIAL_PROJECTS = [
  { id: 1, title: "L'OREAL PARIS", service: "PRODUCTION MANAGEMENT", image: portfolioImagePool[0], size: "tall" },
  { id: 2, title: "VOGUE INDIA", service: "TALENT CURATION", image: portfolioImagePool[1], size: "small" },
  { id: 3, title: "CARTIER LUXE", service: "CINEMATIC FILM", image: portfolioImagePool[2], size: "medium" },
  { id: 4, title: "NIKE ACTIVE", service: "LOCATION SERVICES", image: portfolioImagePool[3], size: "wide" },

];

export default function PortfolioExplorer() {
  return (
    <section className="section bg-white" id="work">
      <div className="page-container">
        <div className="section-center mb-16">
          <span className="section-label">OUR TALENT</span>
          <h2 className="section-title">
            Models{" "}
            <span className="metallic-gold">List</span>
          </h2>
        </div>

        <div className="masonry-grid">
          <AnimatePresence>
            {INITIAL_PROJECTS.map((proj, i) => (
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

      </div>
    </section>
  );
}
