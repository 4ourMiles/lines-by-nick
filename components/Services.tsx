"use client";

import { useState } from "react";
import {
  VisualBrand,
  VisualJavaScript,
  VisualSalesforce,
  VisualUX,
} from "./ServiceVisuals";

type ServiceId = "js" | "salesforce" | "ux" | "brand";
type RouteId = "website" | "app" | "salesforce" | "brand";

const ROUTES: { id: RouteId; label: string; touches: ServiceId[] }[] = [
  { id: "website", label: "a website", touches: ["js", "ux"] },
  { id: "app", label: "a mobile app", touches: ["js", "ux"] },
  { id: "salesforce", label: "Salesforce help", touches: ["salesforce", "ux"] },
  { id: "brand", label: "a brand or logo", touches: ["brand", "ux"] },
];

const SERVICES: {
  id: ServiceId;
  tone: "white" | "cyan" | "navy";
  line: string;
  name: string;
  plain: string;
  includes: string[];
  visual: React.ReactNode;
  sample: string;
}[] = [
  {
    id: "js",
    tone: "white",
    line: "Lines of code.",
    name: "JavaScript development",
    plain:
      "Websites, web apps and mobile apps, built in React, React Native and Next.js. Fast to load, easy to grow, and yours to keep.",
    includes: ["React", "React Native", "Next.js", "TypeScript", "APIs"],
    visual: <VisualJavaScript />,
    sample: "Sample interface",
  },
  {
    id: "salesforce",
    tone: "cyan",
    line: "Lines of business.",
    name: "Salesforce solutions",
    plain:
      "Set up, clean up or extend Salesforce so your team actually uses it. Custom objects, flows, integrations and the dashboards to run the business from.",
    includes: ["Setup", "Flows", "Integrations", "Dashboards", "Lightning"],
    visual: <VisualSalesforce />,
    sample: "Sample pipeline",
  },
  {
    id: "ux",
    tone: "white",
    line: "Lines of sight.",
    name: "UI / UX design",
    plain:
      "Screens people can use without a manual. We map the flow, draw it rough, test it, then finish every state before a line of code is written.",
    includes: ["User flows", "Wireframes", "Prototypes", "Design systems"],
    visual: <VisualUX />,
    sample: "Wireframe to final",
  },
  {
    id: "brand",
    tone: "navy",
    line: "Lines of ink.",
    name: "Graphic design",
    plain:
      "Branding, logo creation and custom graphic art. A mark that works at 16 pixels and on the side of a van, with the files and rules to keep it consistent.",
    includes: ["Branding", "Logos", "Custom art", "Print", "Social"],
    visual: <VisualBrand />,
    sample: "Our own identity, built in-house",
  },
];

export function Services() {
  const [route, setRoute] = useState<RouteId | null>(null);
  const lit = new Set<ServiceId>(
    route ? ROUTES.find((r) => r.id === route)?.touches ?? [] : [],
  );

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services__head">
          <h2 className="headline">Four kinds of line.</h2>
          <div className="route" role="group" aria-labelledby="route-label">
            <span id="route-label" className="route__label">
              I need
            </span>
            {ROUTES.map((r) => {
              const active = route === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  className={`tag route__toggle${active ? " tag--cyan" : ""}`}
                  aria-pressed={active}
                  onClick={() => setRoute(active ? null : r.id)}
                >
                  {r.label}
                </button>
              );
            })}
            <p className="route__hint muted" aria-live="polite">
              {route
                ? `Lit below: what ${ROUTES.find((r) => r.id === route)?.label} touches.`
                : "Pick one and we light up the parts of the studio it touches."}
            </p>
          </div>
        </div>

        <ol className="stack">
          {SERVICES.map((s, i) => {
            const on = lit.has(s.id);
            return (
              <li
                key={s.id}
                className={`stack__item`}
                style={{ "--i": i } as React.CSSProperties}
              >
                <article
                  className={`slab service${s.tone !== "white" ? ` slab--${s.tone}` : ""}${on ? " service--lit" : ""}`}
                  aria-labelledby={`svc-${s.id}`}
                >
                  {on && (
                    <span className="tag tag--cyan service__lit">On your route</span>
                  )}
                  <div className="service__copy">
                    <h3 id={`svc-${s.id}`} className="headline service__line">
                      {s.line}
                    </h3>
                    <p className="title service__name">{s.name}</p>
                    <p className="service__plain">{s.plain}</p>
                    <ul className="service__includes" aria-label="Includes">
                      {s.includes.map((x) => (
                        <li key={x} className="tag">
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service__visual">
                    {s.visual}
                    <span className="service__sample muted">{s.sample}</span>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
