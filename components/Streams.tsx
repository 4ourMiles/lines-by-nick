import type { ReactNode } from "react";
import { Glyph, type GlyphName } from "./Glyph";
import { Cap, RegMark } from "./Marks";
import { IsoScreens, IsoPaint, IsoPhone, IsoStack, IsoCubes, IsoCards, IsoPencil, IsoWire, IsoPages, IsoCube } from "./Iso";

type Service = {
  title: string;
  text: string;
  tags: string[];
  art: ReactNode;
  /** the cell commits to one color, or stays bone */
  tone?: "cobalt" | "coral" | "yellow" | "mint";
  /** the fold across the seam: the ink stream lends the code side a
   *  handwritten glyph; the code stream lends the ink side a cobalt cube */
  fold?: GlyphName | "cube";
};

/**
 * The two streams run down the seam, one service per cell. By the third row
 * each side carries a mark from the other (a handwritten glyph on the ink
 * side, a coral/yellow object inside a code drawing) before the page merges.
 */
const ROWS: { code: Service; ink: Service }[] = [
  {
    code: {
      title: "Web apps",
      text: "Customer portals, dashboards, booking and ordering, the software your business actually runs on.",
      tags: ["React", "Next.js", "TypeScript"],
      art: <IsoScreens order={2} />,
    },
    ink: {
      title: "Brand + logo",
      text: "A mark, a palette and a voice that hold up on a shopfront, a van and a phone screen.",
      tags: ["Identity", "Logo", "Guidelines"],
      art: <IsoCards order={2} />,
    },
  },
  {
    code: {
      title: "Mobile apps",
      text: "One codebase for iPhone and Android, built to feel native and shipped to both stores.",
      tags: ["React Native", "iOS", "Android"],
      art: <IsoPhone order={3} />,
      tone: "yellow",
    },
    ink: {
      title: "Illustration",
      text: "Custom drawings for packaging, campaigns, onboarding and the odd mural.",
      tags: ["Editorial", "Product", "Murals"],
      art: <IsoPencil order={3} />,
    },
  },
  {
    code: {
      title: "Salesforce + Microsoft",
      text: "Clean data, sane automations and integrations that stop people re-typing things.",
      tags: ["Salesforce", "Microsoft 365", "Integrations"],
      art: <IsoStack order={4} />,
      fold: "ampersand",
    },
    ink: {
      title: "UI / UX",
      text: "Interfaces designed by the people who will build them, so the design is the spec.",
      tags: ["Product design", "Prototypes", "Design systems"],
      art: <IsoWire order={4} />,
      tone: "mint",
      fold: "cube",
    },
  },
  {
    code: {
      title: "AI + MCP",
      text: "Assistants wired into the tools you already use, with the guardrails to trust them.",
      tags: ["Agents", "MCP servers", "Automation"],
      art: <IsoCubes order={5} />,
      fold: "star",
    },
    ink: {
      title: "CMS + SEO",
      text: "Words you can edit yourself, on pages built so people and search engines find them.",
      tags: ["Headless CMS", "Content", "Technical SEO"],
      art: <IsoPages order={5} />,
      tone: "coral",
      fold: "cube",
    },
  },
];

function ServiceCell({ s, side, n }: { s: Service; side: "code" | "ink"; n: string }) {
  return (
    <section className={`cell service service--${side}${s.tone ? ` cell--${s.tone}` : ""}`}>
      <Cap>{n}</Cap>
      <div className="service__art">{s.art}</div>
      {s.fold && (
        <div className="service__fold" aria-hidden="true">
          {s.fold === "cube" ? <IsoCube order={6} /> : <Glyph name={s.fold} scale={0.5} rot={-8} />}
        </div>
      )}
      <h3 className="title title--lg service__title">{s.title}</h3>
      <p className="service__text">{s.text}</p>
      <p className="label service__stack">{s.tags.join(" · ")}</p>
    </section>
  );
}

function StreamIntro({ side }: { side: "code" | "ink" }) {
  const code = side === "code";
  return (
    <section className={`cell stream stream--${side} ${code ? "cell--cobalt" : "cell--coral"}`} id={side}>
      <RegMark />
      <Cap>{code ? "01 / Code" : "02 / Ink"}</Cap>
      <div className="stream__art">
        <Glyph name={code ? "left-angle" : "ampersand"} scale={0.7} rot={code ? -8 : 6} className="stream__g" />
        {code ? <IsoScreens order={1} onField /> : <IsoPaint order={0} />}
        <Glyph name={code ? "right-angle" : "at"} scale={0.7} rot={code ? 6 : -6} className="stream__g" />
      </div>
      <h2 className="headline stream__head">{code ? "What we build." : "What we draw."}</h2>
      <p className="lede stream__lede">
        {code
          ? "Software your business runs on, written to keep running after launch."
          : "The marks, pictures and interfaces people remember you by."}
      </p>
    </section>
  );
}

/**
 * Desktop: two columns down one seam, each led by its stream cell, rows
 * paired. Phone: the whole code stream, then the whole ink stream, each
 * under its own header, so the two-stream idea survives the stack.
 */
export function Streams() {
  return (
    <div className="streams span-2">
      <StreamIntro side="code" />
      {ROWS.map((r, i) => (
        <ServiceCell key={r.code.title} s={r.code} side="code" n={`Code ${i + 1} / 4`} />
      ))}
      <StreamIntro side="ink" />
      {ROWS.map((r, i) => (
        <ServiceCell key={r.ink.title} s={r.ink} side="ink" n={`Ink ${i + 1} / 4`} />
      ))}
    </div>
  );
}
