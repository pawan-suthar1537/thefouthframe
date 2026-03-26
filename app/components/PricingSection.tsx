"use client";

import { motion } from "motion/react";

const plans = [
  {
    name: "PRODUCTION ESSENTIALS",
    price: "₹1,50,000",
    period: "PER PROJECT",
    features: [
      "Single Day Shoot Management",
      "Core Talent Booking (1 Model)",
      "Standard Location Access",
      "Professional Post-Production",
      "48-hour Delivery"
    ],
    cta: "ENQUIRE NOW",
    featured: false
  },
  {
    name: "EDITORIAL VISION",
    price: "₹3,50,000",
    period: "PER PROJECT",
    features: [
      "2-Day Comprehensive Shoot",
      "Elite Talent Booking (2 Models)",
      "Premium Estate Locations",
      "Full Creative Direction",
      "Social Media Teaser Set"
    ],
    cta: "GET STARTED",
    featured: true
  },
  {
    name: "GLOBAL CAMPAIGN",
    price: "CUSTOM",
    period: "BESPOKE QUOTE",
    features: [
      "International Production Logistics",
      "A-List Talent Acquisition",
      "Exclusive Global Locations",
      "360° Multi-Channel Strategy",
      "Dedicated Project Manager"
    ],
    cta: "CONTACT SALES",
    featured: false
  }
];

export default function PricingSection() {
  return (
    <section className="section bg-white" id="plans">
      <div className="page-container">
        <div className="section-center mb-16">
          <span className="section-label">INVESTMENT</span>
          <h2 className="section-title">Transparent <span className="metallic-gold">Partnership</span> Models</h2>
          <p className="section-subtitle mx-auto">
            Bespoke production packages tailored for brands that value visual impact and seamless execution.
          </p>
        </div>

        <div className="plans-grid-premium">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`plan-card-premium ${plan.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.featured && <div className="featured-tag">MOST POPULAR</div>}
              <span className="plan-name-gold">{plan.name}</span>
              <div className="plan-price-block">
                <span className="plan-price-serif">{plan.price}</span>
                <span className="plan-period-sans">{plan.period}</span>
              </div>
              
              <ul className="plan-features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <button className={`mt-12 w-full ${plan.featured ? 'btn-premium' : 'btn-outline-gold'}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
