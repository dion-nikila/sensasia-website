import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const loc = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [loc.pathname]);

  return (
    <header className="nav">
      <div className="nav-inner container">
        {/* Brand Logo + Text */}
        <div className="brand">
          <img
            src="/images/logo.jpg"
            alt="Sensasia Logo"
            className="brand-logo"
          />
          <div className="brand-text">
            <div className="brand-title">Sensasia Restaurant</div>
            <div className="brand-sub">Authentic Asian Fusion Cuisine — Since 2012</div>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <div
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          &#9776;
        </div>

        {/* Navigation Links */}
        <nav className={`links ${mobileOpen ? "active" : ""}`} aria-label="Main navigation">
          <Link className={loc.pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={loc.pathname === "/menu" ? "active" : ""} to="/menu">Menu</Link>
          <Link className={loc.pathname === "/about" ? "active" : ""} to="/about">About</Link>
          <Link className={loc.pathname === "/contact" ? "active" : ""} to="/contact">Contact us</Link>

          <a
            className="nav-order"
            href="https://www.ubereats.com/lk/store/sensasia-restaurant-ragama/xSqQwTKNRIS7aBF5YRel2g"
            target="_blank"
            rel="noreferrer"
          >
            Order Online
          </a>
        </nav>
      </div>
    </header>
  );
}
