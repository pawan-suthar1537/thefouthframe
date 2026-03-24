"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const services = [
  {
    icon: "📸",
    title: "Professional Photography",
    description: "From bridal shoots to fashion editorials, we capture moments with precision and artistry. Every frame tells your story beautifully.",
    tags: ["Bridal", "Fashion", "Portrait", "Product"],
  },
  {
    icon: "🎬",
    title: "Video Production",
    description: "Cinematic reels, behind-the-scenes content, and commercial videos crafted with professional-grade equipment and creative vision.",
    tags: ["Reels", "Commercials", "BTS", "Promos"],
  },
  {
    icon: "📱",
    title: "Social Media Management",
    description: "End-to-end account management including content strategy, scheduling, engagement, and analytics-driven growth.",
    tags: ["Instagram", "Content", "Analytics", "Growth"],
  },
  {
    icon: "🎨",
    title: "Brand Strategy",
    description: "We build your brand identity from the ground up — visual language, mood boards, and a cohesive digital presence.",
    tags: ["Identity", "Mood Boards", "Guidelines", "Voice"],
  },
  {
    icon: "✏️",
    title: "Creative Direction",
    description: "From moodboarding to on-set direction, we ensure every creative element aligns perfectly with your brand vision.",
    tags: ["Concept", "Styling", "Art Direction", "Sets"],
  },
  {
    icon: "📊",
    title: "Digital Strategy",
    description: "Data-driven digital marketing strategies that increase reach, engagement, and conversions across all platforms.",
    tags: ["SEO", "Campaigns", "Ads", "Conversions"],
  },
];

export default function Services({ limit }: { limit?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section
      className="section"
      id="services"
      ref={ref}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-header">
        <div className="section-label">
          <span className="section-label-line" />
          What We Do
          <span className="section-label-line" />
        </div>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          From concept to creation — comprehensive visual and digital solutions
          tailored to elevate your brand.
        </p>
      </div>

      <div className="services-grid">
        {items.map((service, i) => (
          <motion.div
            key={service.title}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-tags">
              {service.tags.map((tag) => (
                <span key={tag} className="service-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
