"use client";

import { useRef } from "react";
import { CONTACT_PAGE_HREF, START_HREF } from "./contact";
import { Mark } from "./Mark";

const STICKERS: {
  text: string;
  tone?: "cyan" | "red" | "navy";
  style: React.CSSProperties;
}[] = [
  { text: "Web apps", style: { top: "-6%", left: "6%", "--z": "84px" } as React.CSSProperties },
  { text: "Mobile apps", tone: "navy", style: { top: "9%", right: "-9%", "--z": "90px" } as React.CSSProperties },
  { text: "Brand + logo", tone: "red", style: { top: "46%", left: "-13%", "--z": "110px" } as React.CSSProperties },
  { text: "Salesforce", tone: "cyan", style: { bottom: "16%", right: "-10%", "--z": "96px" } as React.CSSProperties },
  { text: "AI + MCP", style: { bottom: "-8%", left: "26%", "--z": "80px" } as React.CSSProperties },
  { text: "SEO", tone: "navy", style: { top: "17%", left: "-7%", "--z": "120px" } as React.CSSProperties },
];

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const stage = stageRef.current;
    if (!stage) return;
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      stage.style.setProperty("--rx", `${(-y * 14).toFixed(2)}deg`);
      stage.style.setProperty("--ry", `${(x * 18).toFixed(2)}deg`);
    });
  };

  const onLeave = () => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty("--rx", "0deg");
    stage.style.setProperty("--ry", "0deg");
  };

  return (
    <section
      id="top"
      className="hero hero-world"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 className="display hero__title">
            <span className="hero__line hero__line--1">Lines of code.</span>
            <span className="hero__line hero__line--2">Lines of ink.</span>
            <span className="hero__line hero__line--3">
              <span className="scribble">
                Lines by Nick.
                <svg
                  className="scribble__stroke"
                  viewBox="0 0 400 24"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    pathLength={1}
                    d="M4 16 C 80 4, 150 22, 230 10 S 360 6, 396 14"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="hero__lede">
            Software that ships. Brands that stick. One studio for both, so
            there is no hand-off between the people who design it and the
            people who build it.
          </p>

          <div className="hero__actions">
            <a href={START_HREF} className="btn btn--primary">
              Start a project
            </a>
            <a href={CONTACT_PAGE_HREF} className="btn">
              Contact
            </a>
          </div>
        </div>

        <div className="hero__stage-wrap">
          <div ref={stageRef} className="hero__stage slab slab--xl">
            <Mark className="hero__mark" layered />
            {STICKERS.map((s) => (
              <span
                key={s.text}
                className={`tag hero__sticker${s.tone ? ` tag--${s.tone}` : ""}`}
                style={s.style}
                aria-hidden="true"
              >
                {s.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
