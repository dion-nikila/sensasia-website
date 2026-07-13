import React from "react";

export default function SectionEyebrow({ number, children, light = false, Icon }) {
  return (
    <p className={`eyebrow section-eyebrow ${light ? "light" : ""}`}>
      {number && <span className="chapter-number" aria-hidden="true">{number}</span>}
      {Icon && <Icon aria-hidden="true" />}
      <span>{children}</span>
    </p>
  );
}
