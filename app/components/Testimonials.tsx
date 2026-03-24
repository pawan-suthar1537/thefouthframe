"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const testimonials = [
    {
      initials: "AK",
      name: "Ananya Krishnan",
      role: "Fashion Brand Owner",
      text: "The Fourth Frame transformed our brand imagery completely. The team's attention to detail and creative direction exceeded all expectations.",
    },
    {
      initials: "RS",
      name: "Rahul Sharma",
      role: "Wedding Client",
      text: "From our first consultation to the final delivery, everything was seamless. The bridal shoot photos were absolutely breathtaking.",
    },
    {
      initials: "PM",
      name: "Priya Mehta",
      role: "Social Media Influencer",
      text: "Their social media strategy doubled my engagement within months. The content quality they deliver is consistently world-class.",
    },
  ];

  return (
    <section className="section" id="testimonials" ref={ref}>
      <div className="section-header">
        <div className="section-label">
          <span className="section-label-line" />
          Testimonials
          <span className="section-label-line" />
        </div>
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-subtitle">
          Don&apos;t just take our word for it — hear from the brands and
          individuals we&apos;ve worked with.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="testimonial-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="testimonial-quote">&ldquo;</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.initials}</div>
              <div>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
