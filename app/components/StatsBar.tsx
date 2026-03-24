"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "7k+", label: "Followers", sub: "Instagram Audience" },
    { number: "20+", label: "Projects", sub: "Successfully Completed" },
    { number: "50+", label: "Happy Clients", sub: "Brands & Individuals" },
    { number: "100%", label: "Satisfaction", sub: "Client Approval Rate" },
  ];

  return (
    <section className="stats-grid" ref={ref}>
      {stats.map((stat, i) => (
        <motion.div
           key={stat.label}
           className="stat-item-v2"
           initial={{ opacity: 0, y: 15 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <div className="stat-num">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
          {/* <div className="stat-sub">{stat.sub}</div> */}
        </motion.div>
      ))}
    </section>
  );
}
