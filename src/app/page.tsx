import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import ProblemsWeSolve from "@/components/ProblemsWeSolve";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ClientReviews from "@/components/ClientReviews";
import Process from "@/components/Process";
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
        <Technologies />
        <ClientReviews />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
