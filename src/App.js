import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { FaHome, FaPhoneAlt, FaShoppingBag, FaUtensils } from "react-icons/fa";
import Navbar from "./Navbar";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <div className="app-root">
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
        <a href="tel:0112957700">
          <FaPhoneAlt aria-hidden="true" />
          <span>Call</span>
        </a>
        <a
          href="https://www.ubereats.com/lk/store/sensasia-restaurant-ragama/xSqQwTKNRIS7aBF5YRel2g"
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
