"use client";

import { useEffect, useState } from "react";
import {
  profile,
  getAboutHighlights,
  getCurrentEmployers,
} from "@/content/profile";
import { FadeIn } from "@/components/atoms/FadeIn";
import { handleHashNavigation } from "@/lib/scroll";
import { cn } from "@/lib/utils";

export function Overview() {
  const highlights = getAboutHighlights();
  const employers = getCurrentEmployers();
  const certLabels = profile.certificates
    .filter((c) => !c.note?.toLowerCase().includes("expired"))
    .map((c) => [c.name, c.year].filter(Boolean).join(" · "));
  const [hideScrollHint, setHideScrollHint] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Only hide the desktop floating hint; mobile CTA stays in document flow
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      if (!isDesktop) {
        setHideScrollHint(false);
        return;
      }
      setHideScrollHint(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="overview"
      className="relative flex flex-col px-4 py-10 text-center sm:px-6 sm:py-12 lg:h-dvh lg:px-8 lg:py-0"
    >
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center lg:py-4">
        <FadeIn className="w-full max-w-4xl" y={12}>
          <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blossom">
            <span className="h-px w-6 bg-blossom/70" aria-hidden />
            Snapshot
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            OVERVIEW
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm font-medium text-white/80 sm:text-base">
            Key credentials and current focus for HR and Talent Acquisition
            roles.
          </p>

          <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4 lg:gap-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="card-glow rounded-2xl px-3 py-3.5 text-center sm:py-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wider text-blossom">
                  {item.label}
                </p>
                <p className="mt-1.5 text-base font-bold text-white sm:text-lg">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-2.5 grid gap-2.5 md:grid-cols-2 lg:mt-3 lg:gap-3">
            <div className="card-glow rounded-2xl p-4 text-left sm:p-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-blossom">
                Education
              </p>
              <p className="mt-2 text-base font-bold leading-snug sm:text-lg">
                {profile.education.degree}
              </p>
              <p className="mt-1.5 text-sm text-white/70">
                {profile.education.school}
              </p>
              <p className="mt-0.5 text-sm text-white/50">
                {profile.education.period} · {profile.education.gpa}
              </p>
            </div>

            <div className="card-glow rounded-2xl p-4 text-left sm:p-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-blossom">
                Current roles
              </p>
              <ul className="mt-2 space-y-2">
                {employers.map((role) => (
                  <li key={`${role.company}-${role.title}`}>
                    <p className="font-semibold text-white">
                      {role.title} · {role.company}
                    </p>
                    <p className="text-sm text-white/55">{role.period}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-2.5 card-glow rounded-2xl p-4 text-left sm:p-5 lg:mt-3">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-blossom">
              Standout certificates
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {certLabels.map((label) => (
                <span
                  key={label}
                  className="inline-flex rounded-lg border border-blossom/25 bg-accent/35 px-3 py-1.5 text-sm font-medium text-white"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <div
        className={cn(
          "mt-8 flex justify-center lg:pointer-events-none lg:absolute lg:inset-x-0 lg:bottom-6 lg:mt-0 lg:transition-all lg:duration-300",
          hideScrollHint && "lg:translate-y-2 lg:opacity-0",
        )}
      >
        <a
          href="#experience"
          onClick={(e) => handleHashNavigation(e, "#experience")}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-blossom transition hover:border-blossom/40 hover:bg-accent hover:text-white",
            hideScrollHint && "lg:pointer-events-none",
          )}
          tabIndex={hideScrollHint ? -1 : 0}
          aria-hidden={hideScrollHint || undefined}
        >
          Scroll to explore
          <span aria-hidden className="inline-block animate-bounce">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
