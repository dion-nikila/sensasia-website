import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaDirections,
  FaMusic,
  FaPhoneAlt,
  FaRegClock,
  FaTv,
  FaUtensils,
} from "react-icons/fa";
import PageHero from "./PageHero";
import ResponsiveImage from "./ResponsiveImage";
import { DISCOVERY_LINKS, EVENTS, MENU_HIGHLIGHTS, SITE } from "./data";

const PAGE_CONTENT = {
  family: {
    path: "/family-dining",
    className: "family",
    eyebrow: "Family dining · Ragama",
    title: "A table for the whole family.",
    copy: "Plan a relaxed Asian-fusion meal at Sensasia on Peralanda Road, with familiar favourites, sharing plates and drinks for the table.",
    image: "/images/food4.jpg",
    alt: "A rice dish served for sharing",
    introEyebrow: "Family meals at Sensasia",
    introTitle: "Choose the dishes. Share the table.",
    introCopy: "Sensasia is open daily for dine-in meals. Browse the current food and drinks menus before you visit, and call the restaurant directly if you would like to arrange a table for a larger family group.",
    facts: [
      `Open daily · ${SITE.hours}`,
      "Asian-fusion and Sri Lankan favourites",
      "Food and drinks menus available online",
    ],
  },
  live: {
    path: "/live-music",
    className: "live",
    eyebrow: "Live music & karaoke · Ragama",
    title: "Dinner gets louder.",
    copy: "Sensasia's regular week includes karaoke, a live band and live music alongside dinner and drinks.",
    image: "/images/about2.jpg",
    alt: "A singer performing live at Sensasia in Ragama",
    introEyebrow: "Regular live nights",
    introTitle: "A weekly reason to stay later.",
    introCopy: "The published line-up below is Sensasia's regular schedule. Entertainment can change, so call before travelling if a particular performance is the reason for your visit.",
    facts: [
      "Wednesday karaoke",
      "Friday live band",
      "Saturday live music",
    ],
  },
  sports: {
    path: "/sports-screenings",
    className: "sports",
    eyebrow: "Big-screen sports · Ragama",
    title: "The match belongs on a big screen.",
    copy: "Sensasia shows selected sporting moments on its in-venue projector, with food for the table and drinks from the bar.",
    image: "/images/big-screen-match.jpg",
    alt: "A football match shown on the big screen at Sensasia in Ragama",
    introEyebrow: "Selected sports screenings",
    introTitle: "Confirm the match, then plan the table.",
    introCopy: "Broadcast availability depends on the event and schedule. Call Sensasia before travelling for a specific match so the team can confirm what is being shown and discuss a table.",
    facts: [
      "Projector and large in-venue screen",
      "Food and drinks menus available",
      "Call ahead for a specific screening",
    ],
  },
};

