import { Glyph } from "./Glyph";
import { RegMark, Cap } from "./Marks";
import { Legal } from "./Legal";
import { CONTACT_EMAIL, START_HREF, CONTACT_PAGE_HREF } from "./contact";

/** The close: a bone cell with the invitation and both actions. */
export function Close() {
  return (
    <section className="cell close span-2" id="drop-a-line">
      <RegMark />
      <Cap>04 / Drop us a line</Cap>
      <div className="close__copy">
        <h2 className="display display--sm close__head">Drop us a line.</h2>
        <p className="lede">
          Tell us what you are building or what needs drawing. We reply within two working
          days with questions, then a plan and a price.
        </p>
        <div className="close__actions">
          <a href={START_HREF} className="btn btn--primary">
            Start a project
          </a>
        </div>
        <p className="close__alt">
          Prefer email? <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
      <div className="close__glyphs" aria-hidden="true">
        <Glyph name="at" scale={1} rot={-8} className="close__g close__g--1" />
        <Glyph name="up-chevron" scale={1} rot={6} className="close__g close__g--2" />
        <Glyph name="root" scale={0.9} rot={4} className="close__g close__g--3" />
      </div>
    </section>
  );
}

/** Footer: the ink cell at the foot of the sheet. */
export function Footer() {
  return (
    <footer className="cell cell--ink footer span-2">
      <div className="footer__grid">
        <a className="footer__brand" href="/" aria-label="Lines by Nick, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ink/logo-primary.svg" alt="" width={200} height={44} className="glyph--bone" />
        </a>
        <nav className="footer__links" aria-label="Footer">
          <a href={START_HREF}>Start a project</a>
          <a href={CONTACT_PAGE_HREF}>Contact</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </nav>
      </div>
      <Legal className="legal--footer" />
    </footer>
  );
}
