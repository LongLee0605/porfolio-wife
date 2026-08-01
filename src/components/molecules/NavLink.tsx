"use client";

import { cn } from "@/lib/utils";
import { handleHashNavigation } from "@/lib/scroll";

type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  tone?: "light" | "dark";
};

export function NavLink({
  href,
  label,
  active,
  onClick,
  className,
  tone = "light",
}: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        handleHashNavigation(event, href);
        onClick?.();
      }}
      className={cn(
        "relative inline-flex items-center px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200",
        tone === "light" &&
          (active ? "text-ink" : "text-ink-soft hover:text-accent"),
        tone === "dark" &&
          (active
            ? "text-surface-elevated"
            : "text-white/70 hover:text-blossom"),
        className,
      )}
      aria-current={active ? "true" : undefined}
    >
      {label}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-3 -bottom-0.5 h-[2px] origin-left transition-transform duration-300",
          tone === "light" ? "bg-accent" : "bg-blossom",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </a>
  );
}
