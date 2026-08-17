import { Reveal } from "./Reveal";

export function Manifesto() {
  return (
    <section className="manifesto" id="systems">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">How I work with technology</p>
          <h2>
            I don’t just use technology.
            <br />
            I like to understand it.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p>
            One technology is rarely enough to solve a real problem. A project
            might start with a business requirement, become a Python application,
            connect to an API, store data in a database, run inside Docker,
            deploy to Kubernetes, talk to AWS, and eventually use AI.
          </p>
          <p>
            That’s the part I enjoy. <strong>Connecting the pieces.</strong>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
