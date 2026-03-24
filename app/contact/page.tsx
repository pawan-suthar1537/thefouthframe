"use client";

import { motion } from "motion/react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you shortly.");
  };

  return (
    <>
      <div className="page-hero" style={{ textAlign: "left", padding: "10rem 4rem 4rem" }}>
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
         >
           <span className="section-label">Contact</span>
           <h1 style={{ fontSize: "5rem", maxWidth: "800px" }}>Connect With Our <span className="accent-text">Vision</span> Team.</h1>
           <p style={{ maxWidth: "500px", marginTop: "2rem", color: "var(--text-secondary)", fontWeight: 300 }}>
             From initial consultation to the final cinematic frame. Let&apos;s talk about your next project or digital strategy.
           </p>
         </motion.div>
      </div>

      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="page-container">
           <div className="contact-v2">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
                <span className="contact-label-v2">Enquiries</span>
                <p style={{ fontSize: "1.2rem", color: "var(--text-primary)", fontWeight: 500, marginBottom: "4rem" }}>hello@thefourthframe.com</p>

                <span className="contact-label-v2">Location</span>
                <p style={{ fontSize: "1.2rem", color: "var(--text-primary)", fontWeight: 500, marginBottom: "4rem" }}>Pune, Maharashtra • India</p>

                <span className="contact-label-v2">Follow Our Journey</span>
                <a href="https://www.instagram.com/the_fourthframe_/" target="_blank" className="btn-ghost" style={{ borderBottomColor: "var(--accent)" }}>@the_fourthframe_</a>

                <div 
                   style={{ 
                     marginTop: "8rem", 
                     padding: "3rem", 
                     background: "var(--bg-secondary)", 
                     borderRadius: "var(--radius-sm)",
                     textAlign: "center"
                   }}
                >
                   <h3 style={{ fontSize: "1.3rem", fontWeight: 500, marginBottom: "1rem" }}>Management</h3>
                   <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.8 }}>
                      Focus on your brand; we manage the movement. Professional shoot curation & production workflow, from concept to creation.
                   </p>
                </div>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
             >
                <form onSubmit={handleSubmit}>
                   <span className="contact-label-v2">Your Name</span>
                   <input type="text" placeholder="John Doe" required />

                   <span className="contact-label-v2">Email Address</span>
                   <input type="email" placeholder="john@example.com" required />

                   <span className="contact-label-v2">Primary Interest</span>
                   <input type="text" placeholder="Photography / Film / Strategy" required />

                   <span className="contact-label-v2">About the Project</span>
                   <textarea placeholder="Briefly describe your vision..." required />

                   <button type="submit" className="btn-minimal" style={{ width: "100%", justifyContent: "center" }}>
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "1rem" }}>
                         <line x1="22" y1="2" x2="11" y2="13"></line>
                         <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                   </button>
                </form>
             </motion.div>
           </div>
        </div>
      </section>

      <section style={{ paddingBottom: "4rem" }}>
        <div className="page-container">
           <div 
             style={{ 
               borderRadius: "var(--radius-sm)", 
               overflow: "hidden", 
               height: "500px", 
               width: "100%",
               border: "1px solid var(--border)",
               position: "relative"
             }}
           >
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04710156947!2d73.7805179!3d18.5245648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e674109ad%3A0x82202a3edc0d09e3!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711280000000!5m2!1sen!2sin"
               width="100%"
               height="100%"
               style={{ border: 0, filter: "grayscale(1) opacity(0.8) contrast(1.1)" }}
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
