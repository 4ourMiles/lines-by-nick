const STEPS = [
  {
    n: 1,
    name: "A call",
    text: "A short call about what you are trying to do and what is in the way. No deck, no pitch.",
  },
  {
    n: 2,
    name: "A plan",
    text: "A short written scope with the price and the timeline in writing before anything starts.",
  },
  {
    n: 3,
    name: "The build",
    text: "Regular check-ins with something real to look at every time: screens, then working software.",
  },
  {
    n: 4,
    name: "Launch and hand-over",
    text: "We ship it, document it and hand you the keys. Stay on with us for upkeep or take it in-house.",
  },
];

export function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <h2 className="headline">How a project runs.</h2>
        <ol className="steps">
          {STEPS.map((s) => (
            <li key={s.n} className="step slab slab--sm">
              <span className="step__n" aria-hidden="true">
                {s.n}
              </span>
              <h3 className="title">
                <span className="visually-hidden">Step {s.n}: </span>
                {s.name}
              </h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
