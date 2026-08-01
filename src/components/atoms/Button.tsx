"use client";

import { cn } from "@/lib/utils";
import { handleHashNavigation } from "@/lib/scroll";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost" | "onDark";
  size?: "md" | "lg";
};

const variants = {
  primary:
    "bg-accent text-surface-elevated shadow-[0_8px_20px_rgba(158,29,46,0.22)] hover:bg-night hover:shadow-[0_12px_28px_rgba(42,15,20,0.28)] active:bg-night/90",
  secondary:
    "border border-line bg-surface-elevated/90 text-ink hover:border-accent/45 hover:bg-accent-soft hover:text-accent active:bg-accent-soft/80",
  ghost:
    "text-ink-soft hover:text-ink underline-offset-4 hover:underline",
  onDark:
    "bg-surface-elevated text-night shadow-[0_8px_20px_rgba(0,0,0,0.18)] hover:bg-blossom hover:text-night active:bg-blossom/90",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-[0.95rem]",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        "hover:-translate-y-0.5 active:translate-y-0",
        variants[variant],
        sizes[size],
        className,
      )}
      onClick={(event) => {
        handleHashNavigation(event, href);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
