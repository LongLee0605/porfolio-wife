import { BackToTop } from "@/components/ui/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/layout/Sidebar";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { Overview } from "@/components/sections/Overview";
import { Skills } from "@/components/sections/Skills";

export function PortfolioShell() {
  return (
    <div className="relative mx-auto flex w-full max-w-[1920px] flex-col lg:flex-row">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#002a56]"
      >
        Skip to content
      </a>
      <Sidebar />
      <main
        id="main-content"
        className="relative z-0 w-full min-w-0 isolate bg-surface lg:ml-[360px] lg:w-[calc(100%-360px)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -right-16 bottom-1/3 h-80 w-80 rounded-full bg-night/60 blur-3xl" />
        </div>
        <Overview />
        <div className="mx-4 border-t border-white/10 sm:mx-6 lg:mx-8" />
        <Experience />
        <div className="mx-4 border-t border-white/10 sm:mx-6 lg:mx-8" />
        <Expertise />
        <div className="mx-4 border-t border-white/10 sm:mx-6 lg:mx-8" />
        <Skills />
        <div className="mx-4 border-t border-white/10 sm:mx-6 lg:mx-8" />
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </div>
  );
}
