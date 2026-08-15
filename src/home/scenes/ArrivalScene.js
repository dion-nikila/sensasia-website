import React from "react";
import { Link } from "react-router-dom";
import ResponsiveImage from "../../ResponsiveImage";
import { SITE } from "../../data";
import { SCENE_MEDIA } from "../sceneMedia";

export default function ArrivalScene({ active = true, staticMode = false }) {
  const inactive = !staticMode && !active;
  return (
    <section className="sx-scene arrival-scene" aria-labelledby="arrival-title" aria-hidden={inactive}>
      <ResponsiveImage
        src={SCENE_MEDIA.arrival.src}
        alt={SCENE_MEDIA.arrival.alt}
        className="arrival-media"
        imageClassName="arrival-image"
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
      />
      <div className="arrival-shade" aria-hidden="true" />
      <div className="arrival-light" aria-hidden="true" />

      <div className="arrival-content">
        <p className="arrival-venue"><span aria-hidden="true" />Restaurant &amp; Bar</p>
        <p className="arrival-location">Peralanda · Ragama</p>
        <h1 id="arrival-title">Your night<br />starts here.</h1>
        <nav className="arrival-actions" aria-label="Start your visit">
          <Link to="/menu" tabIndex={inactive ? -1 : undefined}>Menu</Link>
          <a href={`tel:${SITE.phoneTel}`} tabIndex={inactive ? -1 : undefined}>Call</a>
          <a href={SITE.map} target="_blank" rel="noreferrer" tabIndex={inactive ? -1 : undefined}>Map</a>
        </nav>
      </div>

      <div className="arrival-scroll-cue" aria-hidden="true">
        <span>One night out</span><i />
      </div>
    </section>
  );
}
