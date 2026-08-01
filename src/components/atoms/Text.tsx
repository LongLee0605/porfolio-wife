import { cn } from "@/lib/utils";

type TextProps = {
  as?: "p" | "span" | "div";
  tone?: "default" | "muted" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const tones = {
  default: "text-ink",
  muted: "text-ink-soft",
  accent: "text-accent",
};

const sizes = {
  sm: "text-sm leading-relaxed",
  md: "text-base leading-relaxed",
  lg: "text-lg leading-relaxed md:text-xl",
};

export function Text({
  as: Tag = "p",
  tone = "default",
  size = "md",
  className,
  children,
}: TextProps) {
  return (
    <Tag className={cn(tones[tone], sizes[size], className)}>{children}</Tag>
  );
}
