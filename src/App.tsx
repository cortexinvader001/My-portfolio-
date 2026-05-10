import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackgroundEffect from "./components/BackgroundEffect";

export default function App() {
  return (
    <div id="portfolio-root" className="relative bg-[#050505] min-h-screen text-[#F0F0F0] selection:bg-cyan-400 selection:text-black scroll-smooth font-sans scroll-pt-24">
      <BackgroundEffect />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

