import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Close";
import { PageHero } from "@/components/PageHero";
import { BriefForm } from "@/components/BriefForm";
import { CONTACT_EMAIL } from "@/components/contact";

export const metadata: Metadata = {
  title: "Start a project — LBN Design",
  description:
    "Tell LBN Design what you need building or drawing. A short brief is all it takes to get a plan and a price in writing.",
};

const STEPS = [
  ["You send the brief", "A few lines about what you need. Rough is fine."],
  ["We reply with questions", "Usually a short call to fill the gaps."],
  ["You get a plan", "Scope, price and timeline in writing before anything starts."],
];

export default function StartAProject() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          kicker="Start a project"
          title="Tell us what you're"
          accent="building."
          lede="A short brief is all it takes. We read every one, come back with questions, then send a plan with the price and timeline in writing."
          art={
            <div className="slab slab--xl art art--brief" aria-hidden="true">
              <span className="tag tag--cyan art__tag">Brief</span>
              <b className="blk blk--navy blk--tall" style={{ width: "62%" }} />
              <span className="blk blk--line" style={{ width: "88%" }} />
              <span className="blk blk--line" style={{ width: "76%" }} />
              <span className="blk blk--line" style={{ width: "82%" }} />
              <div className="art__chips">
                <span className="tag">A website</span>
                <span className="tag tag--cyan">A brand or logo</span>
              </div>
              <b className="blk blk--red art__send" />
            </div>
          }
        />

        <section className="section inner">
          <div className="container inner__grid">
            <div className="inner__aside">
              <h2 className="headline">What happens next.</h2>
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
              <p className="muted inner__alt">
                Prefer email? Write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </div>
            <BriefForm variant="brief" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
