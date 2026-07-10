import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarDay,
  FaConciergeBell,
  FaGlassCheers,
  FaGuitar,
  FaMapMarkerAlt,
  FaMicrophoneAlt,
  FaMoon,
  FaMusic,
  FaRegClock,
  FaStar,
  FaUtensils,
  FaWineGlassAlt,
} from "react-icons/fa";
import MapEmbed from "./MapEmbed";
import ResponsiveImage from "./ResponsiveImage";
import { PHONE_TEL, UBER_EATS_URL } from "./siteConfig";

export default function Home() {
  const [modal, setModal] = useState(null);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const hour = now.getHours();
  const isOpen = hour >= 10;
  const serviceStatus = isOpen
    ? "Open now · closes midnight"
    : "Closed · opens 10am";

  const events = [
    {
      day: "Wednesday",
      title: "Karaoke Night",
      time: "Open mic • 7:30 PM",
      note: "Warm up the week with dinner, drinks, and a table that turns into a stage.",
      Icon: FaMicrophoneAlt,
    },
    {
      day: "Friday",
      title: "Live Band",
      time: "Band • 7:30 PM",
      note: "A proper Friday mood: plates on the table, glasses raised, live sound in the room.",
      Icon: FaGuitar,
    },
    {
      day: "Saturday",
      title: "Live Music",
      time: "8:00 PM",
      note: "Weekend dinner energy with live music, cocktails, and a room that stays alive.",
      Icon: FaMusic,
    },
  ];

  const dishes = [
    {
      name: "Cheese Kottu",
      desc: "1kg portion of creamy goodness. One of our best-selling dishes.",
      img: "/images/food1.jpg",
      alt: "Cheese kottu served at Sensasia Restaurant and Bar",
    },
    {
      name: "Pepper Pork",
      desc: "Juicy pork, fiery pepper, irresistible flavor.",
      img: "/images/food2.jpg",
      alt: "Pepper pork dish from Sensasia's Asian fusion kitchen",
    },
    {
      name: "Signature Fried Handallo",
      desc: "Crunchy, flavorful handallo with island spice.",
      img: "/images/food3.jpg",
      alt: "Signature fried handallo with crisp texture and island spice",
    },
    {
      name: "Sensasia Special Rice",
      desc: "Hearty mixed meat rice, bursting with flavor in every bite.",
      img: "/images/food4.jpg",
      alt: "Sensasia special rice served for sharing",
    },
  ];

  const amenities = [
    {
      Icon: FaMoon,
      title: "Warm Dining Ambience",
      desc: "Low light, intimate tables, and a room that feels good after dark.",
    },
    {
      Icon: FaConciergeBell,
      title: "Asian Fusion Signatures",
      desc: "Comforting favorites sharpened with Sensasia’s spice, texture, and technique.",
    },
    {
      Icon: FaWineGlassAlt,
      title: "Cocktails & Bar Nights",
      desc: "Balanced classics and colorful house pours built around the evening.",
    },
    {
      Icon: FaMusic,
      title: "Weekly Live Energy",
      desc: "Karaoke, live bands, and live music nights without losing the dinner mood.",
    },
    {
      Icon: FaGlassCheers,
      title: "Gatherings That Flow",
      desc: "Family dinners, dates, birthdays, and friends who stay for one more round.",
    },
  ];

  const spotlightDetails = {
    food: {
      title: "Sensasia’s Special — Creamy Prawn",
      desc: "Juicy prawns tossed in our signature creamy sauce · rich, savory, and mildly spiced with Asian flavors.",
      img: "/images/spotlight.jpg",
      alt: "Creamy prawn house special at Sensasia Restaurant and Bar",
    },
    drink: {
      title: "Blue Margarita",
      desc: "A vibrant Rum and Vodka based cocktail · blue curaçao · lime juice · perfectly chilled with a citrus kick.",
      img: "/images/bar-special.jpg",
      alt: "Blue Margarita cocktail from the Sensasia bar",
    },
  };

  return (
    <main className="page-root">
      {/* HERO */}
      <section
        className="hero hero-tinted"
        aria-label="Sensasia Restaurant and Bar dining room in Ragama"
      >
        <ResponsiveImage
          src="/images/hero-bg.jpg"
          alt=""
          className="hero-bg"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-inner container" role="banner" style={{ zIndex: 2 }}>
          <div className="hero-content">
            <div className="hero-pretitle">Asian Fusion · Cocktail Bar · Ragama · Since 2012</div>
            <div className="hero-status" role="status" aria-live="polite">
              <span className={isOpen ? "hero-status-dot is-open" : "hero-status-dot"} />
              {serviceStatus}
            </div>
            <h1 className="hero-heading">Authentic Asian Fusion Cuisine</h1>

            <div className="hero-actions">
              <a
                className="btn btn-primary-hero"
                href={UBER_EATS_URL}
                target="_blank"
                rel="noreferrer"
              >
                Order Online — Uber Eats
              </a>
              <Link className="btn-secondary-hero" to="/menu">
                View Menu
              </Link>

            </div>
            <p className="hero-paragraph muted" style={{ marginTop: 16 }}>
              A refined restaurant and bar in Ragama for Asian fusion Sri Lanka flavors,
              seasonal ingredients, craft cocktails, and warm evenings with family and friends.
            </p>
            <div className="hero-micro-grid" aria-label="Quick Sensasia highlights">
              <span><FaMapMarkerAlt /> Ragama</span>
              <span><FaRegClock /> Open daily</span>
              <span><FaStar /> Live nights</span>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-strip container flow-section" aria-label="Sensasia experience">
        <div className="experience-item experience-item-main">
          <span>Start here</span>
          <h2>Dinner, drinks, and live nights in one room.</h2>
        </div>
        <div className="experience-item">
          <strong>Reserve</strong>
          <p>Call ahead for tables and gatherings.</p>
        </div>
        <div className="experience-item">
          <strong>Order</strong>
          <p>Browse food, drinks, and Uber Eats.</p>
        </div>
        <div className="experience-item">
          <strong>Stay</strong>
          <p>Karaoke, live bands, and live music nights.</p>
        </div>
      </section>

      {/* WEEKLY LINEUP */}
      <section className="section schedule container flow-section home-art-section">
        <div className="section-overline"><FaCalendarDay /> Weekly Lineup</div>
        <h2 className="section-title">Our week at Sensasia</h2>
        <p className="muted section-lead">At Sensasia, every night is special. Discover our regular evenings filled with flavor and rhythm.</p>

        <div className="large-schedule-grid">
          {events.map((event, idx) => (
            <div className="event-card" key={idx}>
              <div className="event-icon"><event.Icon /></div>
              <div className="event-info">
                <div className="event-day">{event.day}</div>
                <div className="event-title">{event.title}</div>
                <div className="event-time muted">{event.time}</div>
                <p className="event-note">{event.note}</p>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-outline small-btn">
                  Reserve Now <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPOTLIGHTS */}
      <section className="section spotlights container flow-section home-art-section">
        <div className="section-overline"><FaStar /> House Specials</div>
        <div className="art-section-title-row">
          <h2 className="section-title">Two reasons to lean in.</h2>
          <p className="muted section-lead">A creamy house favorite from the kitchen and a blue-lit cocktail from the bar.</p>
        </div>
        <div className="spotlights-grid">
          <article
            className="spotlight-card tinted clickable"
            onClick={() => setModal("food")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setModal("food");
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="View details for Sensasia's Special Creamy Prawn"
          >
            <ResponsiveImage
              src="/images/spotlight.jpg"
              alt=""
              className="card-media"
              sizes="(max-width: 700px) 100vw, 58vw"
            />
            <div className="spotlight-inner" style={{ zIndex: 2 }}>
              <div className="spotlight-label">Spotlight</div>
              <div className="spotlight-title">Sensasia's Special - Creamy Prawn</div>
              <div className="spotlight-desc muted">
                Creamy Cheese Sauce · Fresh Peeled Prawns
              </div>
              <span className="card-cue">Tap to view details <FaArrowRight /></span>
            </div>
          </article>

          <article
            className="spotlight-card spotlight-drink tinted clickable"
            onClick={() => setModal("drink")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setModal("drink");
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="View details for the Blue Margarita bar special"
          >
            <ResponsiveImage
              src="/images/bar-special.jpg"
              alt=""
              className="card-media"
              sizes="(max-width: 700px) 100vw, 42vw"
            />
            <div className="spotlight-inner" style={{ zIndex: 2 }}>
              <div className="spotlight-label">Bar Special</div>
              <div className="spotlight-title">Blue Margarita</div>
              <div className="spotlight-desc muted">
                Rum · Vodka · Citrus · Honey · Blue Curaçao
              </div>
              <span className="card-cue">Tap to view details <FaArrowRight /></span>
            </div>
          </article>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section featured container flow-section home-art-section featured-art">
        <div className="section-overline"><FaUtensils /> From the Kitchen</div>
        <h2 className="section-title">Featured Highlights</h2>
        <p className="muted section-lead">
          A handpicked selection of our most-loved dishes, prepared with care and flavor in every detail.
        </p>

        <div className="featured-grid">
          {dishes.map((dish) => (
            <article
              className="featured-card tinted"
              key={dish.name}
              aria-label={`${dish.name}: ${dish.desc}`}
            >
              <ResponsiveImage
                src={dish.img}
                alt=""
                className="card-media"
                sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 25vw"
              />
              <div className="featured-meta" style={{ zIndex: 2 }}>
                <div>
                  <div className="featured-name">{dish.name}</div>
                  <div className="muted">{dish.desc}</div>
                </div>
                <FaArrowRight className="dish-arrow" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section className="container amenities-wrap flow-section home-art-section">
        <div className="night-flow-panel">
          <div className="night-flow-intro">
            <div className="section-overline"><FaMoon /> Why it works</div>
            <h2 className="section-title">The night has a natural flow.</h2>
            <p className="muted section-lead">Every detail should feel connected: the table, the plate, the glass, the music, and the people around you. It is a bar in Ragama built for dinner that becomes a night out.</p>
          </div>
          <div className="amenities-grid">
            {amenities.map(({ Icon, title, desc }) => (
              <div className="amenity-card" key={title}>
                <div className="amenity-icon"><Icon /></div>
                <div className="amenity-copy">
                  <h3 className="amenity-title">{title}</h3>
                  <p className="amenity-desc muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section map-contact container">
        <div className="map-block">
          <h3 className="block-title">Find Us</h3>
          <MapEmbed className="map-wrap" />
        </div>
      </section>

      {/* MODAL */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <ResponsiveImage
              src={spotlightDetails[modal].img}
              alt={spotlightDetails[modal].alt}
              className="modal-image"
              sizes="520px"
            />
            <h2>{spotlightDetails[modal].title}</h2>
            <p>{spotlightDetails[modal].desc}</p>
            <button className="btn btn-outline" onClick={() => setModal(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
