"use client";

import { useEffect } from "react";

/**
 * The pull: each cell prints when it enters the viewport. Adds `pull-ready`
 * to <html> once JS is live (so nothing is hidden without it) and `is-in`
 * to every .cell the first time it is 15% visible. The CSS in globals.css
 * does the rest; reduced motion renders everything printed.
 */
export function Pull() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("pull-ready");
    const cells = Array.from(document.querySelectorAll<HTMLElement>(".cell"));
    if (!("IntersectionObserver" in window)) {
      cells.forEach((c) => c.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    cells.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);
  return null;
}
