"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      initials: "AK",
      name: "ANANYA KRISHNAN",
      role: "Fashion Brand Owner",
      text: "The team tightened our visual direction immediately. The final shoot looked premium and the edit flow felt far more organized than previous vendors.",
    },
    {
      initials: "RS",
      name: "RAHUL SHARMA",
      role: "Wedding Client",
      text: "The result felt cinematic without looking forced. Every frame had emotion, but the overall delivery still felt polished and modern.",
    },
    {
      initials: "PM",
      name: "PRIYA MEHTA",
      role: "Influencer",
      text: "They understood both content and positioning. The visuals looked better, and the account started feeling more consistent almost immediately.",
    },
  ];

  return (
    <section className="section bg-white" id="testimonials" ref={ref}>
      <div className="page-container">
        <div className="section-center mb-16">
          <span className="section-label">SELECTED REVIEWS</span>
          <h2 className="section-title">
            Shared <span className="metallic-gold">perspectives</span> from clients who
            needed stronger visual direction.
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="testimonial-card-premium"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.14 }}
            >
              <div className="testimonial-mark-gold">&ldquo;</div>
              <p className="testimonial-text">{testimonial.text}</p>

              <div className="testimonial-person">
                <div className="testimonial-avatar-gold">{testimonial.initials}</div>
                <div>
                  <h3 className="testimonial-name-serif">{testimonial.name}</h3>
                  <span className="testimonial-role-sans">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

