import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import ProblemsWeSolve from "@/components/ProblemsWeSolve";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import About from "@/components/About";
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
        <ProblemsWeSolve />
        <Services />
        <Projects />
        <Process />
        <About />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
