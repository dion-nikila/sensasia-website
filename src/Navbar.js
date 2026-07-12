import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAVIGATION, SITE } from "./data";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (event) => { if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => { document.body.classList.remove("menu-open"); document.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <header className={`site-header ${scrolled || pathname !== "/" ? "is-solid" : ""}`}>
      <div className="container header-inner">
        <NavLink className="wordmark" to="/" aria-label="Sensasia home">
          <strong>Sensasia</strong><span>Restaurant · Bar · Ragama</span>
        </NavLink>
        <button ref={toggleRef} className="nav-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? "Close" : "Open"} navigation</span><i/><i/>
        </button>
        <nav id="main-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          <p className="mobile-nav-label">Sensasia · Peralanda Road</p>
          {NAVIGATION.map(({ label, to }) => <NavLink key={to} to={to} end={to === "/"}>{label}</NavLink>)}
          <a className="button button-small button-wine" href={`tel:${SITE.phoneTel}`}>Reserve a table</a>
          <div className="mobile-nav-meta"><span>Open daily</span><strong>{SITE.hours}</strong></div>
        </nav>
      </div>
    </header>
  );
}
