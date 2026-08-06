// Change this one value to publish a sitewide event theme.
// Available: "default", "match-night", "karaoke-night", "live-music".
export const ACTIVE_THEME = process.env.REACT_APP_SITE_THEME || "default";

export const THEME_NAMES = [
  "default",
  "match-night",
  "karaoke-night",
  "live-music",
];

export const THEME_COLORS = {
  default: "#0d0c0b",
  "match-night": "#07150f",
  "karaoke-night": "#180a12",
  "live-music": "#171008",
};

export function resolveTheme() {
  const preview = new URLSearchParams(window.location.search).get("theme");
  if (THEME_NAMES.includes(preview)) return preview;
  return THEME_NAMES.includes(ACTIVE_THEME) ? ACTIVE_THEME : "default";
}
