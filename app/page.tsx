import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-white/[0.06] py-8 px-6 text-center">
        <p className="text-white/20 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Anaether Systems
        </p>
      </footer>
    </main>
  );
}
