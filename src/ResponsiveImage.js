import React from "react";

const WEBP_WIDTHS = {
  "/images/about1.jpg": [640, 960, 1280],
  "/images/about2.jpg": [640, 960, 1280],
  "/images/about3.jpg": [640, 960, 1280],
  "/images/about4.jpg": [640, 960, 1280],
  "/images/about5.jpg": [640, 960, 1280],
  "/images/about6.jpg": [640, 960, 1280],
  "/images/bar-special.jpg": [640, 960, 1280],
  "/images/big-screen-match.jpg": [640, 960, 1280],
  "/images/food1.jpg": [640, 960],
  "/images/food2.jpg": [640, 960],
  "/images/food3.jpg": [640, 960, 1280],
  "/images/food4.jpg": [640, 960],
  "/images/hero-bg.jpg": [640, 960, 1280],
  "/images/logo.jpg": [640, 960, 1280],
  "/images/spotlight.jpg": [640, 960],
};

const JPEG_WIDTHS = {
  "/images/big-screen-match.jpg": [640, 960, 1280],
};

const DIMENSIONS = {
  "/images/about1.jpg": [3024, 2659], "/images/about2.jpg": [2560, 2170],
  "/images/about3.jpg": [4032, 3024], "/images/about4.jpg": [2560, 1992],
  "/images/about5.jpg": [2534, 1299], "/images/about6.jpg": [2560, 2560],
  "/images/bar-special.jpg": [1920, 1280], "/images/food1.jpg": [1080, 1080],
  "/images/big-screen-match.jpg": [1280, 1707],
  "/images/food2.jpg": [1024, 1024], "/images/food3.jpg": [4032, 3024],
  "/images/food4.jpg": [1200, 1200], "/images/hero-bg.jpg": [1395, 1485],
  "/images/logo.jpg": [1587, 2245], "/images/spotlight.jpg": [1200, 816],
};

function basePath(src) {
  return src.replace(/\.(jpe?g|png)$/i, "");
}

function responsiveSrcSet(src, widths, extension) {
  const base = basePath(src);
  return widths.map((width) => `${base}-${width}.${extension} ${width}w`).join(", ");
}

export default function ResponsiveImage({
  src,
  alt,
  className,
  imageClassName,
  sizes = "100vw",
  loading = "eager",
  fetchPriority,
}) {
  const widths = WEBP_WIDTHS[src] || [];
  const jpegWidths = JPEG_WIDTHS[src] || [];
  const [width, height] = DIMENSIONS[src] || [];

  const useFallback = (event) => {
    const image = event.currentTarget;
    if (image.dataset.fallbackApplied === "true") return;
    image.dataset.fallbackApplied = "true";
    image.parentElement?.querySelectorAll("source").forEach((source) => source.remove());
    image.removeAttribute("srcset");
    image.src = src;
  };

  return (
    <picture className={className}>
      {widths.length > 0 && (
        <source type="image/webp" srcSet={responsiveSrcSet(src, widths, "webp")} sizes={sizes} />
      )}
      {jpegWidths.length > 0 && (
        <source type="image/jpeg" srcSet={responsiveSrcSet(src, jpegWidths, "jpg")} sizes={sizes} />
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
        onError={useFallback}
      />
    </picture>
  );
}
