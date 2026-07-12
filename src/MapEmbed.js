import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SITE } from "./data";

export default function MapEmbed({ className = "map-wrap" }) {
  const [active, setActive] = useState(false);
  return (
    <div className={`${className} map-shell`}>
      {active ? <iframe title="Sensasia location on Peralanda Road in Ragama" src={SITE.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /> :
        <button className="map-loader" type="button" onClick={() => setActive(true)}><FaMapMarkerAlt/><strong>Peralanda Road, Ragama</strong><span>Load interactive map</span></button>}
      <a className="map-link" href={SITE.map} target="_blank" rel="noreferrer">Open directions in Google Maps</a>
    </div>
  );
}
