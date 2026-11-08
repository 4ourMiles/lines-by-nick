import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Close";
import { PageHero } from "@/components/PageHero";
import { BriefForm } from "@/components/BriefForm";
import { CropTicks, Cap } from "@/components/Marks";
import { Glyph } from "@/components/Glyph";
import { IsoBrief } from "@/components/Iso";
import { CONTACT_EMAIL } from "@/components/contact";

export const metadata: Metadata = {
  title: "Start a project — Lines by Nick",
  description:
    "Tell Lines by Nick what you need building or drawing. A short brief is all it takes to get a plan and a price in writing.",
};

const STEPS = [
  ["You send the brief", "A few lines about what you need. Rough is fine."],
  ["We reply with questions", "Usually a short call to fill the gaps."],
  ["You get a plan", "Scope, price and timeline in writing before anything starts."],
];

export default function StartAProject() {
  return (
    <div className="sheet-wrap pull">
      <CropTicks />
      <div className="sheet">
        <Nav />
        <main className="span-2 sheet__main">
          <div className="row row--2">
            <PageHero
              kicker="Start a project"
              title={"Tell us what\u00a0you're"}
              accent="building."
              lede="A short brief is all it takes. We read every one, come back with questions, then send a plan with the price and timeline in writing."
              tone="cobalt"
              art={<IsoBrief order={0} />}
            />
          </div>
          <div className="row row--aside">
            <section className="cell aside">
              <Cap>What happens next</Cap>
              <h2 className="headline">Three short steps.</h2>
              <ol className="mini-steps">
                {STEPS.map(([h, t], i) => (
                  <li key={h}>
                    <span className="step__n" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="title">{h}</h3>
                      <p className="muted">{t}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="muted">
                Prefer email? Write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
              <div className="aside__glyph" aria-hidden="true">
                <Glyph name="semi-colon" scale={0.8} rot={-6} />
              </div>
            </section>
            <section className="cell cell--mint">
              <Cap>The brief</Cap>
              <BriefForm variant="brief" />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
