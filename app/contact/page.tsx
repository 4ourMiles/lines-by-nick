import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Close";
import { PageHero } from "@/components/PageHero";
import { BriefForm } from "@/components/BriefForm";
import { CONTACT_EMAIL, START_HREF } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact — LBN Design",
  description: "Drop LBN Design a line about code, Salesforce, UI/UX or brand work.",
};

export default function Contact() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          kicker="Contact"
          title="Drop us a"
          accent="line."
          lede="Questions, a quick idea, or a project you are not sure how to scope yet. Email works, or use the form and we will come back to you."
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
          art={
            <div className="slab slab--xl art art--mail" aria-hidden="true">
              <span className="tag tag--red art__tag">New message</span>
              <div className="art__env">
                <span className="art__flap" />
              </div>
              <b className="blk blk--navy blk--tall" style={{ width: "54%" }} />
              <span className="blk blk--line" style={{ width: "80%" }} />
              <span className="blk blk--line" style={{ width: "66%" }} />
            </div>
          }
        />

        <section className="section inner">
          <div className="container inner__grid">
            <div className="inner__aside">
              <h2 className="headline">Or write it here.</h2>
              <p className="lede">
                Short is fine. Tell us who you are and what you are after, and
                we will reply by email.
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
                  <span>JavaScript, Salesforce, UI/UX, brand and graphic design</span>
                </li>
              </ul>
            </div>
            <BriefForm variant="contact" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
