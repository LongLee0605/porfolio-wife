import { Container } from "@/components/atoms/Container";
import { FadeIn } from "@/components/atoms/FadeIn";
import { Button } from "@/components/atoms/Button";
import { ContactLink } from "@/components/molecules/ContactLink";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { profile } from "@/content/profile";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden pt-20 sm:pt-28 lg:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(158,29,46,0.1),_transparent_45%),radial-gradient(ellipse_at_bottom_left,_rgba(232,183,191,0.22),_transparent_40%)]"
      />

      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <FadeIn>
            <SectionHeader
              id="contact-heading"
              eyebrow="Contact"
              title="Let’s talk about roles, teams, and people strategies"
              description="Open to conversations about HR Executive and Talent Acquisition opportunities."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={profile.contact.emailHref} size="lg">
                Email Trang
              </Button>
              <Button
                href={profile.contact.linkedin}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-line bg-surface-elevated/95 p-2 shadow-[0_20px_60px_rgba(26,16,18,0.06)]">
              <div className="px-4 sm:px-5">
                <ContactLink
                  href={profile.contact.emailHref}
                  label="Email"
                  value={profile.contact.email}
                />
                <ContactLink
                  href={profile.contact.phoneHref}
                  label="Phone"
                  value={profile.contact.phone}
                />
                <ContactLink
                  href={profile.contact.linkedin}
                  label="LinkedIn"
                  value={profile.contact.linkedinLabel}
                  external
                />
              </div>
            </div>
          </FadeIn>
        </div>

        <footer className="mt-16 flex flex-col gap-2 border-t border-line py-8 text-sm text-ink-soft/70 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:py-10">
          <p>
            {profile.title} · {profile.location}
          </p>
          <p>
            © {year} {profile.name}
          </p>
        </footer>
      </Container>
    </section>
  );
}
