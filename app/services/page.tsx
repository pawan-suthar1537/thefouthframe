import type { Metadata } from "next";
import Services from "../components/Services";
import Process from "../components/Process";
import CTA from "../components/CTA";
import { getSiteContent } from "../lib/data";

export const metadata: Metadata = {
  title: "Services | The Fourth Frame",
  description: "Professional photography, videography, social media management, brand strategy, and creative direction services by The Fourth Frame.",
};

export default async function ServicesPage() {
  const content = await getSiteContent();

  return (
    <>
      <div className="page-hero">
        <div className="section-label">
          <span className="section-label-line" />
          What We Offer
          <span className="section-label-line" />
        </div>
        <h1>Our <span className="accent-text">Services</span></h1>
        <p>
          Comprehensive visual and digital solutions tailored to elevate your brand.
          From professional shoots to full-scale digital strategy.
        </p>
      </div>
      <Services
        servicesSection={content.servicesSection}
        services={content.services}
      />
      <Process />
      <CTA />
    </>
  );
}
