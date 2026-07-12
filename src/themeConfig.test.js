import { resolveTheme, THEME_COLORS, THEME_NAMES } from "./themeConfig";

afterEach(() => window.history.replaceState({}, "", "/"));

test("every registered theme has a browser chrome color", () => {
  THEME_NAMES.forEach((theme) => expect(THEME_COLORS[theme]).toMatch(/^#[0-9a-f]{6}$/i));
});

test("query string can safely preview a registered event theme", () => {
  window.history.replaceState({}, "", "/?theme=match-night");
  expect(resolveTheme()).toBe("match-night");
});

test("unknown preview themes fall back to the published theme", () => {
  window.history.replaceState({}, "", "/?theme=unknown-theme");
  expect(THEME_NAMES).toContain(resolveTheme());
});
