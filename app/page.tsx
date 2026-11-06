/*
DIRECTION CONTRACT — lbn.design home page

THESIS: LbN is Lines by Nick. The studio writes lines of code and draws lines
of ink, and the page is built like the mark: one heavy navy line outlines
everything, then flat color fills it. Refused: the agency default of a hero
photo, three icon cards and a logo wall.

OWN-WORLD: Cyan hero field, white and navy slabs, red for the single action
and the scribble, 3px navy outline everywhere, 1px-stepped diagonal navy
extrusion at 4/8/14/24px, Rubik 900 display with tight tracking, one
outlined display line, rounded-rectangle geometry, zero blur.

STORY: A business owner reads "Lines of code. Lines of ink. Lines by Nick.",
sees the mark sit there as a solid object with the services stuck to it,
reads the marquee for the tone, and starts a project or makes contact. The
home page is the hero; the services, comparison and process sections are
parked in components/ until there is proof to put under them.

FIRST VIEWPORT: Sticky white nav slab. Full-bleed cyan hero: three-line display title with a red drawn underline, lede, red "Start a
project" plus white "See what we do"; the mark at monumental scale on a
white stage right, tilting with the pointer,
stickers naming the stack floating around it.

FORM: Stacked slabs, candidate 3 of 7 on the ordered list (seed key bed63cfc).
Staging: own grounded composition; the route selector borrows "trace a route"
lighting from the stacked-commons challenger.
*/

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Legal } from "@/components/Legal";

const TICKER = [
  "Web apps that load before your coffee",
  "Mobile apps people keep on the home screen",
  "Brands with a backbone",
  "Logos that still work at 16 pixels",
  "Salesforce your team actually opens",
  "Illustrations with a pulse",
  "AI + MCP wired into the tools you already use",
  "Microsoft stack, minus the groan",
  "A CMS you can edit without calling us",
  "SEO that reads like a human wrote it",
  "Lines by Nick",
];

function Ticker() {
  const group = (hidden: boolean) => (
    <div className="ticker__group" aria-hidden={hidden || undefined}>
      {TICKER.map((t, i) => (
        <span key={t} className="ticker__pair">
          <i className={`ticker__dot${i % 3 === 1 ? " ticker__dot--red" : ""}`} />
          {t}
        </span>
      ))}
    </div>
  );
  return (
    <div className="ticker" role="marquee" aria-label="What we do">
      <div className="ticker__track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="home">
        <Hero />
        <Ticker />
      </main>
      <Legal className="legal--home" />
    </>
  );
}
