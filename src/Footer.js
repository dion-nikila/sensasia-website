import React from "react";
import { FaFacebookF, FaInstagram, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h2 className="footer-logo">Sensasia Restaurant and Bar</h2>

        <div className="footer-info">
          <p><FaMapMarkerAlt className="icon" /> Ragama, Sri Lanka</p>
          <p>
            <FaPhone className="icon" />{" "}
            <a href="tel:+94112223344">+94 11 222 3344</a>
          </p>
          <p><FaClock className="icon" /> Open Daily: 10 AM – Midnight</p>
        </div>

        <div className="footer-socials">
          <a
            href="https://www.facebook.com/sens.asia"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/sensasia.restaurant/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sensasia Restaurant</p>
      </div>
    </footer>
  );
}
