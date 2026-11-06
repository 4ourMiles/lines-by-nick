import { DrawnLine } from "./DrawnLine";

export function OneRoof() {
  return (
    <section id="one-roof" className="section roof">
      <div className="container">
        <h2 className="headline roof__head">
          Elsewhere it takes two shops.
          <br />
          Here it is one line.
        </h2>
        <p className="lede roof__lede">
          Most businesses hire a designer, then a developer, then spend weeks
          translating between them. At LBN the hand drawing the screen is the
          hand building it, so what you approve is what ships.
        </p>

        <div className="roof__grid">
          <div className="slab roof__panel roof__panel--else">
            <span className="tag">Elsewhere</span>
            <div className="diagram diagram--three">
              <span className="node slab slab--xs">You</span>
              <DrawnLine dashed />
              <span className="node slab slab--xs">Design agency</span>
              <DrawnLine dashed />
              <span className="node slab slab--xs">Dev shop</span>
            </div>
            <ul className="roof__points">
              <li>Two contracts, two timelines, two invoices.</li>
              <li>Hand-off files that lose detail on the way.</li>
              <li>You become the project manager.</li>
            </ul>
          </div>

          <div className="slab slab--cyan roof__panel roof__panel--lbn">
            <span className="tag">At LBN</span>
            <div className="diagram diagram--two">
              <span className="node slab slab--xs">You</span>
              <DrawnLine />
              <span className="node slab slab--xs slab--navy">LBN Design</span>
            </div>
            <ul className="roof__points">
              <li>One team covers code, Salesforce, UI and brand.</li>
              <li>Design decisions are made with the build in mind.</li>
              <li>One conversation from first call to launch.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
