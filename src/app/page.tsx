import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <Projects />
        <About />
        <WhyUs />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
