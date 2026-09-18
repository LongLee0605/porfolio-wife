import { FadeIn } from "@/components/ui/FadeIn";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

export function Expertise() {
  const [featured, ...rest] = profile.expertise;

  return (
    <section id="expertise" className="section-shell text-left">
      <FadeIn>
        <header className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blossom">
            <span className="h-px w-6 bg-blossom/70" aria-hidden />
            Expertise
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            How attention is invested across the HR spectrum
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Capability mix first — then the deep work scopes by employer.
          </p>
        </header>
      </FadeIn>

      <div className="mt-10 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
        <FadeIn className="h-full md:col-span-2 md:row-span-2" y={20}>
          <article className="card-glow card-glow-hover flex h-full flex-col rounded-2xl bg-accent/25 p-6 md:p-8">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {featured.title}
              </h3>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-blossom">
                {featured.weight}
              </span>
            </div>
            <ul className="mt-auto space-y-3 text-sm leading-relaxed text-white/75 sm:text-base">
              {featured.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blossom" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </FadeIn>

        {rest.map((area, i) => (
          <FadeIn
            key={area.title}
            delay={0.06 + i * 0.04}
            y={20}
            className="h-full"
          >
            <article className="card-glow card-glow-hover flex h-full flex-col rounded-2xl p-5 sm:p-6">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {area.title}
                </h3>
                <span className="rounded-full bg-accent/40 px-2.5 py-1 text-xs font-semibold text-blossom">
                  {area.weight}
                </span>
              </div>
              <ul className="mt-auto space-y-2.5 text-sm text-white/70">
                {area.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-warm" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.08} className="mt-12">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blossom">
              Employer scopes
            </p>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
              Where the work shows up in practice
            </h3>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/55 sm:text-right">
            Deep detail by company — Experience stays as the timeline.
          </p>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          <ImcdScope />
          <GleadsBbcScope />
        </div>
      </FadeIn>
    </section>
  );
}

function ImcdScope() {
  return (
    <article className="card-glow flex h-full flex-col overflow-hidden rounded-2xl bg-accent/20">
      <header className="border-b border-white/10 bg-accent/35 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-blossom">
            Current
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
            Mar 2026 – Present
          </span>
        </div>
        <h4 className="mt-3 text-xl font-bold text-white sm:text-2xl">IMCD</h4>
        <p className="mt-1 text-sm text-white/65">
          Full HR Executive scope across recruitment, C&amp;B, L&amp;D,
          engagement, and operations.
        </p>
      </header>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:gap-3.5 sm:p-5">
        {profile.workDomains.imcd.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-white/10 bg-[#042a52]/65 p-4"
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blossom">
              {group.label}
            </p>
            <ul className="mt-2.5 space-y-2">
              {group.details.map((detail) => (
                <li
                  key={detail}
                  className="text-sm leading-relaxed text-white/75"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

function GleadsBbcScope() {
  return (
    <article className="card-glow flex h-full flex-col overflow-hidden rounded-2xl bg-white/[0.04]">
      <header className="border-b border-white/10 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-accent/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-blossom">
            Prior
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
            June 2023 – Mar 2026
          </span>
        </div>
        <h4 className="mt-3 text-xl font-bold text-white sm:text-2xl">
          Gleads &amp; BBCIncorp
        </h4>
        <p className="mt-1 text-sm text-white/65">
          Multi-entity hiring domains across Technology, Marketing, Legal, and
          more.
        </p>
      </header>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        {profile.workDomains.gleadsBbc.map((domain) => (
          <div
            key={domain.label}
            className="rounded-xl border border-white/10 bg-[#042a52]/45 p-4"
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blossom">
              {domain.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {domain.roles.map((role) => (
                <span
                  key={role}
                  className="inline-flex rounded-lg border border-blossom/20 bg-accent/30 px-2.5 py-1 text-xs font-medium text-white/90"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        ))}

        <p
          className={cn(
            "mt-auto rounded-xl border border-dashed border-blossom/25 bg-accent/15 px-4 py-3 text-sm leading-relaxed text-white/70",
          )}
        >
          {profile.workDomains.gleadsBbcNote}
        </p>
      </div>
    </article>
  );
}
