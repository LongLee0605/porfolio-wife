import { cn } from "@/lib/utils";

type SkillChipProps = {
  label: string;
  className?: string;
  tone?: "light" | "dark";
};

export function SkillChip({
  label,
  className,
  tone = "light",
}: SkillChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-3.5 py-2 text-sm transition-colors",
        tone === "light" &&
          "border-line bg-surface-elevated text-ink-soft hover:border-accent/40 hover:text-ink",
        tone === "dark" &&
          "border-line-on-dark bg-night-elevated text-white/80 hover:border-accent-warm/50 hover:text-surface-elevated",
        className,
      )}
    >
      {label}
    </span>
  );
}
