import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Training from "@/components/Training";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header/Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">
            Mukesh<span className="text-primary">.dev</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#education" className="hover:text-foreground transition-colors">Education</a>
            <a href="#training" className="hover:text-foreground transition-colors">Training</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          </div>
        </nav>
      </header>

      <div className="pt-20">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Training />
        <Projects />
      </div>

      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-white/5 mt-20">
        <p>© {new Date().getFullYear()} Mukesh Kumar. Built with Next.js, Tailwind & Framer Motion.</p>
      </footer>
    </main>
  );
}
