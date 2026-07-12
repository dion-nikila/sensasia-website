import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaFacebookF, FaFilePdf, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaRegClock, FaShoppingBag } from "react-icons/fa";
import PageHero from "./PageHero";
import MapEmbed from "./MapEmbed";
import Events from "./Events";
import { SITE } from "./data";

export default function Contact() {
  return <main>
    <PageHero eyebrow="Contact & reservations" title="Your table, your round, your night." copy="Call ahead for dinner, drinks, live entertainment or a big-screen night in Ragama." image="/images/about5.jpg" />
    <section className="contact-layout section container"><div className="contact-main"><p className="eyebrow">Reservations by phone</p><h2>Speak directly with the team.</h2><p>Sensasia does not use an online booking engine. Call to reserve a table or discuss a group, celebration or entertainment night. Your booking is only arranged once you have spoken with the team.</p><a className="button button-wine" href={`tel:${SITE.phoneTel}`}><FaPhoneAlt/> {SITE.phoneDisplay}</a><div className="contact-info"><div><FaMapMarkerAlt/><span><b>Find us</b>{SITE.address}<a href={SITE.map} target="_blank" rel="noreferrer">Google Maps directions <FaArrowRight/></a></span></div><div><FaRegClock/><span><b>Opening hours</b>Open daily<br/>{SITE.hours}</span></div><div><FaShoppingBag/><span><b>Order delivery</b>Order from Sensasia on Uber Eats.<a href={SITE.uberEats} target="_blank" rel="noreferrer">Order online <FaArrowRight/></a></span></div></div></div><MapEmbed className="contact-map"/></section>
    <section className="contact-actions section container"><article><p className="eyebrow">Food</p><h3>Planning dinner?</h3><p>View the full food selection before you call.</p><a href={SITE.foodMenu} target="_blank" rel="noreferrer"><FaFilePdf/> Food menu PDF <span className="sr-only">opens in new tab</span></a></article><article><p className="eyebrow">Drinks</p><h3>Meeting for a round?</h3><p>Browse cocktails and bar favourites.</p><a href={SITE.drinksMenu} target="_blank" rel="noreferrer"><FaFilePdf/> Drinks menu PDF <span className="sr-only">opens in new tab</span></a></article><article><p className="eyebrow">Social</p><h3>Keep up with Sensasia.</h3><p>Follow the venue for updates from Ragama.</p><div className="social-links"><a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Sensasia on Facebook"><FaFacebookF/></a><a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Sensasia on Instagram"><FaInstagram/></a></div></article></section>
    <section className="contact-events section"><div className="container events-grid"><div><p className="eyebrow light">Entertainment enquiries</p><h2>Coming for the music?</h2><p>Here is the regular weekly line-up. Call before travelling for a specific event or to arrange a group table.</p><a className="button button-cream" href={`tel:${SITE.phoneTel}`}>Call Sensasia <FaPhoneAlt/></a></div><Events compact/></div></section>
    <section className="contact-bottom container"><p>Looking for the story behind the venue?</p><Link className="text-link" to="/about">About Sensasia <FaArrowRight/></Link></section>
  </main>;
}
