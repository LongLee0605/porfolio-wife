import { FadeIn } from "@/components/ui/FadeIn";
import { profile } from "@/content/profile";

export function Skills() {
  const certLabels = profile.certificates.map((c) =>
    [c.name, c.year, c.note].filter(Boolean).join(" · "),
  );

  return (
    <section id="skills" className="section-shell text-left">
      <FadeIn>
        <header className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blossom">
            <span className="h-px w-6 bg-blossom/70" aria-hidden />
            Skills & certificates
          </p>
          <h2
            id="certificate"
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl"
          >
            Credentials and tools that support everyday HR craft
          </h2>
        </header>
      </FadeIn>

      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <FadeIn delay={0.04}>
          <SkillColumn title="Certificates" items={certLabels} />
        </FadeIn>
        <FadeIn delay={0.08}>
          <SkillColumn title="Tools" items={[...profile.tools]} />
        </FadeIn>
        <FadeIn delay={0.12}>
          <SkillColumn title="Soft skills" items={[...profile.softSkills]} />
        </FadeIn>
      </div>
    </section>
  );
}

function SkillColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blossom">
        {title}
      </p>
      <div className="flex flex-wrap gap-2.5">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center rounded-lg border border-white/15 bg-[#053566] px-3.5 py-2 text-sm text-white/90 transition hover:border-blossom/40 hover:bg-accent hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
