import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Car,
  Clapperboard,
  Droplets,
  PenTool,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

type Scene = {
  icon: LucideIcon;
  label: string;
  headline: string;
  story: string;
  tools: string[];
  accent: string;
};

const scenes: Scene[] = [
  {
    icon: Wrench,
    label: "Mechanical",
    headline: "My 1992 Jeep DI is a workshop on wheels.",
    story:
      "From regular mechanical work to upgrading drum brakes to disc brakes — and helping other vehicles when they’re stuck.",
    tools: ["Hammer", "Spanner", "Jack", "Socket set", "Wrenches"],
    accent: "mech",
  },
  {
    icon: Zap,
    label: "Electrical",
    headline: "Find the fault. Fix the connection.",
    story:
      "Basic electrical troubleshooting at home and on vehicles — testing, tightening, and making things work again.",
    tools: ["Pliers", "Screwdriver", "Multimeter", "Wire stripper"],
    accent: "elec",
  },
  {
    icon: Droplets,
    label: "Plumbing",
    headline: "Leaks, joints, and simple repairs.",
    story:
      "Practical plumbing fixes with the same mindset — diagnose first, then repair with the right tool.",
    tools: ["Pipe wrench", "Pliers", "Screwdriver", "Seal tape"],
    accent: "plumb",
  },
  {
    icon: PenTool,
    label: "Design",
    headline: "Visuals for teaching, content, and ideas.",
    story:
      "I design graphics and layouts when a message needs to look clear — not only read well.",
    tools: ["Photoshop", "Lightroom", "PicsArt", "Canva", "Figma"],
    accent: "design",
  },
  {
    icon: Clapperboard,
    label: "Video",
    headline: "Editing since the Ulead days.",
    story:
      "Started long back with Ulead VideoStudio. Today I know the basics of Premiere Pro, After Effects, VN, and CapCut.",
    tools: [
      "Ulead VideoStudio",
      "Premiere Pro",
      "After Effects",
      "VN",
      "CapCut",
    ],
    accent: "video",
  },
  {
    icon: Car,
    label: "Driving",
    headline: "Triumph bike. 1992 Jeep DI 4×4.",
    story:
      "I love travelling and driving — including off-road, recovering stuck vehicles, and reading terrain carefully.",
    tools: ["Triumph", "Jeep DI 4×4", "Off-road recovery", "Long drives"],
    accent: "drive",
  },
];

export function RealWorld() {
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = listRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".real-card",
        { autoAlpha: 0, y: 36 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root,
            start: "top 78%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".real-tool",
        { autoAlpha: 0, y: 10 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            start: "top 70%",
            once: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section real-section" id="real">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">02 — Real World</p>
            <h2>Beyond the screen</h2>
            <p>
              Outside IT, I still build, fix, create, and drive — with real tools
              in my hands.
            </p>
          </div>
        </Reveal>

        <div className="real-showcase" ref={listRef}>
          {scenes.map((scene) => {
            const Icon = scene.icon;
            return (
              <article
                className={`real-card real-card--${scene.accent}`}
                key={scene.label}
              >
                <div className="real-card-top">
                  <span className="real-card-icon" aria-hidden="true">
                    <Icon strokeWidth={1.7} size={22} />
                  </span>
                  <span className="real-card-label">{scene.label}</span>
                </div>
                <h3>{scene.headline}</h3>
                <p className="real-card-story">{scene.story}</p>
                <div className="real-tools" aria-label={`${scene.label} tools`}>
                  {scene.tools.map((tool) => (
                    <span className="real-tool" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
