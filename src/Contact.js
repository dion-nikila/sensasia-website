import React from "react";
import { FaPhoneAlt, FaUtensils, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="page container contact-page">
      <h2 className="page-heading">Contact & Reservations</h2>

      <div className="contact-cards">
        {/* Phone / Reservations */}
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Call to Reserve</h3>
          <p>We accept reservations for tables and private events. For large groups, please call ahead.</p>
          <a className="btn btn-primary-hero" href="tel:0112957700">0112 957 700</a>
        </div>

        {/* Online Ordering */}
        <div className="contact-card">
          <FaUtensils className="contact-icon" />
          <h3>Order Online</h3>
          <p>Enjoy our dishes from the comfort of your home via Uber Eats.</p>
          <a className="btn btn-outline" href="https://www.ubereats.com/lk/store/sensasia-restaurant-ragama/xSqQwTKNRIS7aBF5YRel2g" target="_blank" rel="noreferrer">Order Now</a>
        </div>

        {/* Location */}
        <div className="contact-card contact-map-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Find Us</h3>
          <p>Ragama, Sri Lanka</p>
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
