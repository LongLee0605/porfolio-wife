import { Container } from "@/components/atoms/Container";
import { FadeIn } from "@/components/atoms/FadeIn";
import { Text } from "@/components/atoms/Text";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { getAboutHighlights, profile } from "@/content/profile";

export function About() {
  const highlights = getAboutHighlights();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <FadeIn>
            <SectionHeader
              id="about-heading"
              eyebrow="About"
              title="People-centered HR with operational precision"
            />
            <Text tone="muted" size="lg" className="mt-6 max-w-md">
              {profile.objective}
            </Text>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-line bg-surface-elevated p-4 sm:p-5"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft/70">
                    {item.label}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold tracking-tight text-ink sm:mt-3 sm:text-2xl">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.08} className="mt-12 sm:mt-14">
          <div className="relative overflow-hidden rounded-2xl bg-night p-6 text-surface-elevated sm:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 top-0 h-40 w-40 rounded-full bg-accent/35 blur-3xl"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blossom">
              Education
            </p>
            <p className="mt-4 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              {profile.education.degree}
            </p>
            <Text className="mt-4 text-white/70">
              {profile.education.school}
            </Text>
            <p className="mt-2 text-sm text-white/45">
              {profile.education.period} · {profile.education.gpa}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
