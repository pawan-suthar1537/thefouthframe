"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";

// Gallery images — Using curated Unsplash photos that match the brand aesthetic
// (Instagram CDN links expire, so we use high-quality alternatives)
const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    title: "Bridal Elegance",
    category: "Wedding",
    height: 420,
  },
  {
    src: "https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?w=600&q=80",
    title: "Behind The Scenes",
    category: "BTS",
    height: 320,
  },
  {
    src: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&q=80",
    title: "Traditional Beauty",
    category: "Wedding",
    height: 500,
  },
  {
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80",
    title: "Camera Setup",
    category: "BTS",
    height: 350,
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    title: "Fashion Editorial",
    category: "Fashion",
    height: 480,
  },
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
    title: "Film Production",
    category: "Video",
    height: 300,
  },
  {
    src: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=600&q=80",
    title: "Golden Hour Session",
    category: "Portrait",
    height: 440,
  },
  {
    src: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=600&q=80",
    title: "Creative Portrait",
    category: "Fashion",
    height: 380,
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    title: "Wedding Ceremony",
    category: "Wedding",
    height: 520,
  },
  {
    src: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=600&q=80",
    title: "Product Styling",
    category: "Product",
    height: 340,
  },
  {
    src: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&q=80",
    title: "Bridal Close-up",
    category: "Wedding",
    height: 460,
  },
  {
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
    title: "Camera Gear",
    category: "BTS",
    height: 360,
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    title: "Fashion Runway",
    category: "Fashion",
    height: 450,
  },
  {
    src: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=600&q=80",
    title: "Mehendi Celebration",
    category: "Wedding",
    height: 400,
  },
  {
    src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
    title: "Studio Lighting",
    category: "BTS",
    height: 330,
  },
  {
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
    title: "Celebration Vibes",
    category: "Events",
    height: 480,
  },
];

const categories = ["All", "Wedding", "Fashion", "BTS", "Portrait", "Video", "Product", "Events"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <div className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="section-label-line" />
            Our Portfolio
            <span className="section-label-line" />
          </div>
          <h1>
            Visual <span className="accent-text">Gallery</span>
          </h1>
          <p>
            A curated collection of our finest work — from bridal elegance to
            fashion editorials and behind-the-scenes moments.
          </p>
        </motion.div>
      </div>

      <section className="section" style={{ paddingTop: "2rem" }}>
        {/* Filter Tabs */}
        <motion.div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "3rem",
            maxWidth: "800px",
            margin: "0 auto 3rem",
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "var(--radius-full)",
                border: "var(--glass-border)",
                background: activeFilter === cat
                  ? "linear-gradient(135deg, var(--accent), var(--accent-dark))"
                  : "var(--bg-glass)",
                color: activeFilter === cat ? "#fff" : "var(--text-secondary)",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "var(--transition)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {filtered.map((item, i) => (
            <motion.div
              key={item.src}
              className="masonry-item"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              layout
            >
              <Image
                src={item.src}
                alt={item.title}
                width={600}
                height={item.height}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
                unoptimized
              />
              <div className="masonry-overlay">
                <h4>{item.title}</h4>
                <p>{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
