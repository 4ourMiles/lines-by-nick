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

    // the two lead drawings: the color pass drifts under a mouse pointer
    const arts = Array.from(document.querySelectorAll<HTMLElement>(".stream__art"));
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const my = ((e.clientY - r.top) / r.height) * 2 - 1;
      el.style.setProperty("--mx", mx.toFixed(3));
      el.style.setProperty("--my", my.toFixed(3));
    };
    const onLeave = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };
    arts.forEach((a) => {
      a.addEventListener("pointermove", onMove);
      a.addEventListener("pointerleave", onLeave);
    });

    return () => {
      io.disconnect();
      arts.forEach((a) => {
        a.removeEventListener("pointermove", onMove);
        a.removeEventListener("pointerleave", onLeave);
      });
    };
  }, []);
  return null;
}
