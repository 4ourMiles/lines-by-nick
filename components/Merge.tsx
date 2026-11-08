import { Glyph } from "./Glyph";
import { RegMark, Cap } from "./Marks";

const STEPS: [string, string, string][] = [
  ["You send the brief", "A few lines about what you need. Rough is fine, we will ask the rest.", "bracket-left"],
  ["You get a plan", "Scope, price and timeline in writing, usually within a few days, before anything starts.", "equals"],
  ["We build and draw", "Design and code move together. You see work weekly and own everything at the end.", "rocket"],
];

/**
 * Where the streams merge: one mint measure with the <n> mark, then the
 * process as a yellow three-cell strip.
 */
export function Merge() {
  return (
    <>
      <section className="cell cell--mint merge span-2" id="studio">
        <RegMark />
        <Cap>03 / One line</Cap>
        <div className="merge__grid">
          <div className="merge__mark" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ink/logo-mark.svg" alt="" width={260} height={82} />
          </div>
          <div className="cell__head">
            <h2 className="headline">One line, start to finish.</h2>
            <p className="lede">
              The person who draws your brand is the person who builds your product. No
              hand-off, no translation, no two invoices.
            </p>
            <ul className="tags" aria-label="How we work">
              <li className="tag">Design + build</li>
              <li className="tag">One point of contact</li>
              <li className="tag">Price in writing</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="row row--3 span-2" id="process">
        {STEPS.map(([h, t, g], i) => (
          <section className="cell cell--yellow step" key={h}>
            <Cap>Step {i + 1}</Cap>
            <div className="step__glyph" aria-hidden="true">
              <Glyph name={g as "bracket-left"} w={i === 0 ? 36 : i === 1 ? 64 : 120} rot={i === 1 ? 6 : -5} />
            </div>
            <h3 className="title">{h}</h3>
            <p>{t}</p>
          </section>
        ))}
      </div>
    </>
  );
}
