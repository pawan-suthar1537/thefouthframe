"use client";

import { motion } from "motion/react";

const plans = [
  {
    name: "Visual Starter",
    price: "₹14,999",
    period: "Per Project",
    features: [
      "Single Day Shoot (4 Hours)",
      "20 Edited High-Res Photos",
      "2 Cinematic Reels (15-30s)",
      "Basic Color Grading",
      "1 Revision Included",
    ],
    cta: "Book Starter",
    featured: false,
  },
  {
    name: "Brand Growth",
    price: "₹34,999",
    period: "Per Month",
    features: [
      "2 Content Shoots Monthly",
      "50 Edited High-Res Photos",
      "8 Cinematic Reels Monthly",
      "Advanced Color Grading",
      "Social Media Management",
      "Monthly Growth Strategy",
    ],
    cta: "Start Growing",
    featured: true,
  },
  {
    name: "Elite Production",
    price: "₹89,999",
    period: "Per Month",
    features: [
      "Weekly Professional Shoots",
      "Unlimited High-Res Photos",
      "Unlimited Cinematic Reels",
      "Full Account Management",
      "Priority Support",
      "Brand Identity Design",
    ],
    cta: "Go Elite",
    featured: false,
  },
];

export default function PlansPage() {
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
            Pricing & Packages
            <span className="section-label-line" />
          </div>
          <h1>
            Our <span className="accent-text">Plans</span>
          </h1>
          <p>
            Choose the perfect package to elevate your brand&apos;s visual identity.
            Tailored solutions for every stage of your growth.
          </p>
        </motion.div>
      </div>

      <section className="section">
        <div className="plans-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`plan-card ${plan.featured ? "featured" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">{plan.price}</div>
              <div className="plan-period">{plan.period}</div>
              
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              
              <a 
                href="/contact" 
                className={plan.featured ? "btn-primary" : "btn-secondary"}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-secondary)", textAlign: "center" }}>
        <div className="page-container">
          <div className="section-label">
            <span className="section-label-line" />
            Custom Solutions
            <span className="section-label-line" />
          </div>
          <h2 style={{ marginBottom: "1.5rem" }}>Need a Custom Package?</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 2.5rem", color: "var(--text-secondary)" }}>
            Every brand has unique needs. If our standard plans don&apos;t fit your 
            requirements, let&apos;s discuss a custom strategy tailored specifically for you.
          </p>
          <a href="/contact" className="btn-primary">
            Get a Custom Quote
          </a>
        </div>
      </section>
    </>
  );
}
