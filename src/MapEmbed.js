import React, { useState } from "react";
import { MAP_EMBED_URL, MAP_LINK_URL } from "./siteConfig";

export default function MapEmbed({ className = "map-wrap" }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`${className} map-shell ${loaded ? "is-loaded" : ""} ${
        failed ? "has-error" : ""
      }`}
    >
      {!loaded && !failed && (
        <div className="map-skeleton" role="status" aria-live="polite">
          <span>Loading Sensasia map...</span>
        </div>
      )}
      {failed && (
        <div className="map-fallback" role="status">
          <span>Map unavailable right now.</span>
          <a href={MAP_LINK_URL} target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>
      )}
      <iframe
        title="Sensasia Restaurant and Bar location in Ragama"
        src={MAP_EMBED_URL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />
      <a className="map-open-link" href={MAP_LINK_URL} target="_blank" rel="noreferrer">
        View on Google Maps
      </a>
    </div>
  );
}
