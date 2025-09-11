import React from "react";
import { FaGem, FaUtensils, FaMusic, FaCocktail, FaGlassCheers } from "react-icons/fa";

/*
  Home.js — updated:
  - hero (kept)
  - replaced previous embed with Amenities grid
  - spotlights, featured, events remain as before
  - ensure elements sitting above image tints have z-index:2 (so text is visible)
*/

export default function Home() {
  return (
    <main className="page-root">
      {/* HERO */}
      <section
        className="hero hero-tinted"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} /* public/images/hero-bg.jpg */
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

              <a className="btn btn-outline" href="/menu">View Menu (PDF)</a>
            </div>

            <p className="hero-paragraph muted" style={{ marginTop: 16 }}>
              A refined take on Asian classics — seasonal ingredients, craft cocktails,
              and warm evenings since 2012. Reservations recommended on busy nights.
            </p>
          </div>
        </div>
      </section>

      {/* ===== AMENITIES (replacing the previous embed area) ===== */}
      <section className="container amenities-wrap">
        <div className="amenities-grid">
          <div className="amenity-card">
            <div className="amenity-icon"><FaGem /></div>
            <h4 className="amenity-title">Elegant Ambience</h4>
            <p className="amenity-desc muted">Warm lighting, classic finishes and an intimate atmosphere perfect for dates and dinners.</p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon"><FaUtensils /></div>
            <h4 className="amenity-title">Chef-Crafted Cuisine</h4>
            <p className="amenity-desc muted">Thoughtfully sourced ingredients and meticulous technique — every plate is crafted to impress.</p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon"><FaMusic /></div>
            <h4 className="amenity-title">Amazing Live Music</h4>
            <p className="amenity-desc muted">Weekly performances and carefully curated playlists that elevate every evening.</p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon"><FaCocktail /></div>
            <h4 className="amenity-title">Best Cocktails in Town</h4>
            <p className="amenity-desc muted">Bold, balanced and inventive — our bar program is a cornerstone of the Sensasia experience.</p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon"><FaGlassCheers /></div>
            <h4 className="amenity-title">A Drink for Every Occasion</h4>
            <p className="amenity-desc muted">From low-ABV mocktails to celebratory champagne, we’ll find the right glass for your night.</p>
          </div>
        </div>
      </section>

      {/* SPOTLIGHTS */}
      <section className="section spotlights container">
        

        <div className="spotlights-grid">
          <article
            className="spotlight-card tinted"
            style={{ backgroundImage: "url('/images/spotlight.jpg')" }} /* public/images/spotlight-food.jpg */
          >
            <div className="spotlight-inner" style={{ zIndex: 2 }}>
              <div className="spotlight-label">Spotlight</div>
              <div className="spotlight-title">Pan-seared Miso Salmon</div>
              <div className="spotlight-desc muted">Sticky soy glaze · sesame greens</div>
            </div>
          </article>

          <article
            className="spotlight-card tinted"
            style={{ backgroundImage: "url('/images/bar-special.jpg')" }} /* public/images/spotlight-drink.jpg */
          >
            <div className="spotlight-inner" style={{ zIndex: 2 }}>
              <div className="spotlight-label">Bar Special</div>
              <div className="spotlight-title">Silk Road Cooler</div>
              <div className="spotlight-desc muted">Herbal mocktail · citrus & tonic</div>
            </div>
          </article>
        </div>
      </section>

      {/* FEATURED HIGHLIGHTS */}
      <section className="section featured container">
        <h2 className="section-title">Featured Highlights</h2>
        <p className="muted section-lead">A selection of our most-loved dishes & drinks.</p>

        <div className="featured-grid">
          <article className="featured-card tinted" style={{ backgroundImage: "url('/images/food1.jpg')" }}>
            <div className="featured-meta" style={{ zIndex: 2 }}>
              <div>
                <div className="featured-name">Miso Glazed Salmon</div>
                <div className="muted">Crisp skin, sticky soy</div>
              </div>
              <div className="featured-price">1,600.00</div>
            </div>
          </article>

          <article className="featured-card tinted" style={{ backgroundImage: "url('/images/food2.jpg')" }}>
            <div className="featured-meta" style={{ zIndex: 2 }}>
              <div>
                <div className="featured-name">Truffle Dan Dan Noodles</div>
                <div className="muted">Spiced chili oil, silky noodles</div>
              </div>
              <div className="featured-price">1,450.00</div>
            </div>
          </article>

          <article className="featured-card tinted" style={{ backgroundImage: "url('/images/drink1.jpg')" }}>
            <div className="featured-meta" style={{ zIndex: 2 }}>
              <div>
                <div className="featured-name">Lychee Ginger Martini</div>
                <div className="muted">Lychee · ginger · citrus</div>
              </div>
              <div className="featured-price">850.00</div>
            </div>
          </article>

          <article className="featured-card tinted" style={{ backgroundImage: "url('/images/drink2.jpg')" }}>
            <div className="featured-meta" style={{ zIndex: 2 }}>
              <div>
                <div className="featured-name">Silk Road Cooler</div>
                <div className="muted">Herbal infusion · tonic</div>
              </div>
              <div className="featured-price">550.00</div>
            </div>
          </article>
        </div>
      </section>

      {/* WEEKLY LINEUP */}
      <section className="section schedule container">
        <h2 className="section-title">Weekly Lineup</h2>
        <p className="muted section-lead">Regular nights at Sensasia</p>

        <div className="large-schedule-grid">
          <div className="event-card">
            <div className="event-icon"><FaMusic /></div>
            <div className="event-info">
              <div className="event-day">Wednesday</div>
              <div className="event-title">Karaoke Night</div>
              <div className="event-time muted">Open mic • 8:30 PM</div>
            </div>
          </div>

          <div className="event-card">
            <div className="event-icon"><FaMusic /></div>
            <div className="event-info">
              <div className="event-day">Friday</div>
              <div className="event-title">Live Band</div>
              <div className="event-time muted">Doors 8:00 PM • Band 9:00 PM</div>
            </div>
          </div>

          <div className="event-card">
            <div className="event-icon"><FaMusic /></div>
            <div className="event-info">
              <div className="event-day">Saturday</div>
              <div className="event-title">Calypso Night</div>
              <div className="event-time muted">9:30 PM — Late</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP + CONTACT TEASER */}
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
    </main>
  );
}
