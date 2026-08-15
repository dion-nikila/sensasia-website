import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function getInitialPreference() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return true;
  return window.matchMedia(QUERY).matches;
}

export default function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(getInitialPreference);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined;
    const media = window.matchMedia(QUERY);
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  return reducedMotion;
}
