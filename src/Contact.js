import React from "react";

export default function Contact() {
  return (
    <section className="page container">
      <h2>Contact & Reservations</h2>

      <div className="contact-big">
        <div className="contact-left">
          <h3>Call to Reserve</h3>
          <p className="phone-large"><a href="tel:0112957700">0112 957 700</a></p>
          <p className="muted">We accept reservations for tables and private events. For large groups, please call ahead.</p>

          <div style={{ marginTop: "1rem" }}>
            <a className="btn" href="tel:0112957700">Call Now</a>
            <a className="btn btn-outline" style={{ marginLeft: "0.6rem" }} href="https://www.ubereats.com/lk/store/sensasia-restaurant-ragama/xSqQwTKNRIS7aBF5YRel2g" target="_blank" rel="noreferrer">Order Online</a>
          </div>
        </div>

        <div className="contact-right">
          <h4>Find Us</h4>
          <div className="map-embed">
            <iframe
              title="Sensasia location"
              src="https://maps.google.com/maps?q=Sensasia%20Restaurant,%20Peralanda%20Road,%20Ragama,%20Sri%20Lanka&hl=en&z=15&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
