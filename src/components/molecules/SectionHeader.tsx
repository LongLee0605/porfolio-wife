import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-7 bg-current opacity-60" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <Heading as="h2" id={id} size="xl">
        {title}
      </Heading>
      {description ? (
        <Text tone="muted" className="mt-4" size="lg">
          {description}
        </Text>
      ) : null}
    </header>
  );
}
