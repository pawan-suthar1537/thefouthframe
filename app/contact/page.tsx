"use client";

import { motion } from "motion/react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you shortly.");
  };

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
            Get in Touch
            <span className="section-label-line" />
          </div>
          <h1>
            Contact <span className="accent-text">Us</span>
          </h1>
          <p>
            Ready to visualize your brand? Let&apos;s discuss how we can help you
            tell your story through cinematic visuals.
          </p>
        </motion.div>
      </div>

      <section className="section">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-info-card">
              <div className="contact-info-icon">📧</div>
              <div className="contact-info-text">
                <h4>Email Us</h4>
                <p>hello@thefourthframe.com</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">📸</div>
              <div className="contact-info-text">
                <h4>Instagram</h4>
                <p>@the_fourthframe_</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">📍</div>
              <div className="contact-info-text">
                <h4>Location</h4>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>

            <div 
              style={{ 
                marginTop: "1.5rem", 
                padding: "2rem", 
                background: "var(--bg-glass)", 
                border: "var(--glass-border)",
                borderRadius: "var(--radius-xl)",
                textAlign: "center"
              }}
            >
              <h3>Shoot Management</h3>
              <p style={{ marginTop: "0.5rem", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                From concept to creation, we manage the entire production workflow 
                so you can focus on your brand.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Interested Service</label>
                <select id="service">
                  <option value="photography">Photography</option>
                  <option value="videography">Videography</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="branding">Brand Strategy</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" placeholder="Tell us about your project..." required />
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section 
        className="section" 
        style={{ background: "var(--bg-primary)", paddingTop: "0" }}
      >
        <div className="page-container">
          <div 
            style={{ 
              borderRadius: "var(--radius-xl)", 
              overflow: "hidden", 
              height: "400px", 
              width: "100%",
              background: "var(--bg-secondary)",
              border: "var(--glass-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative"
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04710156947!2d73.7805179!3d18.5245648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e674109ad%3A0x82202a3edc0d09e3!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711280000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pune Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
