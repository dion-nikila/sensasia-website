import React, { useState } from "react";
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

export default function Home() {
  const [modal, setModal] = useState(null);

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
    },
    {
      name: "Pepper Pork",
      desc: "Juicy pork, fiery pepper, irresistible flavor.",
      img: "/images/food2.jpg",
    },
    {
      name: "Signature Fried Handallo",
      desc: "Crunchy, flavorful handallo with island spice.",
      img: "/images/food3.jpg",
    },
    {
      name: "Sensasia Special Rice",
      desc: "Hearty mixed meat rice, bursting with flavor in every bite.",
      img: "/images/food4.jpg",
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
    },
    drink: {
      title: "Blue Margarita",
      desc: "A vibrant Rum and Vodka based cocktail · blue curaçao · lime juice · perfectly chilled with a citrus kick.",
      img: "/images/bar-special.jpg",
    },
  };

  return (
    <main className="page-root">
      {/* HERO */}
      <section
        className="hero hero-tinted"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="hero-corner hero-corner-top" />
        <div className="hero-corner hero-corner-bottom" />
        <div className="hero-inner container" role="banner" style={{ zIndex: 2 }}>
          <div className="hero-content">
            <div className="hero-pretitle">Asian Fusion • Cocktail Bar • Since 2012</div>
            <h1 className="hero-heading">Authentic Asian Fusion Cuisine</h1>
            <p className="hero-sub">Since 2012</p>

            <div className="hero-actions">
              <a
                className="btn btn-primary-hero"
                href="https://www.ubereats.com/lk/store/sensasia-restaurant-ragama/xSqQwTKNRIS7aBF5YRel2g"
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
              A refined take on Asian classics. seasonal ingredients, craft cocktails,
              and warm evenings. Only the best times with family, friends and everyone in between. 
            </p>
            <div className="hero-micro-grid" aria-label="Quick Sensasia highlights">
              <span><FaMapMarkerAlt /> Ragama</span>
              <span><FaRegClock /> Open daily</span>
              <span><FaStar /> Live nights</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-experience-strip container" aria-label="Sensasia experience">
        <div className="experience-copy">
          <span>Start here</span>
          <h2>Dinner, drinks, and live nights in one room.</h2>
        </div>
        <div className="experience-points">
          <div>
            <strong>Reserve</strong>
            <p>Call ahead for tables and gatherings.</p>
          </div>
          <div>
            <strong>Order</strong>
            <p>Browse food, drinks, and Uber Eats.</p>
          </div>
          <div>
            <strong>Stay</strong>
            <p>Karaoke, live bands, and live music nights.</p>
          </div>
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
                <a href="tel:0112957700" className="btn btn-outline small-btn">
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
            style={{ backgroundImage: "url('/images/spotlight.jpg')" }}
            onClick={() => setModal("food")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setModal("food");
              }
            }}
            role="button"
            tabIndex={0}
          >
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
            className="spotlight-card tinted clickable"
            style={{ backgroundImage: "url('/images/bar-special.jpg')" }}
            onClick={() => setModal("drink")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setModal("drink");
              }
            }}
            role="button"
            tabIndex={0}
          >
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
          {dishes.map((dish, index) => (
            <article
              className="featured-card tinted"
              style={{ backgroundImage: `url('${dish.img}')` }}
              key={dish.name}
            >
              <span className="dish-index">{String(index + 1).padStart(2, "0")}</span>
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
            <p className="muted section-lead">Every detail should feel connected: the table, the plate, the glass, the music, and the people around you.</p>
          </div>
          <div className="amenities-grid">
            {amenities.map(({ Icon, title, desc }, index) => (
              <div className="amenity-card" key={title}>
                <span className="amenity-count">{String(index + 1).padStart(2, "0")}</span>
                <div className="amenity-icon"><Icon /></div>
                <h4 className="amenity-title">{title}</h4>
                <p className="amenity-desc muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section map-contact container">
        <div className="map-block">
          <h3 className="block-title">Find Us</h3>
          <div className="map-wrap">
            <iframe
              title="Sensasia location"
              src="https://maps.google.com/maps?q=Sensasia%20Restaurant,%20Peralanda%20Road,%20Ragama,%20Sri%20Lanka&hl=en&z=15&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={spotlightDetails[modal].img} alt={spotlightDetails[modal].title} />
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
