import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "accent";
};

export function Badge({ children, className, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold tracking-wide",
        tone === "neutral" && "bg-mist text-ink-soft",
        tone === "accent" && "bg-accent-soft text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
