import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ResponsiveImage from "./ResponsiveImage";
import { UBER_EATS_URL } from "./siteConfig";

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
        <Link className={loc.pathname === "/" ? "active" : ""} to="/">
          <ResponsiveImage
            src="/images/logo.jpg"
            alt="Sensasia Logo"
            className="brand-logo-picture"
            imageClassName="brand-logo"
            sizes="52px"
            loading="eager"
          />
        </Link> 
          <div className="brand-text">
            <div className="brand-title">Sensasia Restaurant</div>
            <div className="brand-sub">Cocktails & Asian Cuisine</div>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <button
          type="button"
          className="nav-toggle"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        {/* Navigation Links */}
        <nav className={`links ${mobileOpen ? "active" : ""}`} aria-label="Main navigation">
          <Link className={loc.pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={loc.pathname === "/menu" ? "active" : ""} to="/menu">Menu</Link>
          <Link className={loc.pathname === "/about" ? "active" : ""} to="/about">About</Link>
          <Link className={loc.pathname === "/contact" ? "active" : ""} to="/contact">Contact us</Link>

          <a
            className="nav-order"
            href={UBER_EATS_URL}
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
