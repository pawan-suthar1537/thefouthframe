"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { locationImagePool } from "../lib/imageLinks";

const LOCATIONS_DATA = [
  { id: 1, name: "THE MINIMALIST VILLA", category: "IBIZA", image: locationImagePool[0] },
  { id: 2, name: "INDUSTRIAL LOFT", category: "MANHATTAN", image: locationImagePool[1] },
  { id: 3, name: "PRO STUDIO X", category: "MILAN", image: locationImagePool[2] },
  { id: 4, name: "CLASSIC ESTATE", category: "PARIS", image: locationImagePool[3] },
  { id: 5, name: "BRUTALIST SPACE", category: "BERLIN", image: locationImagePool[4] },
  { id: 6, name: "TROPICAL HIDEOUT", category: "BALI", image: locationImagePool[5] },
  { id: 7, name: "URBAN WAREHOUSE", category: "LONDON", image: locationImagePool[6] },
  { id: 8, name: "NEO-CLASSIC HALL", category: "MADRID", image: locationImagePool[7] },
  { id: 9, name: "CHIC APARTMENT", category: "NYC", image: locationImagePool[8] },
  { id: 10, name: "SCANDINAVIC LODGE", category: "OSLO", image: locationImagePool[0] },
  { id: 11, name: "DESERT OASIS", category: "DUBAI", image: locationImagePool[1] },
  { id: 12, name: "VINTAGE STUDIO", category: "LONDON", image: locationImagePool[2] },
  { id: 13, name: "MODERNIST HOUSE", category: "LA", image: locationImagePool[3] },
  { id: 14, name: "RAW CONCRETE LOFT", category: "TOKYO", image: locationImagePool[4] },
  { id: 15, name: "SECRET GARDEN", category: "ROME", image: locationImagePool[5] },
  { id: 16, name: "SKYLINE PENTHOUSE", category: "NYC", image: locationImagePool[6] },
  { id: 17, name: "OLD CINEMA", category: "BERLIN", image: locationImagePool[7] },
  { id: 18, name: "ART DECO SUITE", category: "MIAMI", image: locationImagePool[8] },
  { id: 19, name: "RUSTIC BARN", category: "COTSWOLDS", image: locationImagePool[0] },
  { id: 20, name: "THE GLASS HOUSE", category: "MALIBU", image: locationImagePool[1] },
];

export default function LocationMasonry() {
  return (
    <section className="section bg-beige-secondary">
      <div className="page-container">
        <div className="section-center mb-16">
          <span className="section-label">PRIME LOCATIONS</span>
          <h2 className="section-title">Exclusive Shooting Environments</h2>
          <p className="section-subtitle mx-auto">
            An exclusive database of unique shooting environments curated for
            cinematic visual storytelling.
          </p>
        </div>

        <div className="masonry-grid">
          {LOCATIONS_DATA.map((loc, i) => (
            <motion.div
              key={`${loc.id}-${i}`}
              className="masonry-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 22,
                mass: 0.82,
                delay: (i % 3) * 0.04,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src={loc.image}
                alt={loc.name}
                width={500}
                height={700}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="masonry-image"
              />
              <div className="masonry-overlay">
                <h3 className="text-white text-lg font-serif tracking-widest uppercase">
                  {loc.name}
                </h3>
                <span className="metallic-gold text-xs tracking-widest mt-2">
                  {loc.category}
                </span>
                <button className="btn-outline-gold mt-6 py-2 px-6 text-[0.6rem]">
                  VIEW DETAILS
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="btn-premium">EXPLORE FULL DATABASE</button>
        </div>
      </div>
    </section>
  );
}
