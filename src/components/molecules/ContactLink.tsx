import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

type ContactLinkProps = {
  href: string;
  label: string;
  value: string;
  external?: boolean;
  className?: string;
};

export function ContactLink({
  href,
  label,
  value,
  external,
  className,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group flex flex-col gap-1.5 border-t border-line py-5 transition-colors first:border-t-0 hover:border-accent/40",
        className,
      )}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <Text
        size="sm"
        className="font-semibold uppercase tracking-[0.16em] text-ink-soft/70"
      >
        {label}
      </Text>
      <span className="font-display text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-xl">
        {value}
      </span>
    </a>
  );
}
