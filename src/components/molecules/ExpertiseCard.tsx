import { Badge } from "@/components/atoms/Badge";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import type { ExpertiseArea } from "@/content/profile";
import { cn } from "@/lib/utils";

type ExpertiseCardProps = {
  area: ExpertiseArea;
  featured?: boolean;
};

export function ExpertiseCard({ area, featured }: ExpertiseCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border p-6 sm:p-7",
        featured
          ? "border-transparent bg-night text-surface-elevated md:p-9"
          : "border-line bg-surface-elevated",
      )}
    >
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <Heading
          as="h3"
          size="md"
          className={cn(
            featured ? "text-2xl text-surface-elevated sm:text-3xl" : "text-lg",
          )}
        >
          {area.title}
        </Heading>
        <Badge
          tone={featured ? "neutral" : "accent"}
          className={
            featured
              ? "bg-white/10 text-surface-elevated"
              : undefined
          }
        >
          {area.weight}
        </Badge>
      </div>
      <ul className="mt-auto space-y-2.5">
        {area.points.map((point) => (
          <li key={point} className="flex gap-2.5">
            <span
              aria-hidden
              className={cn(
                "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                featured ? "bg-blossom" : "bg-accent",
              )}
            />
            <Text
              size="sm"
              className={featured ? "text-white/70" : undefined}
              tone={featured ? "default" : "muted"}
            >
              {point}
            </Text>
          </li>
        ))}
      </ul>
    </article>
  );
}
