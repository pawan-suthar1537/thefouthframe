"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function ContactSection() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setShowSuccessModal(true);
  };

  return (
    <section className="section bg-white anchor-section" id="contact">
      <div className="page-container">
        <div className="contact-grid-main">
          <div className="contact-info-panel">
            <span className="section-label">GET IN TOUCH</span>
            <h2 className="section-title mb-12">
              CONNECT WITH <br />
              <span className="metallic-gold">THE FRAME</span>
            </h2>

            <div className="contact-links-list">
              <div className="contact-link-item">
                <span className="tiny-label">ENQUIRIES</span>
                <a href="mailto:hellothefourthframe@gmail.com" className="contact-value">
                  hellothefourthframe@gmail.com
                </a>
              </div>
              <div className="contact-link-item">
                <span className="tiny-label">INSTAGRAM</span>
                <a
                  href="https://instagram.com/the_fourthframe_"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-value"
                >
                  @the_fourthframe_
                </a>
              </div>
              <div className="contact-link-item">
                <span className="tiny-label">LOCATION</span>
                <p className="contact-value">
                  Luxury Production Studio, <br />
                  Bikaner, India
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
                    <option>Talent Booking</option>
                    <option>Production Management</option>
                    <option>Location Scouting</option>
                    <option>Full Agency Service</option>
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
                  Book Your Talent
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
                  src="/images/logo.jpg"
                  alt="The Agency Frame Logo"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-serif" style={{ color: "var(--bg-dark)" }}>Submission Successful</h3>
                <p className="text-gray-600 leading-relaxed font-sans text-xl">
                  Your query has been submitted and our team will connect with you soon.
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
