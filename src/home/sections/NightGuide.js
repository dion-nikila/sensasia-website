import React from "react";
import { Link } from "react-router-dom";
import { DISCOVERY_LINKS } from "../../data";

export default function NightGuide() {
  return (
    <section className="sx-night-guide" aria-labelledby="night-guide-title">
      <div className="sx-night-guide-heading">
        <p className="sx-kicker">Sensasia · Peralanda Road</p>
        <h2 id="night-guide-title">Pick your<br />kind of night.</h2>
        <p>Family dinner, a menu worth exploring, live entertainment or the match—find the part of Sensasia that fits the plan.</p>
      </div>
      <div className="sx-night-links">
        {DISCOVERY_LINKS.map(({ number, label, title, copy, to }) => (
          <Link to={to} key={number}>
            <span>{number} · {label}</span>
            <strong>{title}</strong>
            <small>{copy}</small>
            <i aria-hidden="true">↗</i>
          </Link>
        ))}
      </div>
    </section>
  );
}
