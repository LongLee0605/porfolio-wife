import {
  profile,
  getAboutHighlights,
  getCurrentEmployers,
} from "@/content/profile";
import { FadeIn } from "@/components/ui/FadeIn";

export function Overview() {
  const highlights = getAboutHighlights();
  const employers = getCurrentEmployers();
  const focusPreview = profile.focusAreas.slice(0, 5);

  return (
    <section
      id="overview"
      className="relative flex flex-col px-4 py-10 text-center sm:px-6 sm:py-12 lg:h-dvh lg:px-8 lg:py-0"
    >
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center lg:py-4">
        <FadeIn className="w-full max-w-5xl" y={12}>
          <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blossom">
            <span className="h-px w-6 bg-blossom/70" aria-hidden />
            Snapshot
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            OVERVIEW
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm font-medium text-white/80 sm:text-base">
            {profile.objective}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="card-glow min-w-0 rounded-2xl px-4 py-4 text-center sm:py-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wider text-blossom">
                  {item.label}
                </p>
                <p className="mt-2 text-base font-bold leading-snug text-white sm:text-lg">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
            <div className="card-glow min-w-0 rounded-2xl p-5 text-left sm:p-6">
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

            <div className="card-glow min-w-0 rounded-2xl p-5 text-left sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-blossom">
                Current roles
              </p>
              <ul className="mt-3 space-y-3">
                {employers.map((role) => (
                  <li key={`${role.company}-${role.title}`}>
                    <p className="font-semibold text-white">{role.company}</p>
                    <p className="text-sm text-white/70">{role.title}</p>
                    <p className="text-sm text-white/55">{role.period}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 card-glow rounded-2xl p-5 text-left sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-blossom">
              Focus now
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {focusPreview.map((area) => (
                <span
                  key={area}
                  className="inline-flex rounded-lg border border-blossom/25 bg-accent/35 px-3.5 py-2 text-sm font-medium text-white"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
