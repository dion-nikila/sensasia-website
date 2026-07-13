import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck, FaCocktail, FaDirections, FaMapMarkerAlt, FaPause, FaPhoneAlt, FaPlay, FaRegClock, FaTv } from "react-icons/fa";
import ResponsiveImage from "./ResponsiveImage";
import MapEmbed from "./MapEmbed";
import Events from "./Events";
import SectionEyebrow from "./SectionEyebrow";
import { SITE } from "./data";

const experiences = [
  { title: "Cocktails & full bar", copy: "Signature cocktails, classics, bottles and the right drink for every kind of night.", image: "/images/bar-special.jpg", link: "/menu", label: "See drinks" },
  { title: "Asian-fusion food", copy: "House favourites, seafood, rice, kottu and plates made for sharing.", image: "/images/food3.jpg", link: "/menu", label: "Explore food" },
  { title: "Big-screen moments", copy: "Bring the group, order a round and catch the entertainment on large screens.", image: "/images/big-screen-match.jpg" },
  { title: "Live music & karaoke", copy: "Weekly karaoke, live bands and music that keeps the table around a little longer.", image: "/images/about4.jpg", link: "#whats-on", label: "See the line-up" },
];
const dishes = [
  { title: "Creamy Prawn", copy: "A theatrical house signature, finished tableside.", image: "/images/spotlight.jpg" },
  { title: "Sensasia Special Rice", copy: "A generous mixed-meat favourite made for sharing.", image: "/images/food4.jpg" },
  { title: "Blue Margarita", copy: "Bright citrus, blue curaçao and a proper bar-night mood.", image: "/images/bar-special.jpg" },
];
const faqs = [
  ["Where is Sensasia located?", `Sensasia is on ${SITE.address}. Use the directions link for a live Google Maps route.`],
  ["What type of food does Sensasia serve?", "The menu centres on Asian-fusion and Sri Lankan favourites, including sharing plates, seafood, rice and kottu."],
  ["Does Sensasia have live entertainment?", "Yes. The regular line-up includes Wednesday karaoke, a Friday live band and Saturday live music. Call ahead to confirm."],
  ["Can I reserve a table?", `Yes. Reservations are handled by phone. Call ${SITE.phoneDisplay} to speak with the team.`],
  ["Can I order for delivery?", "Yes. Online ordering is available through the Sensasia Uber Eats page."],
  ["What are the opening hours?", `Sensasia is open daily from ${SITE.hours}.`],
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [tickerPaused, setTickerPaused] = useState(false);
  const [showGallery, setShowGallery] = useState(() => typeof window !== "undefined" && window.innerWidth > 700);
  useEffect(() => {
    const check = () => { const hour = Number(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", hour12: false, timeZone: "Asia/Colombo" }).format(new Date())); setOpen(hour >= 10 && hour < 24); };
    check(); const id = setInterval(check, 60000); return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const query = window.matchMedia("(min-width: 701px)");
    const update = () => setShowGallery(query.matches);
    update();
    if (query.addEventListener) query.addEventListener("change", update);
    else query.addListener?.(update);
    return () => {
      if (query.removeEventListener) query.removeEventListener("change", update);
      else query.removeListener?.(update);
    };
  }, []);
  return (
    <main>
      <section className="hero">
        <ResponsiveImage src="/images/hero-bg.jpg" alt="" className="hero-media" imageClassName="hero-image" sizes="100vw" loading="eager" fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow light">Asian fusion · cocktail bar · live entertainment</p>
            <h1>Proper cocktails. <em>A better night out</em> in Ragama.</h1>
            <p className="hero-lead">Start with a drink made properly. Add Asian-fusion favourites, live music, karaoke and the biggest moments on screen.</p>
            <div className="button-row"><Link className="button button-wine" to="/menu">View the menu <FaArrowRight/></Link><a className="button button-outline" href={`tel:${SITE.phoneTel}`}>Reserve a table <FaPhoneAlt/></a></div>
            <a className="hero-text-link" href="#whats-on">See what’s on <FaArrowRight/></a>
          </div>
          <aside className="hero-utility" aria-label="Venue details">
            <span className={`status ${open ? "open" : ""}`}><i/>{open ? "Open now" : "Currently closed"}</span>
            <p><FaRegClock/> Daily · {SITE.hours}</p><p><FaMapMarkerAlt/> Peralanda Road · Ragama</p><p>Established {SITE.since}</p>
          </aside>
          <a className="mobile-scroll-cue" href="#welcome"><span>Scroll to explore</span><i aria-hidden="true" /></a>
        </div>
      </section>

      <section className="venue-ticker" aria-label="Sensasia experiences">
        <div className={`venue-ticker-track ${tickerPaused ? "is-paused" : ""}`}>
          {[0, 1].map((group) => (
            <div className="venue-ticker-group" aria-hidden={group === 1} key={group}>
              <span>Asian-fusion food</span><i/>
              <span>Proper cocktails</span><i/>
              <span>Big-screen nights</span><i/>
              <span>Live music</span><i/>
              <span>Karaoke</span><i/>
            </div>
          ))}
        </div>
        <button className="venue-ticker-toggle" type="button" aria-pressed={tickerPaused} aria-label={tickerPaused ? "Resume scrolling highlights" : "Pause scrolling highlights"} onClick={() => setTickerPaused((paused) => !paused)}>
          {tickerPaused ? <FaPlay aria-hidden="true" /> : <FaPause aria-hidden="true" />}
        </button>
      </section>

      <section id="welcome" className="intro section container">
        <div><SectionEyebrow number="01">A Ragama favourite since 2012</SectionEyebrow><h2>Good food deserves another round.</h2></div>
        <div className="intro-copy"><p>Sensasia is Ragama’s neighbourhood spot for dinner, cocktails, the match and live nights—whether you’re bringing family, friends or the whole group.</p><div className="proof"><span><FaCheck/> Open every day</span><span><FaCheck/> Dine-in & delivery</span><span><FaCheck/> Weekly entertainment</span></div></div>
      </section>

      <section className="section experiences container">
        <div className="section-heading"><div><SectionEyebrow>Choose your night</SectionEyebrow><h2>What are you here for?</h2></div><p>Food, a proper bar, big screens and a weekly line-up—all under one roof on Peralanda Road.</p></div>
        <div className="experience-grid">{experiences.map((item, i) => <article className="experience-card" key={item.title}><ResponsiveImage src={item.image} alt={`${item.title} at Sensasia in Ragama`} className="card-media" imageClassName="card-image" sizes="(max-width: 760px) 46vw, 50vw"/><div className="card-shade"/><span className="card-number">0{i+1}</span><div className="card-copy"><h3>{item.title}</h3><p>{item.copy}</p>{item.link && (item.link.startsWith("#") ? <a href={item.link}>{item.label} <FaArrowRight/></a> : <Link to={item.link}>{item.label} <FaArrowRight/></Link>)}</div></article>)}</div>
      </section>

      <section className="cocktail-takeover" aria-labelledby="cocktail-heading">
        <ResponsiveImage src="/images/bar-special.jpg" alt="Blue Margarita cocktail at Sensasia in Ragama" className="cocktail-takeover-media" imageClassName="cocktail-takeover-image" sizes="100vw" />
        <div className="cocktail-takeover-shade" />
        <div className="container cocktail-takeover-inner">
          <div className="cocktail-giant" aria-hidden="true">POUR</div>
          <div className="cocktail-copy">
            <SectionEyebrow number="02" light Icon={FaCocktail}>The Sensasia bar</SectionEyebrow>
            <h2 id="cocktail-heading">Your night deserves <em>a proper cocktail.</em></h2>
            <p>Signature serves, familiar classics, spirits, beer, wine and non-alcoholic choices. Start at the bar, take it to the table and stay for what happens next.</p>
            <div className="cocktail-tags" aria-label="Drinks available"><span>Signature cocktails</span><span>Classics</span><span>Full bar</span></div>
            <a className="button button-cream" href={SITE.drinksMenu} target="_blank" rel="noreferrer">Explore the drinks menu <FaArrowRight/></a>
          </div>
        </div>
      </section>

      <section className="section signature container">
        <div className="section-heading"><div><SectionEyebrow>Plates & pours</SectionEyebrow><h2>House favourites.</h2></div><Link className="text-link" to="/menu">Full food & drinks menu <FaArrowRight/></Link></div>
        <div className="signature-grid">{dishes.map((dish, i) => <article className={i === 0 ? "dish-card featured" : "dish-card"} key={dish.title}><ResponsiveImage src={dish.image} alt={`${dish.title} at Sensasia`} className="card-media" imageClassName="card-image" sizes={i === 0 ? "(max-width: 760px) 92vw, 58vw" : "(max-width: 760px) 92vw, 30vw"}/><div className="card-shade"/><div className="card-copy"><span>0{i+1}</span><h3>{dish.title}</h3><p>{dish.copy}</p></div></article>)}</div>
      </section>

      <section id="whats-on" className="events-section section"><div className="container events-grid"><div><SectionEyebrow number="03" light>Every week in Ragama</SectionEyebrow><h2>What’s on.</h2><p>Karaoke, live bands and music with dinner and a full bar. Call ahead if you are travelling for a specific night.</p><a className="button button-cream" href={`tel:${SITE.phoneTel}`}>Call to reserve <FaPhoneAlt/></a></div><Events/></div></section>

      <section id="big-screen" className="screen-section section container"><div className="screen-image"><ResponsiveImage src="/images/big-screen-match.jpg" alt="A football match shown on the big screen at Sensasia in Ragama" className="full-media" imageClassName="card-image screen-match-image" sizes="(max-width:760px) 100vw, 55vw"/><div className="screen-image-shade"/><span className="screen-live-tag"><i aria-hidden="true"/> Big screen in the venue</span></div><div className="screen-copy"><SectionEyebrow Icon={FaTv}>Big-screen entertainment</SectionEyebrow><h2>Big games. Big screens. Full bar.</h2><p>Catch major sporting moments and entertainment with the people who make them better. Settle in with food for the table and drinks from the bar.</p><div className="night-steps"><span><b>01</b>Dinner</span><span><b>02</b>Cocktails</span><span><b>03</b>The match or music</span><span><b>04</b>One more round</span></div><a className="button button-outline screen-cta" href={`tel:${SITE.phoneTel}`}>Call for a table <FaPhoneAlt/></a></div></section>

      {showGallery && <section className="gallery section container"><div className="section-heading"><div><SectionEyebrow>Inside Sensasia</SectionEyebrow><h2>One place. Every kind of night.</h2></div></div><div className="gallery-grid">{["about1","food1","big-screen-match","about4","food2","about6"].map((name,i)=><ResponsiveImage key={name} src={`/images/${name}.jpg`} alt={["Guests dining at Sensasia","A Sensasia food dish","A football match on the big screen at Sensasia","Sensasia evening atmosphere","A dish from the Sensasia kitchen","Sensasia restaurant interior"][i]} className={`gallery-item gallery-${i+1}`} imageClassName="card-image" sizes="(max-width:760px) 50vw, 33vw"/>)}</div></section>}

      <section className="visit section container"><div className="visit-panel"><SectionEyebrow number="04">Visit Sensasia</SectionEyebrow><h2>Your table in Ragama is waiting.</h2><address><span><FaMapMarkerAlt/><b>{SITE.street}</b><small>Ragama 11010, Sri Lanka</small></span><span><FaRegClock/><b>Open daily</b><small>{SITE.hours}</small></span><span><FaPhoneAlt/><b><a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></b><small>Call to reserve</small></span></address><a className="button button-wine" href={SITE.map} target="_blank" rel="noreferrer">Get directions <FaDirections/></a></div><MapEmbed className="visit-map"/></section>

      <section className="faq section container"><div><SectionEyebrow>Before you visit</SectionEyebrow><h2>Good to know.</h2></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
    </main>
  );
}
