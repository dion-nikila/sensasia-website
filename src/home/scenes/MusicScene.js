import React from "react";
import ResponsiveImage from "../../ResponsiveImage";
import { EVENTS, SITE } from "../../data";
import { SCENE_MEDIA } from "../sceneMedia";

export default function MusicScene({ active = false, staticMode = false }) {
  const inactive = !staticMode && !active;

  return (
    <section id="music" className="sx-scene sx-music-scene" aria-labelledby="music-title" aria-hidden={inactive}>
      <ResponsiveImage
        src={SCENE_MEDIA.music.src}
        alt={SCENE_MEDIA.music.alt}
        className="sx-music-media"
        imageClassName="sx-music-image"
        sizes="(max-width: 700px) 100vw, 68vw"
        loading="lazy"
      />
      <div className="sx-music-shade" aria-hidden="true" />

      <div className="sx-music-copy">
        <p className="sx-kicker">After dinner · Scene 03</p>
        <h2 id="music-title">Dinner gets<br />louder.</h2>
        <p className="sx-music-lead">Live music and karaoke. The regular week starts here.</p>
        <div className="sx-event-strip" aria-label="Regular weekly entertainment">
          {EVENTS.map(({ shortDay, title, time }) => (
            <div key={shortDay}>
              <span>{shortDay}</span><strong>{title}</strong><small>{time}</small>
            </div>
          ))}
        </div>
        <a className="sx-music-call" href={`tel:${SITE.phoneTel}`} tabIndex={inactive ? -1 : undefined}>
          Call before you travel <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
