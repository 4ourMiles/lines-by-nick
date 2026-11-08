"use client";

import { useEffect } from "react";

/**
 * The pull: each cell prints when it enters the viewport. The inline script
 * in app/layout.tsx arms `pull-ready` on <html> before first paint (so the
 * page never prints and then un-prints); this adds `is-in` to every .cell
 * the first time it is 15% visible. Without JS nothing is ever hidden.
 */
export function Pull() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("pull-ready")) return;
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
