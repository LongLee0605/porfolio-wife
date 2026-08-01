import { Badge } from "@/components/atoms/Badge";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import type { ExperienceRole } from "@/content/profile";

type ExperienceItemProps = {
  role: ExperienceRole;
  index: number;
  isLast?: boolean;
};

export function ExperienceItem({ role, index, isLast }: ExperienceItemProps) {
  return (
    <article className="relative grid gap-4 pb-12 md:grid-cols-[140px_28px_1fr] md:gap-6">
      <div className="md:pt-1">
        <p className="font-display text-sm font-semibold text-accent">
          {String(index + 1).padStart(2, "0")}
        </p>
        <Text size="sm" tone="muted" className="mt-2 md:max-w-[8.5rem]">
          {role.period}
        </Text>
      </div>

      <div className="relative hidden md:block" aria-hidden>
        <span className="absolute left-1/2 top-2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-accent bg-surface" />
        {!isLast ? (
          <span className="absolute left-1/2 top-6 h-[calc(100%+1.5rem)] w-px -translate-x-1/2 bg-line" />
        ) : null}
      </div>

      <div className="rounded-2xl border border-line bg-surface-elevated p-6 transition-shadow hover:shadow-[0_16px_50px_rgba(11,16,32,0.06)] sm:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <Heading as="h3" size="md">
            {role.title}
          </Heading>
          <Badge tone="accent">{role.company}</Badge>
        </div>
        <ul className="mt-5 space-y-3">
          {role.highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              <Text as="span" tone="muted">
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
