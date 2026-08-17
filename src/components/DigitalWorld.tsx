import {
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  LayoutTemplate,
  PenTool,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { Reveal, Stagger } from "./Reveal";

const digitalRail = ["Data", "Cloud", "Code", "AI", "IoT", "Design", "Systems"];

type Skill = {
  icon: LucideIcon;
  title: string;
  blurb: string;
  tools: string;
  primary?: boolean;
};

const skills: Skill[] = [
  {
    icon: Database,
    title: "Data Engineering",
    blurb: "Pipelines, ETL/ELT, orchestration, and cloud data platforms.",
    tools: "Python · SQL · Airflow · Astronomer · dbt · Snowflake · Spark",
    primary: true,
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    blurb: "AWS environments, containers, networking, and production ops.",
    tools: "AWS · Docker · Kubernetes · Terraform · CI/CD",
  },
  {
    icon: Code2,
    title: "Backend Engineering",
    blurb: "APIs, services, and the logic that connects systems together.",
    tools: "Python · Django REST · Node.js · Auth",
  },
  {
    icon: LayoutTemplate,
    title: "Frontend",
    blurb: "Web interfaces that talk cleanly to APIs and real users.",
    tools: "React · JavaScript · API integration",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    blurb: "API-driven mobile apps when the problem needs a pocket UI.",
    tools: "Mobile apps · REST-backed products",
  },
  {
    icon: Cpu,
    title: "IoT & Embedded",
    blurb: "From sensor signal to cloud — hardware meeting software.",
    tools: "ESP32 · Sensors · APIs · Cloud services",
  },
  {
    icon: BrainCircuit,
    title: "Generative AI",
    blurb: "LLMs, prompts, and AI as part of the build process.",
    tools: "LLMs · Prompting · Cursor · Antigravity",
  },
  {
    icon: PenTool,
    title: "Design",
    blurb: "Visual design for teaching, content, and simple brand work.",
    tools: "Photoshop · Lightroom · PicsArt · Canva · Figma",
  },
  {
    icon: GraduationCap,
    title: "Teaching & Mentoring",
    blurb: "Helping people learn by building real projects, not just slides.",
    tools: "Programming · Data · AI · Projects",
  },
];

export function DigitalWorld() {
  return (
    <section className="section digital-section" id="digital">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">01 — Digital / IT</p>
            <h2>My digital world</h2>
            <p>
              Technology is my profession. Data Engineering is where I go deep.
              Everything else is how I stay broad enough to solve real problems
              end to end.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="world-rail" aria-label="Digital world path">
            {digitalRail.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Stagger className="skill-grid" selector=".skill-card">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <article
                className={`skill-card${skill.primary ? " skill-card--primary" : ""}`}
                key={skill.title}
              >
                <div className="skill-icon" aria-hidden="true">
                  <Icon strokeWidth={1.6} size={22} />
                </div>
                <div className="skill-copy">
                  {skill.primary ? (
                    <span className="badge">Primary field</span>
                  ) : null}
                  <h3>{skill.title}</h3>
                  <p>{skill.blurb}</p>
                  <p className="skill-tools">{skill.tools}</p>
                </div>
              </article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
