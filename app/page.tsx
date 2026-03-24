import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <Services limit={3} />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
