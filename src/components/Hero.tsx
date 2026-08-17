import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-brand", { autoAlpha: 0, y: 16, duration: 0.6 })
        .from(
          ".hero h1 span",
          { autoAlpha: 0, y: 40, duration: 0.75, stagger: 0.1 },
          "-=0.3",
        )
        .from(".hero-support", { autoAlpha: 0, y: 20, duration: 0.6 }, "-=0.35")
        .from(
          ".hero-actions > *",
          { autoAlpha: 0, y: 16, duration: 0.5, stagger: 0.08 },
          "-=0.3",
        )
        .from(
          ".portrait-stage",
          { autoAlpha: 0, y: 28, scale: 0.96, duration: 0.85 },
          "-=0.7",
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={rootRef}>
      <div className="wrap hero-layout">
        <div className="hero-content">
          <p className="hero-brand">Mubashir V</p>
          <h1>
            <span>I BUILD.</span>
            <span>I FIX.</span>
            <span>I LEARN.</span>
          </h1>
          <p className="hero-support">
            IT is my profession. Data Engineering is my craft.{" "}
            <em>Curiosity is my operating system.</em>
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#digital">
              Enter the digital world
            </a>
            <a className="btn-ghost" href="#real">
              Explore the real world
            </a>
          </div>
        </div>

        <div className="hero-aside">
          <div className="portrait-stage">
            <span
              className="portrait-plane portrait-plane--digital"
              aria-hidden="true"
            />
            <span
              className="portrait-plane portrait-plane--real"
              aria-hidden="true"
            />
            <figure className="portrait-frame">
              <img
                src="/mubashir.png"
                alt="Mubashir V"
                width={480}
                height={480}
                decoding="async"
                fetchPriority="high"
              />
            </figure>
            <p className="portrait-caption">
              <span>Digital</span>
              <span className="portrait-caption-sep" aria-hidden="true" />
              <span>Real world</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
