"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { serviceImages } from "../lib/imageLinks";

const cardReveal = {
  type: "spring",
  stiffness: 170,
  damping: 22,
  mass: 0.8,
} as const;

const agencyServices = [
  {
    index: "01",
    title: "TALENT CURATION",
    description:
      "Our roster features world-class models, artists, and creators. We handle end-to-end booking management, career strategy, and elite placement for global campaigns.",
    image: serviceImages.talent,
    details: "ROSTER PLACEMENT | BOOKING | STRATEGY",
  },
  {
    index: "02",
    title: "PRODUCTION MANAGEMENT",
    description:
      "From conceptualization to post-production, we manage every frame. Our team handles logistics, crew coordination, and technical execution for high-end fashion and commercial sets.",
    image: serviceImages.production,
    details: "SCHEDULING | LOGISTICS | CREW",
  },
  {
    index: "03",
    title: "LOCATION SERVICES",
    description:
      "Access our exclusive database of unique shooting environments. We provide site scouting, permit management, and on-site logistics for minimalist studios and luxury estates.",
    image: serviceImages.locations,
    details: "SITE SCOUTING | PERMITS | ACCESS",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section bg-white" id="services" ref={ref}>
      <div className="page-container">
        <div className="section-center mb-16">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            OUR EXPERTISE
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...cardReveal, delay: 0.1 }}
          >
            Integrated Production &{" "}
            <span className="metallic-gold">Talent Management</span>
          </motion.h2>
        </div>

        <div className="services-grid-premium">
          {agencyServices.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card-premium"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...cardReveal, delay: 0.16 + i * 0.08 }}
            >
              <div className="service-card-visual">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="service-image"
                />
                <div className="service-visual-overlay" />
                <span className="service-number">{s.index}</span>
              </div>

              <div className="service-card-body">
                <h3 className="service-card-title">{s.title}</h3>
                <p className="service-card-desc">{s.description}</p>
                <div className="service-card-meta">
                  <span>{s.details}</span>
                </div>
              </div>

              <motion.div
                className="service-accent-line"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
