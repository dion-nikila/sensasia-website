import React, { useState } from "react";
import { FaGem, FaUtensils, FaMusic, FaCocktail, FaGlassCheers } from "react-icons/fa";

export default function Home() {
  const [modal, setModal] = useState(null);

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
        <div className="hero-inner container" role="banner" style={{ zIndex: 2 }}>
          <div className="hero-content">
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
              <a className="btn btn-outline" href="/menu">
                View Menu (PDF)
              </a>
            </div>
            <p className="hero-paragraph muted" style={{ marginTop: 16 }}>
              A refined take on Asian classics. seasonal ingredients, craft cocktails,
              and warm evenings since 2012. Reservations recommended on busy nights.
            </p>
          </div>
        </div>
      </section>

      {/* WEEKLY LINEUP */}
      <section className="section schedule container">
        <h2 className="section-title">Our week at Sensasia</h2>
        <p className="muted section-lead">At Sensasia, every night is special. Discover our regular evenings filled with flavor and rhythm.</p>

        <div className="large-schedule-grid">
          {[
            { day: "Wednesday", title: "Karaoke Night", time: "Open mic • 7:30 PM" },
            { day: "Friday", title: "Live Band", time: "Band 7:30 PM" },
            { day: "Saturday", title: "Calypso Night", time: "8:00 PM" },
          ].map((event, idx) => (
            <div className="event-card" key={idx}>
              <div className="event-icon"><FaMusic /></div>
              <div className="event-info">
                <div className="event-day">{event.day}</div>
                <div className="event-title">{event.title}</div>
                <div className="event-time muted">{event.time}</div>
                <a href="tel:0112957700" className="btn btn-outline small-btn">
                  Reserve Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPOTLIGHTS */}
      <section className="section spotlights container">
        <div className="spotlights-grid">
          <article
            className="spotlight-card tinted clickable"
            style={{ backgroundImage: "url('/images/spotlight.jpg')" }}
            onClick={() => setModal("food")}
          >
            <div className="spotlight-inner" style={{ zIndex: 2 }}>
              <div className="spotlight-label">Spotlight</div>
              <div className="spotlight-title">Sensasia's Special - Creamy Prawn</div>
              <div className="spotlight-desc muted">
                Creamy Cheese Sauce · Fresh Peeled Prawns
              </div>
            </div>
          </article>

          <article
            className="spotlight-card tinted clickable"
            style={{ backgroundImage: "url('/images/bar-special.jpg')" }}
            onClick={() => setModal("drink")}
          >
            <div className="spotlight-inner" style={{ zIndex: 2 }}>
              <div className="spotlight-label">Bar Special</div>
              <div className="spotlight-title">Blue Margarita</div>
              <div className="spotlight-desc muted">
                Rum · Vodka · Citrus · Honey · Blue Curaçao
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section featured container">
        <h2 className="section-title">Featured Highlights</h2>
        <p className="muted section-lead">
          A handpicked selection of our most-loved dishes, prepared with care and flavor in every detail.
        </p>

        <div className="featured-grid">
          <article
            className="featured-card tinted"
            style={{ backgroundImage: "url('/images/food1.jpg')" }}
          >
            <div className="featured-meta" style={{ zIndex: 2 }}>
              <div>
                <div className="featured-name">Cheese Kottu</div>
                <div className="muted">1kg Portion creamy goodness</div>
              </div>
              <div className="featured-price">2200.00</div>
            </div>
          </article>
          <article
            className="featured-card tinted"
            style={{ backgroundImage: "url('/images/food2.jpg')" }}
          >
            <div className="featured-meta" style={{ zIndex: 2 }}>
              <div>
                <div className="featured-name">Pepper Pork</div>
                <div className="muted">Juicy pork, fiery pepper, irresistible flavor.</div>
              </div>
              <div className="featured-price">2500.00</div>
            </div>
          </article>
          <article
            className="featured-card tinted"
            style={{ backgroundImage: "url('/images/food3.jpg')" }}
          >
            <div className="featured-meta" style={{ zIndex: 2 }}>
              <div>
                <div className="featured-name">Signature Fried Handallo</div>
                <div className="muted">Crunchy, flavorful handallo with island spice.</div>
              </div>
              <div className="featured-price">1800.00</div>
            </div>
          </article>
          <article
            className="featured-card tinted"
            style={{ backgroundImage: "url('/images/food4.jpg')" }}
          >
            <div className="featured-meta" style={{ zIndex: 2 }}>
              <div>
                <div className="featured-name">Sensasia Special Rice</div>
                <div className="muted">Hearty mixed meat rice, bursting with flavor in every bite.</div>
              </div>
              <div className="featured-price">2000.00</div>
            </div>
          </article>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="container amenities-wrap">
        <div className="amenities-grid">
          <div className="amenity-card">
            <div className="amenity-icon"><FaGem /></div>
            <h4 className="amenity-title">Elegant Ambience</h4>
            <p className="amenity-desc muted">
              Warm lighting, classic finishes and an intimate atmosphere perfect for
              dates and dinners.
            </p>
          </div>
          <div className="amenity-card">
            <div className="amenity-icon"><FaUtensils /></div>
            <h4 className="amenity-title">Chef-Crafted Cuisine</h4>
            <p className="amenity-desc muted">
              Thoughtfully sourced ingredients and meticulous technique.
            </p>
          </div>
          <div className="amenity-card">
            <div className="amenity-icon"><FaMusic /></div>
            <h4 className="amenity-title">Amazing Live Music</h4>
            <p className="amenity-desc muted">
              Weekly performances and carefully curated playlists.
            </p>
          </div>
          <div className="amenity-card">
            <div className="amenity-icon"><FaCocktail /></div>
            <h4 className="amenity-title">Best Cocktails in Town</h4>
            <p className="amenity-desc muted">
              Bold, balanced and inventive bar program.
            </p>
          </div>
          <div className="amenity-card">
            <div className="amenity-icon"><FaGlassCheers /></div>
            <h4 className="amenity-title">A Drink for Every Occasion</h4>
            <p className="amenity-desc muted">
              From mocktails to champagne — we’ve got you covered.
            </p>
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
