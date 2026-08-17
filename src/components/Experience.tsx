import { Reveal, Stagger } from "./Reveal";

type Role = {
  title: string;
  period: string;
};

type ExperienceItem = {
  company: string;
  period: string;
  location?: string;
  current?: boolean;
  summary: string;
  roles?: Role[];
  title?: string;
  focus?: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "IBM",
    title: "Senior Data Engineer",
    period: "Nov 2024 — Present",
    location: "Kochi, Kerala · Hybrid",
    current: true,
    summary:
      "Working on data platform architecture and enablement — designing reliable patterns, guiding teams, and helping modern orchestration land in production.",
    focus: [
      "Architecture",
      "Astronomer platform enablement",
      "Airflow / orchestration",
      "Data platforms",
    ],
  },
  {
    company: "Cognizant",
    period: "Apr 2022 — Nov 2024",
    location: "Kochi, Kerala",
    summary:
      "Worked across AI-oriented and modern data engineering — requirements, data domains, pipelines, and cloud-backed platforms.",
    roles: [
      {
        title: "AI & Modern Data Engineering",
        period: "May 2022 — Nov 2024",
      },
      {
        title: "Data Engineer",
        period: "Apr 2022 — Nov 2024",
      },
    ],
  },
  {
    company: "Gedexo Technologies LLP",
    title: "Back End Developer",
    period: "Oct 2021 — Apr 2022",
    summary:
      "Backend engineering and technical implementation across software projects — APIs, services, and delivery.",
  },
  {
    company: "Wipro Limited",
    title: "Project Engineer",
    period: "Aug 2019 — Oct 2021",
    location: "India",
    summary:
      "Built foundations in enterprise software, programming, and delivering solutions in a large technology environment.",
  },
];

export function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Path so far</p>
            <h2>7+ years of building</h2>
            <p>
              From project engineering to senior data engineering — a path shaped
              by platforms, cloud, and solving problems that matter in production.
            </p>
          </div>
        </Reveal>

        <Stagger className="experience-list" selector=".experience-item">
          {experiences.map((job) => (
            <article
              className={`experience-item${job.current ? " experience-item--current" : ""}`}
              key={job.company}
            >
              <div className="experience-meta">
                <span className="experience-year">{job.period}</span>
                {job.current ? (
                  <span className="experience-now">Now</span>
                ) : null}
              </div>
              <div className="experience-body">
                <h3>{job.company}</h3>
                {job.title ? (
                  <p className="experience-role">{job.title}</p>
                ) : null}
                {job.location ? (
                  <p className="experience-location">{job.location}</p>
                ) : null}
                <p className="experience-summary">{job.summary}</p>
                {job.focus ? (
                  <ul className="experience-focus">
                    {job.focus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {job.roles ? (
                  <ul className="experience-roles">
                    {job.roles.map((role) => (
                      <li key={role.title}>
                        <span>{role.title}</span>
                        <span>{role.period}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
