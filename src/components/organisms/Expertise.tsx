import { Container } from "@/components/atoms/Container";
import { FadeIn } from "@/components/atoms/FadeIn";
import { Text } from "@/components/atoms/Text";
import { ExpertiseCard } from "@/components/molecules/ExpertiseCard";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { profile } from "@/content/profile";

export function Expertise() {
  const [featured, ...rest] = profile.expertise;

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <FadeIn>
          <SectionHeader
            id="expertise-heading"
            eyebrow="Expertise"
            title="How attention is invested across the HR spectrum"
            description="A practical mix weighted toward recruitment, backed by solid operations, relations, and culture work."
          />
        </FadeIn>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FadeIn className="md:col-span-2 md:row-span-2">
            <ExpertiseCard area={featured} featured />
          </FadeIn>
          {rest.map((area, index) => (
            <FadeIn key={area.title} delay={0.05 + index * 0.04}>
              <ExpertiseCard area={area} />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-accent-soft/50 p-6 sm:p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Gleads hiring domains
            </p>
            <ul className="space-y-2">
              {profile.recruitmentDomains.gleads.map((item) => (
                <li key={item}>
                  <Text size="sm" tone="muted">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-mist/60 p-6 sm:p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft/70">
              BBCIncorp hiring domains
            </p>
            <ul className="space-y-2">
              {profile.recruitmentDomains.bbc.map((item) => (
                <li key={item}>
                  <Text size="sm" tone="muted">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
