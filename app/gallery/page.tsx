"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=90",
    title: "Editorial Bridal",
    category: "Photography",
    size: "portrait",
    description: "Soft bridal styling with cleaner direction and premium natural light.",
  },
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=90",
    title: "Cinematic Reel",
    category: "Film",
    size: "landscape",
    description: "Motion-first campaign coverage designed for reels, launches, and web headers.",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=90",
    title: "High-Fashion Frame",
    category: "Fashion",
    size: "square",
    description: "Sharper silhouettes and stronger image rhythm for visual campaigns.",
  },
  {
    src: "https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?w=1200&q=90",
    title: "Studio BTS",
    category: "BTS",
    size: "portrait",
    description: "Behind-the-scenes coverage that still looks polished enough to publish.",
  },
  {
    src: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=1200&q=90",
    title: "Modern Portrait",
    category: "Photography",
    size: "square",
    description: "Portrait sets built for cleaner color, tighter framing, and stronger recall.",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=90",
    title: "Ceremony Tale",
    category: "Film",
    size: "landscape",
    description: "Emotion-led sequence work that feels elevated without becoming heavy.",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=90",
    title: "Vogue Street",
    category: "Fashion",
    size: "portrait",
    description: "Location-based fashion work with stronger posture, shape, and attitude.",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200&q=90",
    title: "Studio Lighting",
    category: "BTS",
    size: "square",
    description: "Production moments that still support the brand story after the shoot wraps.",
  },
];

const categories = ["All", "Photography", "Film", "Fashion", "BTS"];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <>
      <section className="page-hero page-hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Gallery Portfolio</span>
          <h1>
            Bespoke <span className="accent-text">narratives</span> with cleaner visual
            pacing.
          </h1>
          <p>
            A tighter selection of frames, reels, and BTS moments that show how we
            handle composition, motion, and mood across different project types.
          </p>
        </motion.div>

        <motion.aside
          className="gallery-note-card"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <span className="section-label">What You&apos;re Seeing</span>
          <p style={{ marginBottom: "1rem" }}>
            The gallery mixes polished client-facing work with production-side moments
            so you can judge both the aesthetic and the process behind it.
          </p>
          <div className="page-hero-meta">
            <div>
              <span className="page-hero-meta-value">4</span>
              <span className="page-hero-meta-label">Core Categories</span>
            </div>
            <div>
              <span className="page-hero-meta-value">20+</span>
              <span className="page-hero-meta-label">Recent Projects</span>
            </div>
          </div>
        </motion.aside>
      </section>

      <section className="section section-tight">
        <div className="page-container">
          <div className="gallery-toolbar">
            <div>
              <div className="gallery-count">
                {filteredItems.length} pieces in view / {activeTab}
              </div>
            </div>

            <div className="gallery-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveTab(category)}
                  className={`gallery-filter ${activeTab === category ? "active" : ""}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="gallery-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  layout
                  className={`gallery-card gallery-card-${item.size}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <div className="gallery-media">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <div className="gallery-card-copy">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="page-container">
          <div className="gallery-note-card gallery-cta">
            <div>
              <span className="section-label">Need A Similar Look?</span>
              <h2 className="section-title">
                Let&apos;s build visuals that feel more deliberate and more consistent.
              </h2>
            </div>
            <Link href="/contact" className="btn-main">
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
