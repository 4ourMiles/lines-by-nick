"use client";

import { useEffect, useRef } from "react";

/** A line that draws itself on when it scrolls into view. Falls back to a plain bar on narrow screens. */
export function DrawnLine({ dashed = false }: { dashed?: boolean }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("is-drawn");
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <i ref={ref} className={`link link--draw${dashed ? " link--dashed" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 100 10" preserveAspectRatio="none">
        <path pathLength={1} d="M0 5 H100" />
      </svg>
    </i>
  );
}
