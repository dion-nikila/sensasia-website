import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE } from "./data";
import SEO_CONFIG from "./seoRoutes.json";

const SITE_URL = (SITE.siteUrl || SEO_CONFIG.siteUrl).replace(/\/+$/, "");
const RESTAURANT_ID = `${SITE_URL}/#restaurant`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const absolute = (path) => new URL(path, `${SITE_URL}/`).href;

const normalizePathname = (pathname) => {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
};

const setMeta = (selector, attrs) => {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    document.head.appendChild(node);
  }
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
};

const webPageSchema = ({ routeKey, seo, canonical, image }) => {
  const schema = {
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: seo.title,
    description: seo.description,
    inLanguage: SEO_CONFIG.language,
    isPartOf: { "@id": WEBSITE_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: image,
    },
  };

  if (routeKey !== "/404") schema.about = { "@id": RESTAURANT_ID };
  if (routeKey !== "/" && routeKey !== "/404") {
    schema.breadcrumb = { "@id": `${canonical}#breadcrumb` };
  }

  return schema;
};

const breadcrumbSchema = ({ seo, canonical }) => ({
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
      name: seo.name,
      item: canonical,
    },
  ],
});

const restaurantSchema = () => ({
  "@type": "Restaurant",
  "@id": RESTAURANT_ID,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: absolute("/"),
  telephone: SITE.phoneSchema,
  logo: absolute("/images/logo.png"),
  image: [
    absolute("/images/hero-bg.jpg"),
    absolute("/images/food4.jpg"),
    absolute("/images/about1.jpg"),
  ],
  foundingDate: SITE.since,
  description: SEO_CONFIG.business.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    postalCode: SITE.postcode,
    addressCountry: "LK",
  },
  servesCuisine: SEO_CONFIG.business.servesCuisine,
  menu: absolute("/menu"),
  hasMap: SITE.map,
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
      opens: SEO_CONFIG.business.opens,
      closes: SEO_CONFIG.business.closes,
    },
  ],
  sameAs: [SITE.facebook, SITE.instagram],
});

const websiteSchema = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: absolute("/"),
  name: SITE.name,
  alternateName: SITE.shortName,
  inLanguage: SEO_CONFIG.language,
});

const setSchema = ({ routeKey, seo, canonical, image }) => {
  document.querySelectorAll("script[data-sensasia-schema]").forEach((node) => node.remove());

  const graph = [];
  if (routeKey === "/") graph.push(websiteSchema(), restaurantSchema());
  graph.push(webPageSchema({ routeKey, seo, canonical, image }));
  if (routeKey !== "/" && routeKey !== "/404") {
    graph.push(breadcrumbSchema({ seo, canonical }));
  }

  const node = document.createElement("script");
  node.type = "application/ld+json";
  node.dataset.sensasiaSchema = "true";
  node.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });
  document.head.appendChild(node);
};

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPathname = normalizePathname(pathname);
    const routeKey = SEO_CONFIG.routes[normalizedPathname] ? normalizedPathname : "/404";
    const seo = SEO_CONFIG.routes[routeKey];
    const canonicalPath = routeKey === "/404" ? normalizedPathname : routeKey;
    const canonical = absolute(canonicalPath);
    const image = absolute(seo.image);

    document.title = seo.title;

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    setMeta('meta[name="description"]', {
      name: "description",
      content: seo.description,
    });
    setMeta('meta[name="robots"]', {
      name: "robots",
      content: seo.robots,
    });

    [
      ["og:title", seo.title],
      ["og:description", seo.description],
      ["og:image", image],
      ["og:image:alt", seo.imageAlt],
      ["og:url", canonical],
      ["og:type", "website"],
      ["og:site_name", SITE.name],
      ["og:locale", SEO_CONFIG.locale],
    ].forEach(([property, content]) => {
      setMeta(`meta[property="${property}"]`, { property, content });
    });

    [
      ["twitter:card", "summary_large_image"],
      ["twitter:title", seo.title],
      ["twitter:description", seo.description],
      ["twitter:image", image],
      ["twitter:image:alt", seo.imageAlt],
    ].forEach(([name, content]) => {
      setMeta(`meta[name="${name}"]`, { name, content });
    });

    setSchema({ routeKey, seo, canonical, image });
  }, [pathname]);

  return null;
}
