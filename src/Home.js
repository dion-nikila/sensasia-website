import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaDirections,
  FaGuitar,
  FaMapMarkerAlt,
  FaMicrophoneAlt,
  FaMusic,
  FaPhoneAlt,
  FaRegClock,
  FaShoppingBag,
  FaStar,
  FaUtensils,
} from "react-icons/fa";
import MapEmbed from "./MapEmbed";
import ResponsiveImage from "./ResponsiveImage";
import {
  MAP_LINK_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  UBER_EATS_URL,
} from "./siteConfig";

const EVENTS = [
  { day: "Wed", title: "Karaoke", time: "From 7:30 PM", Icon: FaMicrophoneAlt },
  { day: "Fri", title: "Live band", time: "From 7:30 PM", Icon: FaGuitar },
  { day: "Sat", title: "Live music", time: "From 8:00 PM", Icon: FaMusic },
];

const DISHES = [
  {
    name: "Creamy Prawn",
    note: "A theatrical house signature, finished tableside.",
    image: "/images/spotlight.jpg",
    alt: "Sensasia creamy prawn house special in Peralanda, Ragama",
    className: "signature-card signature-card-large",
  },
  {
    name: "Sensasia Special Rice",
    note: "A generous mixed-meat favourite made for sharing.",
    image: "/images/food4.jpg",
    alt: "Sensasia special fried rice served in Ragama",
    className: "signature-card",
  },
  {
    name: "Blue Margarita",
    note: "Bright citrus, blue curaçao and a proper bar-night mood.",
    image: "/images/bar-special.jpg",
    alt: "Blue Margarita cocktail at Sensasia Restaurant and Bar",
    className: "signature-card",
  },
];

const FAQS = [
  {
    question: "Where is Sensasia Restaurant and Bar?",
    answer:
      "We are on Peralanda Road in Ragama, Western Province. Tap Directions for the live Google Maps route.",
  },
  {
    question: "What food does Sensasia serve?",
    answer:
      "Our menu centres on Asian fusion and Sri Lankan favourites, with sharing plates, seafood, rice, kottu and a full cocktail bar.",
  },
  {
    question: "Does Sensasia have live entertainment?",
    answer:
      "Yes. Our regular line-up includes Wednesday karaoke, a Friday live band and Saturday live music. Schedules can change, so call before travelling for a specific event.",
  },
];

