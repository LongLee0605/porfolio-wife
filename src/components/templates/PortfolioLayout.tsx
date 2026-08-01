import { BackToTop } from "@/components/atoms/BackToTop";
import { About } from "@/components/organisms/About";
import { Contact } from "@/components/organisms/Contact";
import { Experience } from "@/components/organisms/Experience";
import { Expertise } from "@/components/organisms/Expertise";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { Skills } from "@/components/organisms/Skills";

export function PortfolioLayout() {
  return (
    <>
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[60] -translate-y-16 rounded-md bg-accent px-4 py-2 text-sm text-surface-elevated transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Skills />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}