function FamilyDetails() {
  const highlights = MENU_HIGHLIGHTS.filter((item) => item !== "Margarita Blue").slice(0, 5);
  return (
    <section className="lex-feature lex-feature-family container">
      <ResponsiveImage
        src="/images/about1.jpg"
        alt="Guests sharing a night at Sensasia Restaurant and Bar"
        className="lex-feature-media"
        imageClassName="lex-feature-image"
        sizes="(max-width: 760px) 100vw, 52vw"
      />
      <div className="lex-feature-copy">
        <p className="eyebrow">From the kitchen</p>
        <h2>Start with familiar favourites.</h2>
        <p>The menu includes rice, seafood, kottu and house dishes that can be ordered together for the table.</p>
        <ul className="lex-menu-list" aria-label="Selected food menu highlights">
          {highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <Link className="text-link" to="/menu">Explore the food and drinks menu <FaArrowRight /></Link>
      </div>
    </section>
  );
}

function LiveDetails() {
  return (
    <section className="lex-live-section section">
      <div className="container lex-live-layout">
        <div className="lex-live-copy">
          <p className="eyebrow light"><FaMusic /> Regular weekly line-up</p>
          <h2>Three nights on the calendar.</h2>
          <p>Come for dinner, drinks or the performance. Call ahead before travelling for a specific act.</p>
          <a className="button button-cream" href={`tel:${SITE.phoneTel}`}><FaPhoneAlt /> Confirm tonight's line-up</a>
        </div>
        <div className="lex-lineup" aria-label="Sensasia regular weekly entertainment">
          {EVENTS.map(({ day, title, time, Icon }) => (
            <article key={day}>
              <Icon aria-hidden="true" />
              <div><span>{day}</span><h3>{title}</h3><p>{time}</p></div>
            </article>
          ))}
          <p className="lex-schedule-note">Schedules can change. Please call before travelling for a particular event.</p>
        </div>
      </div>
    </section>
  );
}

function SportsDetails() {
  const steps = [
    ["01", "Call Sensasia and confirm the screening."],
    ["02", "Browse the food and drinks menus."],
    ["03", "Arrange a table and settle in for the event."],
  ];
  return (
    <section className="lex-feature lex-feature-sports container">
      <ResponsiveImage
        src="/images/about5.jpg"
        alt="The stocked bar at Sensasia Restaurant and Bar"
        className="lex-feature-media"
        imageClassName="lex-feature-image"
        sizes="(max-width: 760px) 100vw, 52vw"
      />
      <div className="lex-feature-copy">
        <p className="eyebrow"><FaTv /> Plan a screening</p>
        <h2>Food, drinks and the event.</h2>
        <p>Sensasia does not publish a fixed online broadcast calendar. The most reliable way to plan a sports night is to call the venue directly.</p>
        <ol className="lex-step-list">
          {steps.map(([number, text]) => <li key={number}><span>{number}</span>{text}</li>)}
        </ol>
        <a className="text-link" href={`tel:${SITE.phoneTel}`}>Call {SITE.phoneDisplay} <FaArrowRight /></a>
      </div>
    </section>
  );
}

function DiscoveryLinks({ currentPath }) {
  return (
    <section className="lex-discovery section container" aria-labelledby="lex-discovery-title">
      <div>
        <p className="eyebrow">More ways to visit</p>
        <h2 id="lex-discovery-title">Plan the rest of the night.</h2>
      </div>
      <div className="lex-discovery-grid">
        {DISCOVERY_LINKS.filter(({ to }) => to !== currentPath).map(({ number, label, title, to, copy }) => (
          <article key={to}>
            <span>{number} — {label}.</span>
            <h3><Link to={to}>{title}</Link></h3>
            <p>{copy}</p>
            <Link className="text-link" to={to}>Explore <FaArrowRight /></Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function LocalExperiencePage({ experience }) {
  const page = PAGE_CONTENT[experience] || PAGE_CONTENT.family;
  return (
    <main className={`local-experience local-experience-${page.className}`}>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        copy={page.copy}
        image={page.image}
        alt={page.alt}
      />

      <section className="lex-intro section container">
        <div>
          <p className="eyebrow">{page.introEyebrow}</p>
          <h2>{page.introTitle}</h2>
        </div>
        <div className="lex-intro-copy">
          <p>{page.introCopy}</p>
          <ul>
            {page.facts.map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
          <div className="button-row">
            <a className="button button-wine" href={`tel:${SITE.phoneTel}`}><FaPhoneAlt /> Call Sensasia</a>
            <Link className="button button-outline" to="/menu"><FaUtensils /> View menus</Link>
          </div>
        </div>
      </section>

      {experience === "family" && <FamilyDetails />}
      {experience === "live" && <LiveDetails />}
      {experience === "sports" && <SportsDetails />}

      <DiscoveryLinks currentPath={page.path} />

      <section className="lex-visit">
        <div className="container lex-visit-inner">
          <div>
            <p className="eyebrow light">Visit Sensasia</p>
            <h2>Find us in Peralanda, Ragama.</h2>
          </div>
          <address>
            <span>{SITE.address}</span>
            <span><FaRegClock /> Open daily · {SITE.hours}</span>
          </address>
          <div className="button-row">
            <a className="button button-cream" href={SITE.map} target="_blank" rel="noreferrer"><FaDirections /> Get directions</a>
            <a className="button button-outline" href={`tel:${SITE.phoneTel}`}><FaPhoneAlt /> {SITE.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
