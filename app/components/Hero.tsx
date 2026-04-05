"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { heroBackgroundImage, heroPreviewImages } from "../lib/imageLinks";

const smoothReveal = {
  type: "spring",
  stiffness: 150,
  damping: 22,
  mass: 0.8,
} as const;

const heroStats = [
  { value: "50+", label: "campaigns delivered" },
  { value: "120", label: "talent on call" },
  { value: "18", label: "shoot cities" },
];

const heroPreviews = [
  {
    title: "Talent",
    note: "Casting and roster direction",
    image: heroPreviewImages.talent,
  },
  {
    title: "Production",
    note: "Set design and campaign execution",
    image: heroPreviewImages.production,
  },
  {
    title: "Locations",
    note: "Studios, villas, and editorial spaces",
    image: heroPreviewImages.locations,
  },
];

export default function Hero() {
  return (
    <section className="hero-fullscreen">
      <div className="hero-video-container" aria-hidden="true">
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-placeholder hidden md:block"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/main/main.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-placeholder block md:hidden"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/main/mianveritical.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="page-container hero-content-wrapper">
        <div className="hero-content">
          {/* <motion.span
            className="hero-kicker"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={smoothReveal}
          >
            THE FOURTH FRAME
          </motion.span> */}

          {/* <motion.h1
            className="hero-title-exaggerated"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={smoothReveal}
          >
            Build the shot before the camera ever rolls.
          </motion.h1> */}

          {/* <motion.p
            className="hero-subtitle-premium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothReveal, delay: 0.1 }}
          >
            Talent, locations, and production logistics under one roof for
            fashion, beauty, and branded editorial work with imagery aligned to
            each production vertical.
          </motion.p> */}

          <motion.div
            className="hero-dual-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothReveal, delay: 0.18 }}
          >

          </motion.div>


        </div>


      </div>

    </section>
  );
}
