import React from "react";
import { FaArrowRight, FaMapMarkerAlt, FaPhoneAlt, FaRegCalendarCheck, FaUtensils } from "react-icons/fa";
import MapEmbed from "./MapEmbed";
import { PHONE_DISPLAY, PHONE_TEL, UBER_EATS_URL } from "./siteConfig";

export default function Contact() {
  return (
    <section className="page container contact-page">
      <h1 className="page-heading">Contact & Reservations</h1>
      <p className="contact-intro">
        Reserve a table, order online, or find our restaurant and bar in Ragama
        for Asian fusion dinners, cocktails, and live music nights.
      </p>

      <div className="contact-cards">
        {/* Phone / Reservations */}
        <div className="contact-card">
          <FaRegCalendarCheck className="contact-icon" />
          <h3>Call to Reserve</h3>
          <p>We accept reservations for tables and private events. For large groups, please call ahead.</p>
          <a className="btn btn-primary-hero" href={`tel:${PHONE_TEL}`}><FaPhoneAlt /> {PHONE_DISPLAY}</a>
        </div>

        {/* Online Ordering */}
        <div className="contact-card">
          <FaUtensils className="contact-icon" />
          <h3>Order Online</h3>
          <p>Enjoy our dishes from the comfort of your home via Uber Eats.</p>
          <a className="btn btn-outline" href={UBER_EATS_URL} target="_blank" rel="noreferrer">Order Now <FaArrowRight /></a>
        </div>

        {/* Location */}
        <div className="contact-card contact-map-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Find Us</h3>
          <p>Ragama, Sri Lanka</p>
          <MapEmbed className="map-embed" />
        </div>
      </div>
    </section>
  );
}
