import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Column 1: Branding */}
        <div className="footer-col">
          <h3 className="footer-logo">Sensasia Restaurant</h3>
          <p>Authentic Asian Fusion Cuisine & Bar since 2012</p>
        </div>

        {/* Column 2: Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📞 <a href="tel:+94112223344">+94 11 222 3344</a></p>
          <p>📍 Ragama, Sri Lanka</p>
        </div>

        {/* Column 3: Hours */}
        <div className="footer-col">
          <h4>Opening Hours</h4>
          <p>Mon – Thu: 11 AM – 11 PM</p>
          <p>Fri – Sat: 11 AM – 1 AM</p>
          <p>Sun: 11 AM – 10 PM</p>
        </div>

        {/* Column 4: Socials */}
        <div className="footer-col socials">
          <h4>Follow Us</h4>
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
        <p>© {new Date().getFullYear()} Sensasia Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
