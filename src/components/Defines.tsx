import { Reveal } from "./Reveal";

export function Defines() {
  return (
    <section className="section defines" id="defines">
      <div className="wrap defines-grid">
        <Reveal>
          <div>
            <p className="eyebrow">What defines me</p>
            <h2 className="intro-title" style={{ marginTop: "0.75rem" }}>
              I’m not trying to be an expert in everything.
            </h2>
            <p className="lede" style={{ marginTop: "1rem" }}>
              I’m a specialist who refuses to stop being curious. My primary
              world is IT and Data Engineering. Everything else is an extension
              of the same curiosity.
            </p>
            <div className="triad">
              <div>
                <span>Deep</span>
                where it matters
              </div>
              <div>
                <span>Broad</span>
                where it helps
              </div>
              <div>
                <span>Hands-on</span>
                whenever possible
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mantra">
            <span>Understand things.</span>
            <span>Build things.</span>
            <span>Fix things.</span>
            <span>Learn things.</span>
            <span>Share things.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
