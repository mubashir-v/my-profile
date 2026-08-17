import { Reveal } from "./Reveal";

const email = "mubashircheruvayoor@gmail.com";
const linkedin = "https://www.linkedin.com/in/mubashirv/";
const instagram = "https://www.instagram.com/mubashir__v/";

export function CTA() {
  return (
    <section className="cta" id="connect">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow" style={{ color: "rgba(238,240,234,0.55)" }}>
            Let’s talk
          </p>
          <h2>Have a problem worth solving?</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p>
            Data platforms, cloud systems, software, IoT, AI — or something that
            doesn’t fit neatly in a box. If it’s interesting, I’m listening.
          </p>
          <p className="signature">
            “I don’t need to know everything. I just need to know how to figure
            things out.”
          </p>
          <div className="connect-actions">
            <a className="btn-primary" href={`mailto:${email}`}>
              Email me →
            </a>
            <div className="connect-links">
              <a href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
