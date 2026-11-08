import { Glyph } from "./Glyph";
import { RegMark, Cap } from "./Marks";
import { IsoScreens, IsoPaint } from "./Iso";
import { START_HREF, CONTACT_PAGE_HREF } from "./contact";

/**
 * Hero: the headline cell across the seam, then the two streams start,
 * a cobalt code cell and a coral ink cell sharing one rule.
 */
export function Hero() {
  return (
    <>
      <section className="cell hero span-2" id="top">
        <RegMark />
        <Cap>00 / Lines</Cap>
        <div className="hero__copy">
          <h1 className="display hero__title">
            <span className="hero__line">Lines of code.</span>
            <span className="hero__line">Lines of ink.</span>
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
            <a href={CONTACT_PAGE_HREF} className="btn">
              Contact
            </a>
          </div>
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

      <section className="cell cell--cobalt stream" id="code">
        <RegMark />
        <Cap>01 / Code</Cap>
        <div className="stream__art">
          <Glyph name="left-angle" scale={0.7} rot={-8} className="stream__g" />
          <IsoScreens order={1} onField />
          <Glyph name="right-angle" scale={0.7} rot={6} className="stream__g" />
        </div>
        <h2 className="headline stream__head">Lines of code.</h2>
        <p className="lede stream__lede">
          Web apps, mobile apps, Salesforce, Microsoft and AI, written to run your business and
          keep running.
        </p>
      </section>

      <section className="cell cell--coral stream" id="ink">
        <RegMark />
        <Cap>02 / Ink</Cap>
        <div className="stream__art">
          <Glyph name="ampersand" scale={0.7} rot={6} className="stream__g" />
          <IsoPaint order={0} />
          <Glyph name="at" scale={0.7} rot={-6} className="stream__g" />
        </div>
        <h2 className="headline stream__head">Lines of ink.</h2>
        <p className="lede stream__lede">
          Logos, brands, illustration and interfaces, drawn so people remember them.
        </p>
      </section>
    </>
  );
}
