import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Close";
import { PageHero } from "@/components/PageHero";
import { BriefForm } from "@/components/BriefForm";
import { CropTicks, Cap } from "@/components/Marks";
import { Glyph } from "@/components/Glyph";
import { IsoEnvelope } from "@/components/Iso";
import { CONTACT_EMAIL, START_HREF } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact — Lines by Nick",
  description: "Drop Lines by Nick a line about code, Salesforce, UI/UX, brand or illustration work.",
};

export default function Contact() {
  return (
    <div className="sheet-wrap pull">
      <CropTicks />
      <div className="sheet">
        <Nav />
        <main id="main" className="span-2 sheet__main">
          <div className="row row--2">
            <PageHero
              kicker="Contact"
              title={"Drop\u00a0us\u00a0a"}
              accent="line."
              lede="Questions, a quick idea, or a project you are not sure how to scope yet. Email works, or use the form and we will come back to you."
              tone="coral"
              art={<IsoEnvelope order={0} />}
              actions={
                <>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn--primary">
                    {CONTACT_EMAIL}
                  </a>
                  <a href={START_HREF} className="btn">
                    Start a project
                  </a>
                </>
              }
            />
          </div>
          <div className="row row--aside">
            <section className="cell aside">
              <Cap>Or write it here</Cap>
              <h2 className="headline">Short is fine.</h2>
              <p className="lede">
                Tell us who you are and what you are after, and we will reply by email.
              </p>
              <ul className="facts">
                <li>
                  <span className="label">Email</span>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
                <li>
                  <span className="label">Replies</span>
                  <span>By email, within a couple of working days</span>
                </li>
                <li>
                  <span className="label">Work</span>
                  <span>Web and mobile apps, Salesforce, AI, UI/UX, brand and illustration</span>
                </li>
              </ul>
              <div className="aside__glyph" aria-hidden="true">
                <Glyph name="at" scale={0.8} rot={-6} />
              </div>
            </section>
            <section className="cell cell--mint">
              <Cap>Message</Cap>
              <BriefForm variant="contact" />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
