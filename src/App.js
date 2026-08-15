import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, Route, Routes, useLocation, useNavigationType } from "react-router-dom";
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

function jumpTo(top) {
  const html = document.documentElement;
  const previousBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo({ top, left: 0 });
  html.style.scrollBehavior = previousBehavior;
}

export default function App() {
  const { pathname, key = pathname } = useLocation();
  const navigationType = useNavigationType();
  const firstNavigation = useRef(true);
  const activeScrollKey = useRef(key);
  const scrollPositions = useRef(new Map());
  const [theme] = useState(resolveTheme);
  const [dockVisible, setDockVisible] = useState(true);
  const previousScroll = useRef(0);
  const dockTimer = useRef(null);

  useEffect(() => {
    const rememberPosition = () => {
      if (activeScrollKey.current === key) scrollPositions.current.set(key, window.scrollY);
    };
    rememberPosition();
    window.addEventListener("scroll", rememberPosition, { passive: true });
    return () => {
      window.removeEventListener("scroll", rememberPosition);
    };
  }, [key]);

  useLayoutEffect(() => {
    if (firstNavigation.current) {
      firstNavigation.current = false;
      return undefined;
    }

    activeScrollKey.current = key;
    const top = navigationType === "POP" ? scrollPositions.current.get(key) || 0 : 0;
    let settleTimer;
    const refreshFrame = window.requestAnimationFrame(() => {
      jumpTo(top);
      settleTimer = window.setTimeout(() => jumpTo(top), 120);
    });
    jumpTo(top);

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      window.clearTimeout(settleTimer);
    };
  }, [key, navigationType]);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const nearTop = current < 120;
      const nearBottom = window.innerHeight + current >= document.documentElement.scrollHeight - 120;
      const movingUp = current < previousScroll.current - 6;
      const movingDown = current > previousScroll.current + 6;
      if (nearTop || nearBottom || movingUp) setDockVisible(true);
      else if (movingDown) setDockVisible(false);
      window.clearTimeout(dockTimer.current);
      dockTimer.current = window.setTimeout(() => setDockVisible(true), 420);
      previousScroll.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(dockTimer.current);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme]);
    return () => delete document.documentElement.dataset.theme;
  }, [theme]);

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
      <nav className={`mobile-dock ${dockVisible ? "is-visible" : "is-hidden"}`} aria-label="Quick actions" aria-hidden={!dockVisible}>
        <NavLink to="/menu" tabIndex={dockVisible ? undefined : -1}><FaUtensils/><span>Menu</span></NavLink>
        <a href={`tel:${SITE.phoneTel}`} tabIndex={dockVisible ? undefined : -1}><FaPhoneAlt/><span>Call</span></a>
        <a href={SITE.map} target="_blank" rel="noreferrer" tabIndex={dockVisible ? undefined : -1}><FaDirections/><span>Map</span></a>
        <a href={SITE.uberEats} target="_blank" rel="noreferrer" tabIndex={dockVisible ? undefined : -1}><FaShoppingBag/><span>Order</span></a>
      </nav>
    </div>
  );
}
