import { Heart } from "lucide-react";
import { Reveal, Stagger } from "./Reveal";
import { formatAgeFromDob } from "../lib/age";

const CHILD_DOB = "2025-08-31";

const members = [
  {
    role: "Mom",
    line: "The quiet strength behind everything.",
  },
  {
    role: "Dad",
    line: "The foundation I keep learning from.",
  },
  {
    role: "Wife",
    line: "My partner in every world — tech and real.",
  },
] as const;

export function Family() {
  const childAge = formatAgeFromDob(CHILD_DOB);

  return (
    <section className="section family-section" id="family">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Home base</p>
            <h2>Family</h2>
            <p>
              Beyond work and tools, this is the world that matters most — a
              small family that keeps me grounded.
            </p>
          </div>
        </Reveal>

        <Stagger className="family-grid" selector=".family-card">
          {members.map((member) => (
            <article className="family-card" key={member.role}>
              <p className="family-role">{member.role}</p>
              <h3>{member.line}</h3>
            </article>
          ))}

          <article className="family-card family-card--child">
            <div className="family-child-top">
              <span className="family-role">Our child</span>
              <span className="family-heart" aria-hidden="true">
                <Heart strokeWidth={1.75} size={16} />
              </span>
            </div>
            <h3 className="family-age">{childAge}</h3>
            <p className="family-note">
              The newest — and loudest — reason to keep building a good life.
            </p>
          </article>
        </Stagger>
      </div>
    </section>
  );
}
