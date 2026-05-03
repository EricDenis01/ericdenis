import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import SelectedWork from "./components/SelectedWork";
import Consulting from "./components/Consulting";
import FestiPal from "./components/FestiPal";
import SideProjects from "./components/SideProjects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <SelectedWork />
        <Consulting />
        <FestiPal />
        <SideProjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
