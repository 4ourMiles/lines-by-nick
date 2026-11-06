"use client";

import { useEffect, useState } from "react";
import { START_HREF } from "./contact";

const LINKS = [{ href: "/contact", label: "Contact" }];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="nav-wrap">
      <nav className="nav slab slab--sm" aria-label="Primary">
        <a href="/" className="nav__brand" aria-label="lbn.design, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/lbn-mark.svg" alt="" width={40} height={38} />
          <span className="nav__wordmark">lbn.design</span>
        </a>

        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href={START_HREF} className="btn btn--primary nav__cta">
          Start a project
        </a>

        <button
          type="button"
          className="btn nav__menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className="nav__sheet slab slab--cyan"
        hidden={!open}
      >
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={START_HREF}
          className="btn btn--primary"
          onClick={() => setOpen(false)}
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
