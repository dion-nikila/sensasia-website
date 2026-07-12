import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { FaDirections, FaPhoneAlt, FaShoppingBag, FaUtensils } from "react-icons/fa";
import Navbar from "./Navbar";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Seo from "./Seo";
import NotFound from "./NotFound";
import { SITE } from "./data";

export default function App() {
  return (
    <div className="app-root">
      <Seo />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <div id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <nav className="mobile-dock" aria-label="Quick actions">
        <NavLink to="/menu"><FaUtensils/><span>Menu</span></NavLink>
        <a href={`tel:${SITE.phoneTel}`}><FaPhoneAlt/><span>Call</span></a>
        <a href={SITE.map} target="_blank" rel="noreferrer"><FaDirections/><span>Directions</span></a>
        <a href={SITE.uberEats} target="_blank" rel="noreferrer"><FaShoppingBag/><span>Order</span></a>
      </nav>
    </div>
  );
}
