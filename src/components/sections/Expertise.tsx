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
            A balanced mix across recruitment, compensation & benefits, learning,
            engagement, and compliant HR operations.
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

      <div className="mt-4 grid items-stretch gap-4 md:grid-cols-2">
        <FadeIn delay={0.05} className="h-full md:col-span-2">
          <DomainBlock
            title="IMCD work domains"
            items={[...profile.workDomains.imcd]}
            tone="accent"
          />
        </FadeIn>
        <FadeIn delay={0.08} className="h-full">
          <DomainBlock
            title="Gleads hiring domains"
            items={[...profile.workDomains.gleads]}
            tone="neutral"
          />
        </FadeIn>
        <FadeIn delay={0.1} className="h-full">
          <DomainBlock
            title="BBCIncorp hiring domains"
            items={[...profile.workDomains.bbc]}
            tone="neutral"
          />
        </FadeIn>
      </div>
    </section>
  );
}

function DomainBlock({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "accent" | "neutral";
}) {
  return (
    <div
      className={cn(
        "card-glow card-glow-hover flex h-full min-h-full flex-col rounded-2xl p-5 sm:p-6",
        tone === "accent" ? "bg-accent/20" : "bg-white/5",
      )}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-blossom">
        {title}
      </p>
      <ul className="flex flex-1 flex-col justify-start space-y-2 text-sm text-white/70">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blossom/80" />
            <span className="min-w-0 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
