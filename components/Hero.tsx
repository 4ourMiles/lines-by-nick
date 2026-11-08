import { Glyph } from "./Glyph";
import { RegMark, Cap } from "./Marks";
import { START_HREF, CONTACT_EMAIL } from "./contact";

/**
 * Hero: the headline cell across the seam. One action, with the
 * reassurance a first-timer needs before clicking it.
 */
export function Hero() {
  return (
    <>
      <section className="cell hero span-2" id="top">
        <RegMark />
        <Cap>00 / Lines</Cap>
        <div className="hero__copy">
          <h1 className="display hero__title">
            <span className="hero__line">Lines of code. </span>
            <span className="hero__line">Lines of ink. </span>
            <span className="hero__line">
              <span className="block block--coral hero__accent">Lines by Nick.</span>
            </span>
          </h1>
          <p className="lede hero__lede">
            One studio that writes the software and draws the brand, so nothing gets lost
            between the two.
          </p>
          <div className="hero__actions">
            <a href={START_HREF} className="btn btn--primary">
              Start a project
            </a>
          </div>
          <p className="hero__note">
            A few lines is enough. You get a plan and a price within a few days, no
            commitment. Or email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </div>
        <div className="hero__glyphs" aria-hidden="true">
          <Glyph name="left-curl-bracket" scale={1.1} rot={-4} className="hero__g hero__g--1" />
          <Glyph name="semi-colon" scale={1.1} rot={8} className="hero__g hero__g--2" />
          <Glyph name="star" scale={1.1} rot={-10} className="hero__g hero__g--3" />
          <Glyph name="equals" scale={1.1} rot={6} className="hero__g hero__g--4" />
          <Glyph name="right-curley-bracket" scale={1.1} rot={5} className="hero__g hero__g--5" />
          <Glyph name="plus" scale={1.1} rot={-6} className="hero__g hero__g--6" />
        </div>
      </section>

    </>
  );
}
