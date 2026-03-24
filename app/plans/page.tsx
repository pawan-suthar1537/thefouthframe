"use client";

import { motion } from "motion/react";
import Link from "next/link";

const plans = [
  {
    name: "Visual Starter",
    price: "Rs 14,999",
    period: "Single Shoot",
    features: [
      "4-hour session",
      "20 edited stills",
      "2 cinematic reels",
      "Standard grading",
      "Digital delivery",
    ],
    cta: "Request Start",
    featured: false,
  },
  {
    name: "Editorial Growth",
    price: "Rs 34,999",
    period: "Per Month",
    features: [
      "Bi-monthly shoots",
      "50 edited stills",
      "8 cinematic reels",
      "Advanced grading",
      "Social curation",
      "Strategy consult",
    ],
    cta: "Request Growth",
    featured: true,
  },
  {
    name: "Elite Production",
    price: "Rs 89,999",
    period: "Per Month",
    features: [
      "Weekly shoots",
      "Unlimited captures",
      "Unlimited cinematic reels",
      "Full channel management",
      "Direct message support",
      "Brand identity systems",
    ],
    cta: "Request Elite",
    featured: false,
  },
];

export default function PlansPage() {
  return (
    <>
      <section className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Investment</span>
          <h1>
            Tailored <span className="accent-text">plans</span> for modern growth.
          </h1>
          <p>
            Flexible packages designed for brands that need premium visuals, reliable
            delivery, and a more consistent digital presence.
          </p>
        </motion.div>
      </section>

      <section className="section section-tight">
        <div className="page-container">
          <div className="plans-grid">
            <div className="plan-intro-card">
              <span className="section-label">Packages</span>
              <h2 style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>Need a custom scope?</h2>
              <p style={{ marginBottom: "1.25rem" }}>
                If the usual packages do not fit the shoot scale, monthly cadence, or
                content volume you need, we can quote something tighter.
              </p>
              <Link href="/contact" className="btn-ghost">
                Request a custom quote
              </Link>
            </div>

            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`plan-card ${plan.featured ? "featured" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <span className="plan-name">{plan.name}</span>
                <div className="plan-price">{plan.price}</div>
                <div className="plan-period">{plan.period}</div>

                <ul className="plan-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <Link href="/contact" className={plan.featured ? "btn-main" : "btn-minimal"}>
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
