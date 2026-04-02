import Hero from "./components/Hero";
import TalentGrid from "./components/TalentGrid";
import Services from "./components/Services";
import Founders from "./components/Founders";
import PortfolioExplorer from "./components/PortfolioExplorer";
import LocationMasonry from "./components/LocationMasonry";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <div id="talent">
        <TalentGrid />
      </div> */}
      <div id="founders">
        <Founders />
      </div>
      <div id="services">
        <Services />
      </div>

      <div id="work">
        <PortfolioExplorer />
      </div>
      {/* <div id="locations">
        <LocationMasonry />
      </div> */}
      {/* <div id="pricing">
        <PricingSection />
      </div> */}
      {/* <div id="reviews">
        <Testimonials />
      </div> */}
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}

