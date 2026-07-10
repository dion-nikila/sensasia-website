import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { FaHome, FaPhoneAlt, FaShoppingBag, FaUtensils } from "react-icons/fa";
import Navbar from "./Navbar";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Seo from "./Seo";
import { PHONE_TEL, UBER_EATS_URL } from "./siteConfig";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <div className="app-root">
      <Seo />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <nav className="mobile-action-dock" aria-label="Mobile quick actions">
        <NavLink to="/" end>
          <FaHome aria-hidden="true" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/menu">
          <FaUtensils aria-hidden="true" />
          <span>Menu</span>
        </NavLink>
        <a href={`tel:${PHONE_TEL}`}>
          <FaPhoneAlt aria-hidden="true" />
          <span>Call</span>
        </a>
        <a
          href={UBER_EATS_URL}
          target="_blank"
          rel="noreferrer"
        >
          <FaShoppingBag aria-hidden="true" />
          <span>Order</span>
        </a>
      </nav>
      <Footer />
    </div>
  );
}
