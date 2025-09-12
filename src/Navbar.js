import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const loc = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner container">
        <div className="brand">
          {/* PLACEHOLDER: Drop /logo.png into public/ and swap h1 for <img src="/logo.png" ... /> */}
          <h1 className="brand-title">Sensasia</h1>
          <div className="brand-sub">Asian Fusion & Cocktails — Since 2012</div>
        </div>

        {/* Hamburger for mobile */}
        <div
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          &#9776;
        </div>

        <nav className={`links ${mobileOpen ? "active" : ""}`} aria-label="Main navigation">
          <Link className={loc.pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={loc.pathname === "/menu" ? "active" : ""} to="/menu">Menu</Link>
          <Link className={loc.pathname === "/about" ? "active" : ""} to="/about">About</Link>
          <Link className={loc.pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>

          {/* Nav order button */}
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
