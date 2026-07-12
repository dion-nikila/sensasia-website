import React from "react";
import ResponsiveImage from "./ResponsiveImage";

export default function PageHero({ eyebrow, title, copy, image, alt = "" }) {
  return (
    <header className="page-hero">
      <ResponsiveImage src={image} alt={alt} className="page-hero-media" imageClassName="page-hero-image" sizes="100vw" loading="eager" fetchPriority="high" />
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-copy">{copy}</p>
      </div>
    </header>
  );
}
