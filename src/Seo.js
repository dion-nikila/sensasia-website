import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  ADDRESS,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MAP_LINK_URL,
  PHONE_SCHEMA,
  SITE_NAME,
} from "./siteConfig";

const ROUTE_SEO = {
  "/": {
    title:
      "Sensasia Restaurant and Bar | Asian Fusion Cuisine & Cocktails in Ragama, Sri Lanka",
    description:
      "Sensasia Restaurant and Bar in Ragama, Sri Lanka offers Asian fusion cuisine, craft cocktails, karaoke nights, and live music daily.",
    image: "/images/hero-bg.jpg",
  },
  "/menu": {
    title: "Menu | Sensasia Restaurant and Bar, Ragama",
    description:
      "Explore Sensasia's food and drinks menu in Ragama, with Asian fusion dishes, bar favorites, cocktails, and PDF menus for quick viewing.",
    image: "/images/food4.jpg",
  },
  "/about": {
    title: "About Us | Sensasia Restaurant and Bar",
    description:
      "Learn about Sensasia Restaurant and Bar, an Asian fusion restaurant and cocktail bar in Ragama serving warm nights since 2012.",
    image: "/images/about1.jpg",
  },
  "/contact": {
    title: "Contact & Location | Sensasia Restaurant and Bar, Ragama",
    description:
      "Contact Sensasia Restaurant and Bar in Ragama for reservations, Uber Eats ordering, directions, and daily opening hours from 10AM to midnight.",
    image: "/images/logo.png",
  },
};

function absoluteUrl(path) {
  if (/^https?:\/\//i.test(path)) return path;
  const origin = window.location.origin;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function setJsonLd(path) {
  const id = "sensasia-restaurant-schema";
  const existing = document.getElementById(id);

  if (path !== "/") {
    existing?.remove();
    return;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE_NAME,
    image: [
      absoluteUrl("/images/hero-bg.jpg"),
      absoluteUrl("/images/spotlight.jpg"),
      absoluteUrl("/images/food4.jpg"),
    ],
    address: {
      "@type": "PostalAddress",
      ...ADDRESS,
    },
    telephone: PHONE_SCHEMA,
    servesCuisine: ["Asian Fusion", "Sri Lankan", "Cocktail Bar"],
    priceRange: "$$",
    url: absoluteUrl("/"),
    hasMap: MAP_LINK_URL,
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
        opens: "10:00",
        closes: "23:59",
      },
    ],
    sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
  };

  const script = existing || document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  if (!existing) document.head.appendChild(script);
}

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const pathname = ROUTE_SEO[location.pathname] ? location.pathname : "/";
    const seo = ROUTE_SEO[pathname];
    const canonical = absoluteUrl(pathname);
    const image = absoluteUrl(seo.image);

    document.title = seo.title;
    setCanonical(canonical);
    setMeta('meta[name="description"]', {
      name: "description",
      content: seo.description,
    });
    setMeta('meta[property="og:title"]', {
      property: "og:title",
      content: seo.title,
    });
    setMeta('meta[property="og:description"]', {
      property: "og:description",
      content: seo.description,
    });
    setMeta('meta[property="og:image"]', {
      property: "og:image",
      content: image,
    });
    setMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "restaurant",
    });
    setMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical,
    });
    setMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    setMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: seo.title,
    });
    setMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: seo.description,
    });
    setMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: image,
    });
    setJsonLd(pathname);
  }, [location.pathname]);

  return null;
}
