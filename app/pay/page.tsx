import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Close";
import { PageHero } from "@/components/PageHero";
import { CropTicks, Cap } from "@/components/Marks";
import { Glyph } from "@/components/Glyph";
import { IsoPayCard } from "@/components/Iso";
import { CONTACT_EMAIL, STRIPE_LINK_READY, STRIPE_PAYMENT_LINK } from "@/components/contact";

/** Unlisted: not in the nav, not in robots, not indexed. Share the URL directly. */
export const metadata: Metadata = {
  title: "Pay an invoice — Lines by Nick",
  description: "Settle a Lines by Nick invoice securely through Stripe.",
  robots: { index: false, follow: false, nocache: true },
};

const STEPS = [
  ["Have your invoice number ready", "It is at the top of the PDF we sent you."],
  ["Pay on Stripe", "Card, Apple Pay or Google Pay. Enter the invoice number as the reference."],
  ["Get a receipt", "Stripe emails it instantly. We confirm by email the same day."],
];

export default function Pay() {
  return (
    <div className="sheet-wrap pull">
      <CropTicks />
      <div className="sheet">
        <Nav />
        <main id="main" className="span-2 sheet__main">
          <div className="row row--2">
            <PageHero
              kicker="Payments"
              title="Pay an"
              accent="invoice."
              lede="Card payments are handled by Stripe. You will be taken to a secure Stripe page; we never see your card details."
              tone="yellow"
              art={<IsoPayCard order={0} />}
            />
          </div>
          <div className="row row--aside">
            <section className="cell aside">
              <Cap>How it works</Cap>
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
                Bank transfer instead? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" "}
                and we will send details.
              </p>
              <div className="aside__glyph" aria-hidden="true">
                <Glyph name="currency" scale={0.8} rot={-6} />
              </div>
            </section>
            <section className="cell cell--mint">
              <Cap>Secure checkout</Cap>
              <div className="pay">
                <h2 className="headline pay__head">Pay securely.</h2>
                <p className="pay__text">
                  You will leave this site for a Stripe checkout page. The amount is set from
                  your invoice.
                </p>
                {STRIPE_LINK_READY ? (
                  <a href={STRIPE_PAYMENT_LINK} className="btn btn--primary pay__btn" rel="noopener">
                    Pay with Stripe
                  </a>
                ) : (
                  <>
                    <span className="btn btn--primary pay__btn" aria-disabled="true">
                      Pay with Stripe
                    </span>
                    <p className="pay__setup muted">
                      Payment link not set yet. Add your Stripe Payment Link in
                      components/contact.ts to switch this on.
                    </p>
                  </>
                )}
                <ul className="pay__trust" aria-label="Payment details">
                  <li>Card, Apple Pay, Google Pay</li>
                  <li>Receipt emailed by Stripe</li>
                  <li>No card details stored by LBN</li>
                </ul>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
