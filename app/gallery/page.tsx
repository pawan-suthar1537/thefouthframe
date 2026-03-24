"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=90",
    title: "Editorial Bridal",
    category: "Photography",
  },
  {
    src: "https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?w=800&q=90",
    title: "Studio BTS",
    category: "BTS",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=90",
    title: "High-Fashion Frame",
    category: "Fashion",
  },
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=90",
    title: "Cinematic Reel",
    category: "Film",
  },
  {
    src: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=800&q=90",
    title: "Modern Portrait",
    category: "Photography",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=90",
    title: "Ceremony Tale",
    category: "Film",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=90",
    title: "Vogue Street",
    category: "Fashion",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=90",
    title: "Studio Lighting",
    category: "BTS",
  },
  {
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=90",
    title: "Abstract Light",
    category: "Film",
  },
];

const categories = ["All", "Photography", "Film", "Fashion", "BTS"];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <>
      <div className="page-hero" style={{ textAlign: "left", padding: "10rem 4rem 4rem" }}>
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
         >
           <span className="section-label">Gallery Portfolio</span>
           <h1 style={{ fontSize: "5rem", maxWidth: "800px" }}>Bespoke <span style={{ color: "var(--accent)", fontStyle: "italic" }}>Narratives</span>.</h1>
           <p style={{ maxWidth: "500px", marginTop: "2rem", color: "var(--text-secondary)", fontWeight: 300 }}>
             A curated selection of our most cinematic shoots. Inspired by the movement of light and the rhythm of film.
           </p>
         </motion.div>
      </div>

      <section className="section" style={{ paddingTop: "0" }}>
        <div className="page-container">
          <div style={{ display: "flex", gap: "2.5rem", marginBottom: "4rem", borderBottom: "1px solid var(--border)", paddingBottom: "1rem", overflowX: "auto" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "3px",
                  color: activeTab === cat ? "var(--accent)" : "var(--text-muted)",
                  transition: "var(--transition)",
                  whiteSpace: "nowrap"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="masonry-container"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.05,
                    ease: "easeOut" 
                  }}
                  className="masonry-item"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={800}
                    height={1000}
                    style={{ width: "100%", height: "auto" }}
                    unoptimized
                  />
                  <div className="masonry-overlay">
                    <div className="masonry-details">
                      <span>{item.category}</span>
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center", background: "var(--bg-secondary)" }}>
         <div className="page-container">
            <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Craft Your Identity</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto 3rem", color: "var(--text-secondary)", fontWeight: 300 }}>
              Let&apos;s discuss how to visualize your brand through a cinematic lens.
            </p>
            <a href="/contact" className="btn-main">
              Get Started
            </a>
         </div>
      </section>
    </>
  );
}
