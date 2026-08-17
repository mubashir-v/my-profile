import { useEffect, useState } from "react";

const links = [
  { href: "#tech", label: "Tech World" },
  { href: "#experience", label: "Experience" },
  { href: "#real", label: "Real World" },
  { href: "#family", label: "Family" },
  { href: "#thread", label: "The Thread" },
  { href: "#connect", label: "Connect" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${open ? " nav--open" : ""}`}>
      <a className="nav-brand" href="#top" onClick={close}>
        Mubashir V
      </a>

      <nav className="nav-worlds" aria-label="Worlds">
        {links
          .filter((link) => link.href !== "#connect")
          .map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
      </nav>

      <a className="nav-cta nav-cta--desktop" href="#connect">
        Connect
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div
        className="nav-drawer"
        id="mobile-nav"
        hidden={!open}
        aria-hidden={!open}
      >
        <nav className="nav-drawer-links" aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
