import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Close";
import { PageHero } from "@/components/PageHero";
import { CONTACT_EMAIL, STRIPE_LINK_READY, STRIPE_PAYMENT_LINK } from "@/components/contact";

/** Unlisted: not in the nav, not in robots, not indexed. Share the URL directly. */
export const metadata: Metadata = {
  title: "Pay an invoice — LBN Design",
  description: "Settle an LBN Design invoice securely through Stripe.",
  robots: { index: false, follow: false, nocache: true },
};

export default function Pay() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          kicker="Payments"
          title="Pay an"
          accent="invoice."
          lede="Card payments are handled by Stripe. You will be taken to a secure Stripe page; we never see your card details."
          art={
            <div className="slab slab--xl art art--card" aria-hidden="true">
              <div className="art__cardface slab slab--sm slab--navy">
                <span className="art__chip" />
                <b className="art__num">•••• •••• •••• 4242</b>
                <span className="art__cardrow">
                  <i>LBN DESIGN</i>
                  <i>12/28</i>
                </span>
              </div>
              <span className="tag tag--cyan art__tag">Secured by Stripe</span>
            </div>
          }
        />

        <section className="section inner">
          <div className="container inner__grid">
            <div className="inner__aside">
              <h2 className="headline">How it works.</h2>
              <ol className="mini-steps">
                <li>
                  <span className="step__n" aria-hidden="true">1</span>
                  <div>
                    <h3 className="title">Have your invoice number ready</h3>
                    <p className="muted">It is at the top of the PDF we sent you.</p>
                  </div>
                </li>
                <li>
                  <span className="step__n" aria-hidden="true">2</span>
                  <div>
                    <h3 className="title">Pay on Stripe</h3>
                    <p className="muted">Card, Apple Pay or Google Pay. Enter the invoice number as the reference.</p>
                  </div>
                </li>
                <li>
                  <span className="step__n" aria-hidden="true">3</span>
                  <div>
                    <h3 className="title">Get a receipt</h3>
                    <p className="muted">Stripe emails it instantly. We confirm by email the same day.</p>
                  </div>
                </li>
              </ol>
              <p className="muted inner__alt">
                Bank transfer instead? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will send details.
              </p>
            </div>

            <div className="slab pay">
              <h2 className="headline pay__head">Pay securely.</h2>
              <p className="pay__text">
                You will leave this site for a Stripe checkout page. The amount
                is set from your invoice.
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
