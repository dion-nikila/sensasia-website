import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { NAVIGATION, SITE } from "./data";

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><img className="footer-logo" src="/images/logo.png" alt="Sensasia"/><p>Asian-fusion food, a full bar, big-screen entertainment and weekly live nights on Peralanda Road, Ragama.</p><div className="social-links"><a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Sensasia on Facebook"><FaFacebookF/></a><a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Sensasia on Instagram"><FaInstagram/></a></div></div><div><h2>Explore</h2>{NAVIGATION.map(({to,label})=><Link key={to} to={to}>{label}</Link>)}<a href={SITE.foodMenu} target="_blank" rel="noreferrer">Food menu PDF</a><a href={SITE.drinksMenu} target="_blank" rel="noreferrer">Drinks menu PDF</a></div><div><h2>Visit</h2><address><span><FaMapMarkerAlt/>{SITE.address}</span><span><FaPhoneAlt/><a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></span><span><FaRegClock/>Daily · {SITE.hours}</span></address><a className="footer-direction" href={SITE.map} target="_blank" rel="noreferrer">Get directions</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {SITE.name}</span><span>Serving Ragama since {SITE.since}</span></div></footer>;
}
