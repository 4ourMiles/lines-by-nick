import { CONTACT_EMAIL, START_HREF } from "./contact";
import { REFUND_POLICY } from "./Legal";

export function Close() {
  return (
    <section id="contact" className="section close">
      <div className="container">
        <div className="slab slab--red slab--xl close__slab">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="close__mark"
            src="/brand/lbn-mark.svg"
            alt=""
            width={283}
            height={264}
            loading="lazy"
          />
          <h2 className="display">Drop us a line.</h2>
          <p className="close__lede">
            Tell us what you need building or drawing. We will come back with
            questions, then a plan.
          </p>
          <div className="close__actions">
            <a href={START_HREF} className="btn">
              Start a project
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="close__email">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer pattern">
      <div className="container footer__grid">
        <a href="/" className="footer__brand" aria-label="LBN Design, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/lbn-mark.svg" alt="" width={56} height={52} />
          <span>
            LBN Design
            <small>Lines by Nick</small>
          </span>
        </a>
        <ul className="footer__links">
          <li><a href="/start-a-project">Start a project</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <p className="footer__legal">
          {REFUND_POLICY}
          <br />© {year} LBN Design. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
