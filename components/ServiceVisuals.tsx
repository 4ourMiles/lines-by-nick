/* Authored demonstration visuals built from the slab vocabulary.
   They are synthetic samples (labelled in the UI), not client work,
   except VisualBrand which shows the studio's real mark. */

export function VisualJavaScript() {
  return (
    <div className="viz viz--js" aria-hidden="true">
      <div className="browser slab slab--sm">
        <div className="browser__bar">
          <i />
          <i />
          <i />
          <span className="browser__url">bikeshop.example</span>
        </div>
        <div className="browser__body">
          <div className="browser__nav">
            <b className="blk blk--navy" style={{ width: 54 }} />
            <span className="blk blk--line" style={{ width: 40 }} />
            <span className="blk blk--line" style={{ width: 48 }} />
            <span className="blk blk--line" style={{ width: 36 }} />
            <b className="blk blk--red" style={{ width: 62, marginLeft: "auto" }} />
          </div>
          <div className="browser__hero">
            <div>
              <b className="blk blk--navy blk--tall" style={{ width: "86%" }} />
              <b className="blk blk--navy blk--tall" style={{ width: "62%" }} />
              <span className="blk blk--line" style={{ width: "78%" }} />
              <span className="blk blk--line" style={{ width: "70%" }} />
              <b className="blk blk--red" style={{ width: 92, marginTop: 10 }} />
            </div>
            <div className="browser__art slab slab--xs slab--cyan" />
          </div>
          <div className="browser__cards">
            <span className="slab slab--xs" />
            <span className="slab slab--xs" />
            <span className="slab slab--xs" />
          </div>
        </div>
      </div>
      <div className="phone slab slab--sm">
        <div className="phone__notch" />
        <div className="phone__screen">
          <b className="blk blk--navy blk--tall" style={{ width: "70%" }} />
          <div className="phone__row slab slab--xs">
            <i className="blk blk--cyan" />
            <span />
          </div>
          <div className="phone__row slab slab--xs">
            <i className="blk blk--red" />
            <span />
          </div>
          <div className="phone__row slab slab--xs">
            <i className="blk blk--navy" />
            <span />
          </div>
          <b className="blk blk--red phone__cta" />
        </div>
      </div>
    </div>
  );
}

const COLS = [
  { name: "Lead", cards: ["Northside Dental", "Harbor Lane Supply", "Mint Bakery"] },
  { name: "Proposal", cards: ["Alder & Oak", "Coastline Gym"] },
  { name: "Closed won", cards: ["Pine St. Vet"] },
];

export function VisualSalesforce() {
  return (
    <div className="viz viz--sf" aria-hidden="true">
      <div className="board slab slab--sm">
        <div className="board__head">
          <span className="label">Pipeline</span>
          <span className="tag tag--navy">This quarter</span>
        </div>
        <div className="board__cols">
          {COLS.map((c, ci) => (
            <div key={c.name} className="board__col">
              <span className="board__colname">{c.name}</span>
              {c.cards.map((card, i) => (
                <div
                  key={card}
                  className={`board__card slab slab--xs${ci === 2 ? " slab--red" : i === 0 && ci === 1 ? " slab--cyan" : ""}`}
                >
                  <span>{card}</span>
                  <i className="blk blk--line" style={{ width: `${48 + ((i * 17) % 30)}%` }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flow slab slab--sm">
        <span className="label">Flow</span>
        <div className="flow__nodes">
          <span className="flow__node slab slab--xs">New lead</span>
          <i className="flow__arrow" />
          <span className="flow__node slab slab--xs slab--cyan">Assign owner</span>
          <i className="flow__arrow" />
          <span className="flow__node slab slab--xs slab--navy">Send intro</span>
        </div>
      </div>
    </div>
  );
}

export function VisualUX() {
  return (
    <div className="viz viz--ux" aria-hidden="true">
      <div className="wire slab slab--sm slab--paper">
        <span className="label wire__label">Rough</span>
        <div className="wire__frame">
          <span className="wire__box wire__box--wide" />
          <div className="wire__two">
            <span className="wire__box wire__box--tall" />
            <div>
              <span className="wire__line" />
              <span className="wire__line" />
              <span className="wire__line wire__line--short" />
              <span className="wire__btn" />
            </div>
          </div>
        </div>
      </div>
      <i className="viz__arrow" />
      <div className="final slab slab--sm">
        <span className="label wire__label">Final</span>
        <div className="wire__frame">
          <b className="blk blk--navy blk--tall" style={{ width: "72%" }} />
          <div className="wire__two">
            <span className="slab slab--xs slab--cyan final__art" />
            <div>
              <span className="blk blk--line" style={{ width: "92%" }} />
              <span className="blk blk--line" style={{ width: "84%" }} />
              <span className="blk blk--line" style={{ width: "58%" }} />
              <b className="blk blk--red" style={{ width: 84, marginTop: 10 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VisualBrand() {
  return (
    <div className="viz viz--brand" aria-hidden="true">
      <div className="sheet slab slab--sm">
        <div className="sheet__big">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/lbn-mark.svg" alt="" width={283} height={264} />
        </div>
        <div className="sheet__swatches">
          <span className="swatch" style={{ background: "var(--cyan)" }}>
            <b>Cyan</b>
            <i>#00DBFF</i>
          </span>
          <span className="swatch" style={{ background: "var(--red)", color: "#fff" }}>
            <b>Red</b>
            <i>#FF0303</i>
          </span>
          <span className="swatch" style={{ background: "var(--navy)", color: "#fff" }}>
            <b>Navy</b>
            <i>#012340</i>
          </span>
          <span className="swatch" style={{ background: "var(--white)" }}>
            <b>White</b>
            <i>#FFFFFF</i>
          </span>
        </div>
      </div>
      <div className="card slab slab--sm slab--cyan">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/lbn-mark.svg" alt="" width={44} height={41} />
        <div>
          <b>LBN Design</b>
          <span>lbn.design</span>
        </div>
      </div>
      <div className="badge slab slab--sm slab--navy pattern">
        <span>Drawn in-house</span>
      </div>
    </div>
  );
}
