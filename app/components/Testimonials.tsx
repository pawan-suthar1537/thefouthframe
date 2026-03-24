"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      initials: "AK",
      name: "Ananya Krishnan",
      role: "Fashion Brand Owner",
      text: "The team tightened our visual direction immediately. The final shoot looked premium and the edit flow felt far more organized than previous vendors.",
    },
    {
      initials: "RS",
      name: "Rahul Sharma",
      role: "Wedding Client",
      text: "The result felt cinematic without looking forced. Every frame had emotion, but the overall delivery still felt polished and modern.",
    },
    {
      initials: "PM",
      name: "Priya Mehta",
      role: "Influencer",
      text: "They understood both content and positioning. The visuals looked better, and the account started feeling more consistent almost immediately.",
    },
  ];

  return (
    <section className="section" id="testimonials" ref={ref}>
      <div className="page-container">
        <div className="section-center">
          <span className="section-label">Selected Reviews</span>
          <h2 className="section-title">
            Shared <span className="accent-text">perspectives</span> from clients who
            needed stronger visual direction.
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.14 }}
            >
              <div className="testimonial-mark">&ldquo;</div>
              <p>{testimonial.text}</p>

              <div className="testimonial-person">
                <div className="testimonial-avatar">{testimonial.initials}</div>
                <div>
                  <h3 style={{ fontSize: "1rem", marginBottom: "0.15rem" }}>{testimonial.name}</h3>
                  <span className="testimonial-role">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
