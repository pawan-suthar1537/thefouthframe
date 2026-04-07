"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { SERVICES, SERVICES_SECTION } from "../lib/constants";

const cardReveal = {
  type: "spring",
  stiffness: 170,
  damping: 22,
  mass: 0.8,
} as const;

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section bg-white anchor-section" id="services" ref={ref}>
      <div className="page-container">
        <div className="section-center mb-16">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            {SERVICES_SECTION.label}
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...cardReveal, delay: 0.1 }}
          >
            {SERVICES_SECTION.title}{" "}
            <span className="metallic-gold">{SERVICES_SECTION.titleAccent}</span>
          </motion.h2>
        </div>

        <div className="services-grid-premium">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-showcase-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...cardReveal, delay: 0.16 + i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="service-flip">
                <div className="service-flip-inner">
                  {/* FRONT (mobile shows details here; desktop flips) */}
                  <div className="service-face service-front">
                    <div className="service-media">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="service-showcase-image"
                      />
                      <div className="service-media-overlay" />
                      {/* <span className="service-showcase-number">{s.index}</span> */}
                    </div>

                    <div className="service-front-overlay">
                     
                      <h3 className="service-showcase-title">{s.title}</h3>

                      <div className="service-front-mobile-details">
                        <p className="service-showcase-desc">{s.description}</p>
                        <div className="service-showcase-meta">{s.details}</div>

                        {"includes" in s && Array.isArray(s.includes) && s.includes.length > 0 ? (
                          <ul className="service-showcase-list">
                            {s.includes.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* BACK (desktop hover flip shows this) */}
                  <div className="service-face service-back">
                    <div className="service-back-shell">
                      <div className="service-back-top">
                        <span className="service-showcase-kicker">WHAT WE PROVIDE</span>
                        <h3 className="service-back-title">{s.title}</h3>
                        <p className="service-back-desc">{s.description}</p>
                      </div>

                      {"includes" in s && Array.isArray(s.includes) && s.includes.length > 0 ? (
                        <ul className="service-showcase-list">
                          {s.includes.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}

                      <div className="service-back-meta">{s.details}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
