import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const buildDirectory = path.join(projectRoot, "build");
const configPath = path.join(projectRoot, "src", "seoRoutes.json");

const config = JSON.parse(await readFile(configPath, "utf8"));
const siteUrl = config.siteUrl.replace(/\/+$/, "");
const restaurantId = `${siteUrl}/#restaurant`;
const websiteId = `${siteUrl}/#website`;

const absolute = (pathname) => new URL(pathname, `${siteUrl}/`).href;

const escapeHtml = (value) => String(value)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

const jsonForHtml = (value) => JSON.stringify(value).replace(/</g, "\\u003c");

const websiteSchema = () => ({
  "@type": "WebSite",
  "@id": websiteId,
  url: absolute("/"),
  name: config.siteName,
  alternateName: config.shortName,
  inLanguage: config.language,
});

const restaurantSchema = () => ({
  "@type": "Restaurant",
  "@id": restaurantId,
  name: config.siteName,
  alternateName: config.shortName,
  url: absolute("/"),
  telephone: config.business.telephone,
  logo: absolute("/images/logo.png"),
  image: [
    absolute("/images/hero-bg.jpg"),
    absolute("/images/food4.jpg"),
    absolute("/images/about1.jpg"),
  ],
  foundingDate: config.business.foundingDate,
  description: config.business.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: config.business.streetAddress,
    addressLocality: config.business.addressLocality,
    addressRegion: config.business.addressRegion,
    postalCode: config.business.postalCode,
    addressCountry: config.business.addressCountry,
  },
  servesCuisine: config.business.servesCuisine,
  menu: absolute("/menu"),
  hasMap: config.business.map,
  acceptsReservations: true,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: config.business.opens,
      closes: config.business.closes,
    },
  ],
  sameAs: config.business.sameAs,
});

const breadcrumbSchema = ({ route, canonical }) => ({
  "@type": "BreadcrumbList",
  "@id": `${canonical}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absolute("/"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: route.name,
      item: canonical,
    },
  ],
});

const webPageSchema = ({ pathname, route, canonical, image }) => {
  const schema = {
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: route.title,
    description: route.description,
    inLanguage: config.language,
    isPartOf: { "@id": websiteId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: image,
    },
  };

  if (pathname !== "/404") schema.about = { "@id": restaurantId };
  if (pathname !== "/" && pathname !== "/404") {
    schema.breadcrumb = { "@id": `${canonical}#breadcrumb` };
  }

  return schema;
};

const schemaGraph = ({ pathname, route, canonical, image }) => {
  const graph = [];
  if (pathname === "/") graph.push(websiteSchema(), restaurantSchema());
  graph.push(webPageSchema({ pathname, route, canonical, image }));
  if (pathname !== "/" && pathname !== "/404") {
    graph.push(breadcrumbSchema({ route, canonical }));
  }
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};

const removeManagedHeadTags = (html) => {
  let output = html.replace(/\s*<title\b[^>]*>[\s\S]*?<\/title>/gi, "");
  output = output.replace(/\s*<link\b[^>]*>/gi, (tag) => (
    /\brel=["']canonical["']/i.test(tag) ? "" : tag
  ));
  output = output.replace(/\s*<meta\b[^>]*>/gi, (tag) => {
    const managedName = /\bname=["'](?:description|robots|twitter:[^"']+)["']/i.test(tag);
    const managedProperty = /\bproperty=["']og:[^"']+["']/i.test(tag);
    return managedName || managedProperty ? "" : tag;
  });
  return output.replace(
    /\s*<script\b[^>]*data-sensasia-schema[^>]*>[\s\S]*?<\/script>/gi,
    "",
  );
};

const buildHeadMarkup = ({ pathname, route }) => {
  const canonical = absolute(pathname);
  const image = absolute(route.image);
  const graph = schemaGraph({ pathname, route, canonical, image });

  return [
    `    <title>${escapeHtml(route.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(route.description)}" />`,
    `    <meta name="robots" content="${escapeHtml(route.robots)}" />`,
    `    <link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `    <meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(route.description)}" />`,
    "    <meta property=\"og:type\" content=\"website\" />",
    `    <meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `    <meta property="og:site_name" content="${escapeHtml(config.siteName)}" />`,
    `    <meta property="og:locale" content="${escapeHtml(config.locale)}" />`,
    `    <meta property="og:image" content="${escapeHtml(image)}" />`,
    `    <meta property="og:image:alt" content="${escapeHtml(route.imageAlt)}" />`,
    "    <meta name=\"twitter:card\" content=\"summary_large_image\" />",
    `    <meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `    <meta name="twitter:image" content="${escapeHtml(image)}" />`,
    `    <meta name="twitter:image:alt" content="${escapeHtml(route.imageAlt)}" />`,
    `    <script type="application/ld+json" data-sensasia-schema>${jsonForHtml(graph)}</script>`,
  ].join("\n");
};

const renderRouteHtml = (template, pathname, route) => {
  const withoutManagedTags = removeManagedHeadTags(template);
  const routeTemplate = pathname === "/"
    ? withoutManagedTags
    : withoutManagedTags.replace(/\s*<link\b[^>]*data-home-preload[^>]*>/gi, "");
  const headMarkup = buildHeadMarkup({ pathname, route });
  return routeTemplate.replace(/\s*<\/head>/i, `\n${headMarkup}\n  </head>`);
};

const templatePath = path.join(buildDirectory, "index.html");
const template = await readFile(templatePath, "utf8");

for (const [pathname, route] of Object.entries(config.routes)) {
  const html = renderRouteHtml(template, pathname, route);

  if (pathname === "/") {
    await writeFile(templatePath, html, "utf8");
    continue;
  }

  if (pathname === "/404") {
    await writeFile(path.join(buildDirectory, "404.html"), html, "utf8");
    continue;
  }

  const slug = pathname.slice(1);
  const routeDirectory = path.join(buildDirectory, slug);
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(path.join(routeDirectory, "index.html"), html, "utf8");
  await writeFile(path.join(buildDirectory, `${slug}.html`), html, "utf8");
}

console.log(`Generated static SEO head copies for ${Object.keys(config.routes).length} routes.`);
