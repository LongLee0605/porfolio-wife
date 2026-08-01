import { cn } from "@/lib/utils";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4";
  id?: string;
  size?: "display" | "xl" | "lg" | "md" | "sm";
  className?: string;
  children: React.ReactNode;
};

const sizes = {
  display:
    "font-display text-5xl font-semibold leading-[0.98] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-[5.5rem]",
  xl: "font-display text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-4xl md:text-5xl",
  lg: "font-display text-2xl font-semibold leading-snug tracking-[-0.01em] sm:text-3xl",
  md: "font-sans text-xl font-semibold tracking-tight",
  sm: "font-sans text-xs font-semibold tracking-[0.18em] uppercase",
};

export function Heading({
  as,
  id,
  size = "lg",
  className,
  children,
}: HeadingProps) {
  const Tag = as ?? (size === "display" ? "h1" : size === "xl" ? "h2" : "h3");
  return (
    <Tag id={id} className={cn("text-ink", sizes[size], className)}>
      {children}
    </Tag>
  );
}
