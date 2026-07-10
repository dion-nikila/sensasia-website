import React from "react";

const WEBP_WIDTHS = {
  "/images/about1.jpg": [640, 960, 1280],
  "/images/about2.jpg": [640, 960, 1280],
  "/images/about3.jpg": [640, 960, 1280],
  "/images/about4.jpg": [640, 960, 1280],
  "/images/about5.jpg": [640, 960, 1280],
  "/images/about6.jpg": [640, 960, 1280],
  "/images/bar-special.jpg": [640, 960, 1280],
  "/images/food1.jpg": [640, 960],
  "/images/food2.jpg": [640, 960],
  "/images/food3.jpg": [640, 960, 1280],
  "/images/food4.jpg": [640, 960],
  "/images/hero-bg.jpg": [640, 960, 1280],
  "/images/logo.jpg": [640, 960, 1280],
  "/images/spotlight.jpg": [640, 960],
};

function basePath(src) {
  return src.replace(/\.(jpe?g|png)$/i, "");
}

function webpSrcSet(src, widths) {
  const base = basePath(src);
  return widths.map((width) => `${base}-${width}.webp ${width}w`).join(", ");
}

export default function ResponsiveImage({
  src,
  alt,
  className,
  imageClassName,
  sizes = "100vw",
  loading = "lazy",
  fetchPriority,
}) {
  const widths = WEBP_WIDTHS[src] || [];

  return (
    <picture className={className}>
      {widths.length > 0 && (
        <source type="image/webp" srcSet={webpSrcSet(src, widths)} sizes={sizes} />
      )}
      <img
        className={imageClassName}
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        sizes={sizes}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
