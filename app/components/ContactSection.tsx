"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import type { SiteData, SocialLink, ContactSectionData } from "../lib/types";

interface ContactSectionProps {
  site: SiteData;
  socialLinks: SocialLink[];
  contactSection: ContactSectionData;
  contactFormInterests: string[];
}

export default function ContactSection({
  site,
  socialLinks,
  contactSection,
  contactFormInterests,
}: ContactSectionProps) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  return (
    <section className="section bg-white anchor-section" id="contact">
      <div className="page-container">
        <div className="contact-grid-main">
          <div className="contact-info-panel">
            <span className="section-label">{contactSection.label}</span>
            <h2 className="section-title mb-12">
              {contactSection.title} <br />
              <span className="metallic-gold">{contactSection.titleAccent}</span>
            </h2>

            <div className="contact-links-list">
              <div className="contact-link-item">
                <span className="tiny-label">ENQUIRIES</span>
                <a href={`mailto:${site.email}`} className="contact-value">
                  {site.email}
                </a>
              </div>
              {socialLinks.length > 0 && (
                <div className="contact-link-item">
                  <span className="tiny-label">INSTAGRAM</span>
                  <a
                    href={socialLinks[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-value"
                  >
                    {socialLinks[0].handle}
                  </a>
                </div>
              )}
              <div className="contact-link-item">
                <span className="tiny-label">LOCATION</span>
                <p className="contact-value">
                  {site.location.studio}, <br />
                  {site.location.city}, {site.location.country}
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-premium">
            <form className="agency-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-group">
                  <label>YOUR NAME</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="input-group">
                  <label>EMAIL ADDRESS</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>INTERESTED IN</label>
                  <select>
                    {contactFormInterests.map((interest) => (
                      <option key={interest}>{interest}</option>
                    ))}
                  </select>
                </div>
                <div className="input-group">
                  <label>TIMELINE</label>
                  <input type="text" placeholder="e.g. Next 3 months" />
                </div>
              </div>

              <div className="input-group">
                <label>ABOUT THE PROJECT</label>
                <textarea rows={5} placeholder="Tell us about your vision..." required />
              </div>

              <div className="form-actions mt-8">
                <button type="submit" className="btn-premium w-full text-center">
                  {contactSection.submitButtonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-6 cursor-pointer"
            style={{ backgroundColor: "rgba(10, 10, 10, 0.95)" }}
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="bg-white p-12 md:p-16 max-w-lg md:max-w-2xl w-full text-center flex flex-col items-center gap-10 shadow-2xl"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div className="relative w-32 h-32 overflow-hidden" style={{ borderRadius: "50%" }}>
                <Image
                  src={site.logo}
                  alt={`${site.name} Logo`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-serif" style={{ color: "var(--bg-dark)" }}>
                  {contactSection.successTitle}
                </h3>
                <p className="text-gray-600 leading-relaxed font-sans text-xl">
                  {contactSection.successMessage}
                </p>
              </div>

              <span className="text-xs uppercase tracking-widest text-gray-400 opacity-70">
                Click anywhere to close
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
