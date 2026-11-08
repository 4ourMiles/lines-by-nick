"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { START_HREF, CONTACT_PAGE_HREF } from "./contact";

const LINKS = [
  { href: "/#code", label: "What we do" },
  { href: "/#process", label: "How it works" },
  { href: CONTACT_PAGE_HREF, label: "Contact" },
];

/** The sheet's top rule: handwritten logo, text links, one coral action. */
export function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="cell cell--tight nav span-2">
      <a className="nav__brand" href="/" aria-label="Lines by Nick, home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/ink/logo-primary.svg" alt="" width={172} height={38} />
      </a>
      <button
        type="button"
        className="btn nav__menu"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="site-menu" className="nav__links" data-open={open || undefined} aria-label="Site">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            aria-current={l.href === path ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a href={START_HREF} className="btn btn--primary nav__cta" onClick={() => setOpen(false)}>
          Start a project
        </a>
      </nav>
    </header>
  );
}
