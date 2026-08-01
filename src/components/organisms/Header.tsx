"use client";

import { useEffect, useId, useState } from "react";
import { Container } from "@/components/atoms/Container";
import { NavLink } from "@/components/molecules/NavLink";
import { profile } from "@/content/profile";
import { handleHashNavigation } from "@/lib/scroll";
import { cn } from "@/lib/utils";

export function Header() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = profile.nav.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
          return;
        }

        if (window.scrollY < 120) setActive("");
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.2, 0.45, 0.7] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-line bg-surface/90 shadow-[0_10px_40px_rgba(26,16,18,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="relative z-20 flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <a
          href="#top"
          onClick={(event) => {
            handleHashNavigation(event, "#top");
            closeMenu();
          }}
          className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
        >
          <span
            className={cn(
              "relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md transition-colors",
              solid
                ? "bg-accent text-surface-elevated group-hover:bg-night"
                : "bg-surface-elevated/15 text-surface-elevated ring-1 ring-white/25 group-hover:bg-surface-elevated/25",
            )}
            aria-hidden
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/mark.svg"
              alt=""
              width={36}
              height={36}
              className="h-full w-full"
            />
          </span>
          <span
            className={cn(
              "truncate font-display text-lg font-semibold tracking-tight sm:text-xl",
              solid ? "text-ink" : "text-surface-elevated",
            )}
          >
            {profile.shortName}
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex"
        >
          {profile.nav.map((item) => (
            <NavLink
              key={item.id}
              href={item.href}
              label={item.label}
              active={active === item.id}
              tone={solid ? "light" : "dark"}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            onClick={(event) => handleHashNavigation(event, "#contact")}
            className={cn(
              "inline-flex h-10 items-center rounded-md px-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
              solid
                ? "bg-accent text-surface-elevated shadow-[0_8px_18px_rgba(158,29,46,0.25)] hover:bg-night"
                : "bg-surface-elevated text-night shadow-[0_8px_18px_rgba(0,0,0,0.15)] hover:bg-blossom",
            )}
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className={cn(
            "relative z-20 inline-flex h-11 w-11 items-center justify-center rounded-md border lg:hidden",
            solid
              ? "border-line bg-surface-elevated text-ink"
              : "border-white/20 bg-white/10 text-surface-elevated backdrop-blur-sm",
          )}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4" aria-hidden>
            <span
              className={cn(
                "absolute left-0 top-0 h-[1.5px] w-full origin-center transition-all duration-300",
                solid ? "bg-ink" : "bg-surface-elevated",
                open && "top-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[6px] h-[1.5px] w-full transition-all duration-300",
                solid ? "bg-ink" : "bg-surface-elevated",
                open && "scale-x-0 opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[12px] h-[1.5px] w-full origin-center transition-all duration-300",
                solid ? "bg-ink" : "bg-surface-elevated",
                open && "top-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        id={menuId}
        className={cn(
          "absolute inset-x-0 top-full lg:hidden",
          open ? "visible" : "invisible",
        )}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          className={cn(
            "fixed inset-0 z-10 bg-night/45 backdrop-blur-[2px] transition-opacity duration-300",
            open ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          onClick={closeMenu}
          tabIndex={open ? 0 : -1}
        />

        <nav
          aria-label="Mobile"
          className={cn(
            "relative z-20 border-b border-line bg-surface-elevated px-5 pb-8 pt-3 shadow-[0_20px_50px_rgba(26,16,18,0.12)] transition-all duration-300",
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
          )}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {profile.nav.map((item) => (
              <NavLink
                key={item.id}
                href={item.href}
                label={item.label}
                active={active === item.id}
                tone="light"
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-base"
              />
            ))}
            <a
              href="#contact"
              onClick={(event) => {
                handleHashNavigation(event, "#contact");
                closeMenu();
              }}
              className="mt-3 inline-flex h-12 items-center justify-center rounded-md bg-accent text-sm font-semibold text-surface-elevated transition-all duration-300 hover:bg-night active:scale-[0.98]"
            >
              Get in touch
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
