import Hero from "@/components/Sections/Hero";
import Services from "@/components/Sections/Services";
import Work from "@/components/Sections/Work";
import About from "@/components/Sections/about";
import Testimonials from "@/components/Sections/Testimonials";
import CTA from "@/components/Sections/Cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
}