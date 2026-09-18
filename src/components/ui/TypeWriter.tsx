"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type TypeWriterProps = {
  words: readonly string[];
  className?: string;
};

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function TypeWriter({ words, className }: TypeWriterProps) {
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion || words.length === 0) return;

    const full = words[index % words.length] ?? "";
    const delay = deleting ? 40 : text === full ? 1600 : 90;

    const timer = window.setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
        return;
      }
      setText(full.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, words, reduceMotion]);

  if (reduceMotion) {
    return (
      <span className={cn("text-accent", className)}>
        {words[0] ?? ""}
      </span>
    );
  }

  return (
    <span className={cn("text-accent", className)} aria-live="polite">
      {text}
    </span>
  );
}
