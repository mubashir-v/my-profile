import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section className="section intro" id="intro">
      <div className="wrap intro-grid">
        <Reveal>
          <div>
            <p className="intro-label">Who I am</p>
            <h2 className="intro-title">
              A specialist who refuses to stop being curious.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="intro-copy">
            <p>
              I’m Mubashir V — a technology professional with 7+ years in IT,
              primarily working in Data Engineering, Cloud, and modern software
              systems.
            </p>
            <p>
              But I don’t like putting myself inside a single technology box. I
              enjoy understanding how things work — whether it’s a data pipeline
              in the cloud, an IoT sensor on an ESP32, an application inside
              Kubernetes, an AI system built with an LLM, or a physical problem
              that needs a tool in my hand.
            </p>
            <p className="pull">
              If there is a problem, I like figuring out how to solve it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
