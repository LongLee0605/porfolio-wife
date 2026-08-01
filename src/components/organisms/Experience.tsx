import { Container } from "@/components/atoms/Container";
import { FadeIn } from "@/components/atoms/FadeIn";
import { ExperienceItem } from "@/components/molecules/ExperienceItem";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { profile } from "@/content/profile";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-y border-line bg-mist/45 py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <FadeIn>
          <SectionHeader
            id="experience-heading"
            eyebrow="Experience"
            title="A timeline of hiring, culture, and HR delivery"
            description="From campus HR to dual executive roles — building talent pipelines across tech, marketing, legal, and operations."
          />
        </FadeIn>

        <div className="mt-14">
          {profile.experiences.map((role, index) => (
            <FadeIn key={`${role.company}-${role.title}`} delay={index * 0.05}>
              <ExperienceItem
                role={role}
                index={index}
                isLast={index === profile.experiences.length - 1}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
