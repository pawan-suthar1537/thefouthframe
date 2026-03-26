"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { talentImagePool } from "../lib/imageLinks";

const CATEGORIES = ["ALL", "MODEL", "ARTIST", "STYLIST"];
const cardSpring = { type: "spring", stiffness: 220, damping: 24, mass: 0.75 } as const;

const TALENT_DATA = [
  { id: 1, name: "ALEXA REED", category: "MODEL", image: talentImagePool[0], stats: { height: "178cm", hair: "Brown", eyes: "Green" } },
  { id: 2, name: "JORDAN KANE", category: "MODEL", image: talentImagePool[1], stats: { height: "185cm", hair: "Black", eyes: "Brown" } },
  { id: 3, name: "SARA BLANC", category: "MODEL", image: talentImagePool[2], stats: { height: "175cm", hair: "Blonde", eyes: "Blue" } },
  { id: 4, name: "MARCUS VANE", category: "ARTIST", image: talentImagePool[3], stats: { height: "182cm", hair: "Salt & Pepper", eyes: "Grey" } },
  { id: 5, name: "ELENA ROSS", category: "MODEL", image: talentImagePool[4], stats: { height: "176cm", hair: "Red", eyes: "Hazel" } },
  { id: 6, name: "VICTORIA S.", category: "STYLIST", image: talentImagePool[5], stats: { height: "170cm", hair: "Dark Brown", eyes: "Dark" } },
  { id: 7, name: "LIAM FOSTER", category: "MODEL", image: talentImagePool[6], stats: { height: "188cm", hair: "Blonde", eyes: "Blue" } },
  { id: 8, name: "NINA G.", category: "MODEL", image: talentImagePool[7], stats: { height: "172cm", hair: "Black", eyes: "Brown" } },
  { id: 9, name: "CHRIS MORGAN", category: "ARTIST", image: talentImagePool[1], stats: { height: "180cm", hair: "Brown", eyes: "Brown" } },
  { id: 10, name: "BELLA THORNE", category: "MODEL", image: talentImagePool[0], stats: { height: "177cm", hair: "Chestnut", eyes: "Green" } },
  { id: 11, name: "DAVID KING", category: "MODEL", image: talentImagePool[4], stats: { height: "190cm", hair: "Black", eyes: "Black" } },
  { id: 12, name: "MIA WONG", category: "STYLIST", image: talentImagePool[2], stats: { height: "168cm", hair: "Black", eyes: "Brown" } },
];

export default function TalentGrid() {
  const [filter, setFilter] = useState("ALL");

  const filteredTalent = filter === "ALL" 
    ? TALENT_DATA 
    : TALENT_DATA.filter(t => t.category === filter);

  return (
    <section className="section bg-beige-light">
      <div className="page-container">
        <div className="section-center">
          <span className="section-label">OUR ELITE ROSTER</span>
          <h2 className="section-title">Curated talent across categories</h2>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="talent-grid">
          <AnimatePresence mode="popLayout">
            {filteredTalent.map((talent) => (
              <motion.div
                key={talent.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={cardSpring}
                className="talent-card"
              >
                <Image
                  src={talent.image}
                  alt={talent.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="talent-image"
                />
                <div className="talent-info-overlay">
                  <h3 className="talent-name">{talent.name}</h3>
                  <span className="talent-category">{talent.category}</span>
                </div>
                
                <div className="talent-stats-back">
                  <h3 className="stats-title gold-text">STATISTICS</h3>
                  <div className="stats-list">
                    <p>HEIGHT: {talent.stats.height}</p>
                    <p>HAIR: {talent.stats.hair}</p>
                    <p>EYES: {talent.stats.eyes}</p>
                  </div>
                  <button className="btn-outline-gold mt-4">VIEW FULL PROFILE</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
