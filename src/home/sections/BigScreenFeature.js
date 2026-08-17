import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import ResponsiveImage from "../../ResponsiveImage";
import { SITE } from "../../data";

export default function BigScreenFeature() {
  return (
    <section id="big-screen" className="sx-watch-feature" aria-labelledby="watch-title">
      <ResponsiveImage
        src="/images/big-screen-match.jpg"
        alt="A football match shown on the big screen inside Sensasia in Ragama"
        className="sx-watch-media"
        imageClassName="sx-watch-image"
        sizes="100vw"
        loading="lazy"
      />
      <div className="sx-watch-shade" aria-hidden="true" />
      <span className="sx-watch-live"><i aria-hidden="true" /> Big screen in the venue</span>

      <div className="sx-watch-copy">
        <p className="sx-kicker">Watch · Peralanda, Ragama</p>
        <h2 id="watch-title">Big screen.<br />Full table.</h2>
        <p>Watch major sporting moments with Asian-fusion food for the table and the full Sensasia beverage menu nearby. Call ahead to confirm a specific match before travelling.</p>
        <ol className="sx-watch-steps" aria-label="Plan a big-screen night">
          <li><span>01</span>Dinner</li>
          <li><span>02</span>The screen</li>
          <li><span>03</span>Your people</li>
          <li><span>04</span>Stay awhile</li>
        </ol>
        <div className="sx-inline-actions">
          <Link to="/sports-screenings">Plan a match night <FaArrowRight /></Link>
          <a href={`tel:${SITE.phoneTel}`}><FaPhoneAlt /> Call Sensasia</a>
        </div>
      </div>
    </section>
  );
}
