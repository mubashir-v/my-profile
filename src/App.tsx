import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { DigitalWorld } from "./components/DigitalWorld";
import { Experience } from "./components/Experience";
import { Manifesto } from "./components/Manifesto";
import { RealWorld } from "./components/RealWorld";
import { CommonThread } from "./components/CommonThread";
import { Teaching } from "./components/Teaching";
import { Defines } from "./components/Defines";
import { CTA } from "./components/CTA";

export default function App() {
  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <Intro />
        <DigitalWorld />
        <Experience />
        <Manifesto />
        <RealWorld />
        <CommonThread />
        <Teaching />
        <Defines />
        <CTA />
      </main>
      <footer className="footer">
        <span>Based in Kerala, India · Working globally</span>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/mubashirv/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/mubashir__v/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a href="mailto:mubashircheruvayoor@gmail.com">
            mubashircheruvayoor@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
