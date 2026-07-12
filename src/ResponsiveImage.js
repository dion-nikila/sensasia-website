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

const DIMENSIONS = {
  "/images/about1.jpg": [3024, 2659], "/images/about2.jpg": [2560, 2170],
  "/images/about3.jpg": [4032, 3024], "/images/about4.jpg": [2560, 1992],
  "/images/about5.jpg": [2534, 1299], "/images/about6.jpg": [2560, 2560],
  "/images/bar-special.jpg": [1920, 1280], "/images/food1.jpg": [1080, 1080],
  "/images/food2.jpg": [1024, 1024], "/images/food3.jpg": [4032, 3024],
  "/images/food4.jpg": [1200, 1200], "/images/hero-bg.jpg": [1395, 1485],
  "/images/logo.jpg": [1587, 2245], "/images/spotlight.jpg": [1200, 816],
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
  const [width, height] = DIMENSIONS[src] || [];

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
        width={width}
        height={height}
      />
    </picture>
  );
}
