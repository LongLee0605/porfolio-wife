"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { scrollToId } from "@/lib/scroll";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        scrollToId("top");
        window.history.pushState(null, "", "#top");
      }}
      className={cn(
        "group fixed right-5 bottom-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-accent/20 bg-accent text-surface-elevated shadow-[0_12px_30px_rgba(158,29,46,0.35)] transition-all duration-300 sm:right-7 sm:bottom-7 sm:h-14 sm:w-14",
        "hover:-translate-y-1 hover:scale-105 hover:bg-night hover:shadow-[0_16px_36px_rgba(42,15,20,0.4)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        "active:translate-y-0 active:scale-95",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-6 sm:w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