export default function Home() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const sriLankaHour = Number(
    new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      hour12: false,
      timeZone: "Asia/Colombo",
    }).format(now)
  );
  const isOpen = sriLankaHour >= 10 && sriLankaHour < 24;

  return (
    <main className="home-revamp">
      <section className="new-hero" aria-labelledby="home-heading">
        <ResponsiveImage
          src="/images/hero-bg.jpg"
          alt=""
          className="new-hero-media"
          imageClassName="new-hero-image"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
        <div className="new-hero-shade" />
        <div className="new-hero-inner container">
          <div className="new-hero-copy">
            <div className="hero-local-label">
              <FaMapMarkerAlt aria-hidden="true" /> Peralanda Road · Ragama
            </div>
            <p className="hero-kicker">Asian fusion restaurant · cocktail bar · since 2012</p>
            <h1 id="home-heading">
              Ragama’s spot for{" "}
              <span>dinner, drinks & live music.</span>
            </h1>
            <p className="new-hero-lead">
              Asian fusion favourites, a full bar and live entertainment on
              Peralanda Road. Come for dinner. Stay for the night.
            </p>
            <div className="new-hero-actions">
              <Link className="action-button action-button-primary" to="/menu">
                Explore the menu <FaArrowRight aria-hidden="true" />
              </Link>
              <a className="action-button action-button-ghost" href={`tel:${PHONE_TEL}`}>
                <FaPhoneAlt aria-hidden="true" /> Reserve a table
              </a>
            </div>
            <div className="hero-facts" aria-label="Restaurant details">
              <span className={isOpen ? "open-pill is-open" : "open-pill"}>
                <i aria-hidden="true" /> {isOpen ? "Open now · until midnight" : "Opens daily at 10 AM"}
              </span>
              <span><FaStar aria-hidden="true" /> Live nights weekly</span>
            </div>
          </div>

          <aside className="hero-feature-card" aria-label="Sensasia opening information">
            <span className="feature-number">10</span>
            <span className="feature-years">AM<br />daily</span>
            <div className="feature-rule" />
            <p>Open until midnight.<br />Call ahead for a table.</p>
          </aside>
        </div>
      </section>

      <section className="mobile-intent-bar" aria-label="Quick actions">
        <Link to="/menu"><FaUtensils /> <span>Menu</span></Link>
        <a href={`tel:${PHONE_TEL}`}><FaPhoneAlt /> <span>Call</span></a>
        <a href={MAP_LINK_URL} target="_blank" rel="noreferrer"><FaDirections /> <span>Directions</span></a>
        <a href={UBER_EATS_URL} target="_blank" rel="noreferrer"><FaShoppingBag /> <span>Order</span></a>
      </section>

      <section id="start" className="intro-section container">
        <div className="section-marker">Sensasia · Peralanda Road</div>
        <div className="intro-grid">
          <h2>A neighbourhood favourite since 2012.</h2>
          <div className="intro-copy">
            <p>
              Sensasia is a relaxed restaurant and pub bar in Peralanda, Ragama.
              We serve Asian fusion and Sri Lankan favourites, cocktails and sharing
              plates in a space made for family dinners, date nights and evenings with friends.
            </p>
            <div className="intro-proof">
              <span><FaCheckCircle /> Open every day</span>
              <span><FaCheckCircle /> Dine-in & delivery</span>
              <span><FaCheckCircle /> Live entertainment</span>
            </div>
          </div>
        </div>
      </section>

      <section className="signature-section container" aria-labelledby="signature-heading">
        <div className="section-heading-row">
          <div>
            <div className="section-marker">Popular at Sensasia</div>
            <h2 id="signature-heading">House favourites.</h2>
          </div>
          <Link to="/menu" className="text-link">See full food & drinks menu <FaArrowRight /></Link>
        </div>
        <div className="signature-grid">
          {DISHES.map((dish, index) => (
            <article className={dish.className} key={dish.name}>
              <ResponsiveImage
                src={dish.image}
                alt={dish.alt}
                className="signature-media"
                imageClassName="signature-image"
                sizes={index === 0 ? "(max-width: 760px) 92vw, 56vw" : "(max-width: 760px) 92vw, 28vw"}
              />
              <div className="signature-overlay" />
              <div className="signature-copy">
                <span>0{index + 1}</span>
                <h3>{dish.name}</h3>
                <p>{dish.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lineup-section">
        <div className="lineup-inner container">
          <div className="lineup-intro">
            <div className="section-marker section-marker-light"><FaCalendarAlt /> Weekly events</div>
            <h2>What’s on this week.</h2>
            <p>Karaoke, bands and live music every week. Order dinner, get a round in and enjoy the show.</p>
            <a href={`tel:${PHONE_TEL}`} className="action-button action-button-light">
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <div className="event-stack">
            {EVENTS.map(({ day, title, time, Icon }) => (
              <article className="new-event-card" key={day}>
                <span className="event-day-new">{day}</span>
                <Icon aria-hidden="true" />
                <div><h3>{title}</h3><p>{time}</p></div>
              </article>
            ))}
            <p className="schedule-note">Event times can change. Call ahead to confirm tonight’s line-up.</p>
          </div>
        </div>
      </section>

      <section className="experience-section container">
        <div className="experience-photo">
          <ResponsiveImage
            src="/images/about1.jpg"
            alt="Guests gathered around a table at Sensasia Restaurant and Bar in Ragama"
            className="experience-media"
            imageClassName="experience-image"
            sizes="(max-width: 760px) 100vw, 52vw"
          />
        </div>
        <div className="experience-copy">
          <div className="section-marker">Dine · drink · stay</div>
          <h2>A proper night out, all in one place.</h2>
          <p>
            Start with dinner, move on to cocktails and stay for the music.
            Sensasia works just as well for a quiet meal as it does for a birthday
            table or a Friday out with friends.
          </p>
          <div className="experience-list">
            <span><strong>01</strong> Warm, relaxed dining</span>
            <span><strong>02</strong> Cocktails & full bar</span>
            <span><strong>03</strong> Karaoke & live music</span>
          </div>
          <Link to="/about" className="text-link">Meet Sensasia <FaArrowRight /></Link>
        </div>
      </section>

      <section className="visit-section container" aria-labelledby="visit-heading">
        <div className="visit-details">
          <div className="section-marker">Visit Sensasia</div>
          <h2 id="visit-heading">Find us on Peralanda Road.</h2>
          <div className="visit-info-row">
            <FaMapMarkerAlt /><div><strong>Peralanda Road</strong><span>Ragama 11010, Sri Lanka</span></div>
          </div>
          <div className="visit-info-row">
            <FaRegClock /><div><strong>Open daily</strong><span>10:00 AM – Midnight</span></div>
          </div>
          <div className="visit-actions">
            <a className="action-button action-button-primary" href={MAP_LINK_URL} target="_blank" rel="noreferrer">
              Get directions <FaDirections />
            </a>
            <a className="text-link" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          </div>
        </div>
        <MapEmbed className="visit-map" />
      </section>

      <section className="faq-section container" aria-labelledby="faq-heading">
        <div>
          <div className="section-marker">Plan your visit</div>
          <h2 id="faq-heading">Before you visit.</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}<span aria-hidden="true">+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
