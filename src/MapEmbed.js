import React from "react";
import { SITE } from "./data";

export default function MapEmbed({ className = "map-wrap" }) {
  return (
    <div className={`${className} map-shell`}>
      <iframe title="Sensasia location on Peralanda Road in Ragama" src={SITE.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      <a className="map-link" href={SITE.map} target="_blank" rel="noreferrer">Open directions in Google Maps</a>
    </div>
  );
}
