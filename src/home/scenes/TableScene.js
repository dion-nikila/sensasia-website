import React from "react";
import ResponsiveImage from "../../ResponsiveImage";
import { SITE } from "../../data";
import { SCENE_MEDIA } from "../sceneMedia";

export default function TableScene({ active = false, staticMode = false }) {
  const inactive = !staticMode && !active;

  return (
    <section className="sx-scene sx-table-scene" aria-labelledby="table-title" aria-hidden={inactive}>
      <div className="sx-table-surface" aria-hidden="true" />
      <div className="sx-table-rule" aria-hidden="true" />
      <div className="sx-table-ghost" aria-hidden="true">EAT</div>

      <ResponsiveImage
        src={SCENE_MEDIA.table.signature.src}
        alt={SCENE_MEDIA.table.signature.alt}
        className="sx-dish sx-rice-dish"
        imageClassName="sx-dish-image"
        sizes="(max-width: 700px) 82vw, 42vw"
        loading="eager"
      />
      <ResponsiveImage
        src={SCENE_MEDIA.table.supporting.src}
        alt={SCENE_MEDIA.table.supporting.alt}
        className="sx-dish sx-side-dish"
        imageClassName="sx-dish-image"
        sizes="(max-width: 700px) 54vw, 25vw"
        loading="lazy"
      />
      <ResponsiveImage
        src={SCENE_MEDIA.table.hot.src}
        alt={SCENE_MEDIA.table.hot.alt}
        className="sx-dish sx-hot-dish"
        imageClassName="sx-dish-image"
        sizes="(max-width: 700px) 110vw, 62vw"
        loading="lazy"
      />

      <div className="sx-table-copy">
        <p className="sx-kicker">The table · Scene 02</p>
        <h2 id="table-title">Come<br />hungry.</h2>
        <p>Asian fusion. Bar favourites. Plates made for sharing.</p>
        <a href={SITE.foodMenu} target="_blank" rel="noreferrer" tabIndex={inactive ? -1 : undefined}>
          View food menu <span aria-hidden="true">↗</span>
        </a>
      </div>
      <ul className="sx-table-meta" aria-label="Sensasia dining highlights">
        <li>Asian fusion</li>
        <li>Made for sharing</li>
        <li>Open daily</li>
      </ul>
      <p className="sx-dish-note sx-rice-note">Sensasia Special Rice</p>
      <p className="sx-dish-note sx-prawn-note">Creamy Prawn</p>
    </section>
  );
}
