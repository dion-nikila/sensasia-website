# Sensasia website

React website for Sensasia Restaurant and Bar in Ragama.

## Run locally

```bash
npm install
npm start
```

Create a production build with `npm run build` and run the test suite with `npm test -- --watchAll=false`.

## Sitewide and event themes

All palette controls live in two files:

- `src/themeConfig.js` selects the active theme.
- `src/theme.css` defines semantic colors for each theme.

Available themes:

- `default`
- `match-night`
- `karaoke-night`
- `live-music`

For a permanent theme, change `ACTIVE_THEME` in `src/themeConfig.js`, or set it during the build:

```bash
REACT_APP_SITE_THEME=match-night npm run build
```

Preview any theme without changing the published default:

```text
/?theme=match-night
/?theme=karaoke-night
/?theme=live-music
```

When creating a new theme, add its name to `THEME_NAMES`, add its browser color to `THEME_COLORS`, then add one `[data-theme="..."]` token block in `src/theme.css`. Components should consume semantic tokens instead of adding event-specific colors to `App.css`.

## Content and data

Business details, external links, navigation, recurring events, menu highlights, and route metadata are centralized in `src/data.js`.

Responsive image behavior and registered image sizes are centralized in `src/ResponsiveImage.js`.
