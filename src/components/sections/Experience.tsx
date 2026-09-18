import { FadeIn } from "@/components/ui/FadeIn";
import { profile } from "@/content/profile";
import type { ExperienceRole } from "@/content/profile";

function ExperienceCard({ role }: { role: ExperienceRole }) {
  return (
    <article className="card-glow card-glow-hover relative flex flex-col gap-3 overflow-hidden rounded-2xl p-4 text-left sm:gap-4 sm:p-6">
      <div className="flex w-full items-start gap-3 sm:gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-bold text-[#002a56] sm:h-12 sm:w-12 sm:text-sm">
          {role.company
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((w) => w[0])
            .join("")
            .toUpperCase()}
        </div>
        <div className="flex min-w-0 flex-col items-start">
          <p className="text-left text-base font-semibold text-white sm:text-lg">
            {role.title}
          </p>
          <p className="text-sm font-medium text-blossom">{role.company}</p>
          <p className="text-xs text-white/50">{role.period}</p>
        </div>
      </div>
      <ul className="space-y-2 text-left text-sm text-white/70 sm:text-[15px]">
        {role.highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-warm" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-shell text-center">
      <FadeIn>
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blossom">
          <span className="h-px w-6 bg-blossom/70" aria-hidden />
          Career
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">Experience</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base font-medium text-white/80 sm:text-lg">
          Career timeline — roles, companies, and key outcomes at a glance.
          Deeper scope lives in Expertise.
        </p>
      </FadeIn>

      <div className="relative mx-auto mt-10 hidden max-w-5xl xl:block">
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent via-blossom/60 to-accent/30"
        />
        <div className="flex flex-col gap-8">
          {profile.experiences.map((role, index) => {
            const left = index % 2 === 0;
            return (
              <FadeIn key={`${role.company}-${role.title}`} delay={index * 0.05}>
                <div className="relative grid grid-cols-[1fr_24px_1fr] items-start gap-4">
                  <div className={left ? "pr-2" : "invisible pr-2"}>
                    {left ? <ExperienceCard role={role} /> : null}
                  </div>
                  <div className="relative flex justify-center pt-8">
                    <span className="z-10 h-4 w-4 rounded-full border-2 border-white bg-accent shadow-[0_0_12px_rgba(158,201,245,0.5)]" />
                  </div>
                  <div className={!left ? "pl-2" : "invisible pl-2"}>
                    {!left ? <ExperienceCard role={role} /> : null}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <div className="relative mx-auto mt-10 block max-w-2xl xl:hidden">
        <div
          aria-hidden
          className="absolute bottom-0 left-[15px] top-2 w-0.5 bg-gradient-to-b from-accent to-accent/20 sm:left-[21px]"
        />
        <div className="flex flex-col gap-6">
          {profile.experiences.map((role, index) => (
            <FadeIn key={`${role.company}-${role.title}-m`} delay={index * 0.04}>
              <div className="relative flex gap-3 sm:gap-4">
                <div className="relative z-10 mt-5 flex w-8 shrink-0 justify-center sm:mt-6 sm:w-[18px]">
                  <span className="h-3.5 w-3.5 rounded-full border-2 border-white bg-accent sm:h-4 sm:w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <ExperienceCard role={role} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
