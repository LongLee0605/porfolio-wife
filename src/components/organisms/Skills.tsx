import { Container } from "@/components/atoms/Container";
import { FadeIn } from "@/components/atoms/FadeIn";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { SkillChip } from "@/components/molecules/SkillChip";
import { profile } from "@/content/profile";

export function Skills() {
  const certLabels = profile.certificates.map((c) =>
    [c.name, c.year, c.note].filter(Boolean).join(" · "),
  );

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-y border-line bg-night py-20 text-surface-elevated sm:py-28 lg:py-32"
    >
      <Container>
        <FadeIn>
          <SectionHeader
            id="skills-heading"
            eyebrow="Skills & certificates"
            title="Credentials and tools that support everyday HR craft"
            className="[&_h2]:text-surface-elevated [&_p:first-child]:text-blossom"
          />
        </FadeIn>

        <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-3">
          <FadeIn delay={0.08}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Certificates
            </p>
            <div className="flex flex-wrap gap-2.5">
              {certLabels.map((label) => (
                <SkillChip key={label} label={label} tone="dark" />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Tools
            </p>
            <div className="flex flex-wrap gap-2.5">
              {profile.tools.map((tool) => (
                <SkillChip key={tool} label={tool} tone="dark" />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Soft skills
            </p>
            <div className="flex flex-wrap gap-2.5">
              {profile.softSkills.map((skill) => (
                <SkillChip key={skill} label={skill} tone="dark" />
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
