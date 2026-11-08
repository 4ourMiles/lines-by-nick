import type { ReactNode } from "react";
import { Glyph, type GlyphName } from "./Glyph";
import { Cap } from "./Marks";
import { IsoScreens, IsoPhone, IsoStack, IsoCubes, IsoCards, IsoPencil, IsoWire, IsoPages, IsoCube } from "./Iso";

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
      <h3 className="title service__title">{s.title}</h3>
      <p className="service__text">{s.text}</p>
      <ul className="tags service__tags" aria-label={`${s.title} tools`}>
        {s.tags.map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Streams() {
  return (
    <>
      {ROWS.map((r, i) => (
        <div className="row row--2 span-2" key={r.code.title}>
          <ServiceCell s={r.code} side="code" n={`01.${i + 1}`} />
          <ServiceCell s={r.ink} side="ink" n={`02.${i + 1}`} />
        </div>
      ))}
    </>
  );
}
