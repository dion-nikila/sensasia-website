import React, { useEffect, useRef, useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
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
import { resolveTheme, THEME_COLORS } from "./themeConfig";

export default function App() {
  const { pathname, hash } = useLocation();
  const [theme] = useState(resolveTheme);
  const [dockVisible, setDockVisible] = useState(true);
  const previousScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const nearTop = current < 120;
      const nearBottom = window.innerHeight + current >= document.documentElement.scrollHeight - 120;
      setDockVisible(nearTop || nearBottom || current < previousScroll.current - 8);
      previousScroll.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme]);
    return () => delete document.documentElement.dataset.theme;
  }, [theme]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const target = hash ? document.querySelector(hash) : null;
      if (target) {
        const headerOffset = document.querySelector(".site-header")?.getBoundingClientRect().height || 0;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - headerOffset - 12, behavior: "auto" });
      } else {
        document.getElementById("main-content")?.focus({ preventScroll: true });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return (
    <div className="app-root" data-theme={theme}>
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
      <nav className={`mobile-dock ${dockVisible ? "is-visible" : "is-hidden"}`} aria-label="Quick actions">
        <NavLink to="/menu"><FaUtensils/><span>Menu</span></NavLink>
        <a href={`tel:${SITE.phoneTel}`}><FaPhoneAlt/><span>Call</span></a>
        <a href={SITE.map} target="_blank" rel="noreferrer"><FaDirections/><span>Directions</span></a>
        <a href={SITE.uberEats} target="_blank" rel="noreferrer"><FaShoppingBag/><span>Order</span></a>
      </nav>
    </div>
  );
}
