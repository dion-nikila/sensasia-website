import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SEO, SITE } from "./data";

const meta = (selector, attrs) => {
  let node = document.head.querySelector(selector);
  if (!node) { node = document.createElement("meta"); document.head.appendChild(node); }
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
};
const absolute = (path) => new URL(path, window.location.origin).href;
const setSchema = (pathname) => {
  document.querySelectorAll("script[data-sensasia-schema]").forEach((node) => node.remove());
  const schemas = [{
    "@context": "https://schema.org", "@type": ["Restaurant", "BarOrPub"], "@id": `${absolute("/")}#venue`, name: SITE.name,
    url: absolute("/"), telephone: SITE.phoneSchema, image: [absolute("/images/hero-bg.jpg"), absolute("/images/food4.jpg"), absolute("/images/bar-special.jpg")],
    description: "Asian-fusion restaurant, pub, cocktail bar and live-entertainment venue on Peralanda Road in Ragama.",
    address: { "@type": "PostalAddress", streetAddress: SITE.street, addressLocality: SITE.locality, addressRegion: SITE.region, postalCode: SITE.postcode, addressCountry: "LK" },
    servesCuisine: ["Asian Fusion", "Sri Lankan"], menu: absolute("/menu"), hasMap: SITE.map, acceptsReservations: true,
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "10:00", closes: "23:59" }], sameAs: [SITE.facebook, SITE.instagram],
  }, { "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: absolute("/") }];
  if (pathname !== "/" && SEO[pathname]) schemas.push({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absolute("/") }, { "@type": "ListItem", position: 2, name: SEO[pathname].title.split("|")[0].trim(), item: absolute(pathname) }] });
  schemas.forEach((schema) => { const node = document.createElement("script"); node.type = "application/ld+json"; node.dataset.sensasiaSchema = "true"; node.textContent = JSON.stringify(schema); document.head.appendChild(node); });
};

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const key = SEO[pathname] ? pathname : "/404"; const seo = SEO[key]; const canonical = absolute(key === "/404" ? pathname : key); const image = absolute(seo.image);
    document.title = seo.title;
    let link = document.head.querySelector('link[rel="canonical"]'); if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); } link.href = canonical;
    meta('meta[name="description"]', { name: "description", content: seo.description });
    [["og:title",seo.title],["og:description",seo.description],["og:image",image],["og:url",canonical],["og:type","website"]].forEach(([property,content])=>meta(`meta[property="${property}"]`,{property,content}));
    [["twitter:card","summary_large_image"],["twitter:title",seo.title],["twitter:description",seo.description],["twitter:image",image]].forEach(([name,content])=>meta(`meta[name="${name}"]`,{name,content}));
    meta('meta[name="robots"]', { name: "robots", content: key === "/404" ? "noindex, follow" : "index, follow" }); setSchema(key);
  }, [pathname]);
  return null;
}
