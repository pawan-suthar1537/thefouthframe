import Hero from "./components/Hero";
import Services from "./components/Services";
import Founders from "./components/Founders";
import PortfolioExplorer from "./components/PortfolioExplorer";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Founders />
      <Services />
      <PortfolioExplorer />
      <ContactSection />
    </main>
  );
}
