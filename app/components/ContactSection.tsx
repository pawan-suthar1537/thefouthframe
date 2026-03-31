"use client";

export default function ContactSection() {
  return (
    <section className="section bg-beige-light" id="contact">
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
                <a href="mailto:hello@theagencyframe.com" className="contact-value">
                  hello@theagencyframe.com
                </a>
              </div>
              <div className="contact-link-item">
                <span className="tiny-label">INSTAGRAM</span>
                <a
                  href="https://instagram.com/the_fourthframe_"
                  target="_blank"
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
            <form className="agency-form">
              <div className="form-row">
                <div className="input-group">
                  <label>YOUR NAME</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="input-group">
                  <label>EMAIL ADDRESS</label>
                  <input type="email" placeholder="john@example.com" />
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
                <textarea rows={5} placeholder="Tell us about your vision..." />
              </div>

              <div className="form-actions mt-8">
                <button type="submit" className="btn-premium w-full text-center">
                  SUBMIT ENQUIRY
                </button>
                <button type="button" className="btn-outline-gold w-full mt-4">
                  BOOK A CONSULTATION
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
