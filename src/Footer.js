import React from "react";
import { FaFacebookF, FaInstagram, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
} from "./siteConfig";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">{SITE_NAME}</div>

        <div className="footer-info">
          <p><FaMapMarkerAlt className="icon" /> Ragama, Sri Lanka</p>
          <p>
            <FaPhone className="icon" />{" "}
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          </p>
          <p><FaClock className="icon" /> Open Daily: 10 AM – Midnight</p>
        </div>

        <div className="footer-socials">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Sensasia on Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Sensasia on Instagram"
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
