import { Reveal, Stagger } from "./Reveal";

const flow = [
  "Problem",
  "Understand",
  "Experiment",
  "Build",
  "Fix",
  "Improve",
];

const pairs = [
  ["A broken pipeline", "A leaking pipe"],
  ["A Kubernetes deployment", "A mechanical problem"],
  ["An IoT circuit", "A house project"],
];

export function CommonThread() {
  return (
    <section className="section thread" id="thread">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">The common thread</p>
            <h2>Different problems. Same approach.</h2>
            <p>
              At first glance these things may look unrelated. To me, they share
              a mindset.
            </p>
          </div>
        </Reveal>

        <Stagger selector=".thread-flow > li" delay={0.05}>
          <ul className="thread-flow" aria-label="Problem solving loop">
            {flow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </Stagger>

        <Reveal delay={0.12}>
          <div className="thread-copy">
            <p>
              That mindset works everywhere — in cloud systems and in the
              physical world. The domains change. The way I approach them is
              surprisingly similar.
            </p>
            <ul className="pair-list">
              {pairs.map(([left, right]) => (
                <li key={left}>
                  <span>{left}</span>
                  <span className="sep">↔</span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
