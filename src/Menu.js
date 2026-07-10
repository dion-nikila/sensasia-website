import React from "react";
import { FaArrowRight, FaCocktail, FaFilePdf, FaPhoneAlt, FaUtensils } from "react-icons/fa";
import ResponsiveImage from "./ResponsiveImage";
import { PHONE_TEL, UBER_EATS_URL } from "./siteConfig";

const menus = [
  {
    id: "food",
    number: "01",
    label: "Kitchen",
    title: "Food Menu",
    desc: "Asian fusion signatures, comfort dishes, sharing plates, and Sensasia favorites.",
    href: "/FoodMenu.pdf",
    image: "/images/food4.jpg",
    alt: "Sensasia special rice from the food menu",
    Icon: FaUtensils,
  },
  {
    id: "drinks",
    number: "02",
    label: "Bar",
    title: "Drinks Menu",
    desc: "Cocktails, bar favorites, mocktails, bottles, and drinks for every kind of night.",
    href: "/DrinksMenu.pdf",
    image: "/images/bar-special.jpg",
    alt: "Blue cocktail from the Sensasia drinks menu",
    Icon: FaCocktail,
  },
];

const menuHighlights = [
  "Cheese Kottu",
  "Pepper Pork",
  "Signature Fried Handallo",
  "Sensasia Special Rice",
  "Blue Margarita",
  "House cocktails and bar favorites",
];

export default function Menu() {
  return (
    <main className="menu-redesign">
      <section className="menu-redesign-hero">
        <div className="menu-redesign-copy">
          <span className="menu-redesign-kicker">Sensasia Menus</span>
          <h1 className="menu-redesign-title" aria-label="Food first. Drinks next. The night follows.">
            <span>Food first.</span>
            <span>Drinks next.</span>
            <span>The night follows.</span>
          </h1>
          <p>
            Skip the clutter. Choose the menu you need and step straight into
            Sensasia’s Asian fusion kitchen or cocktail bar in Ragama.
          </p>
        </div>
        <div className="menu-redesign-status">
          <span>Open Daily</span>
          <strong>10 AM - Midnight</strong>
        </div>
      </section>

      <section className="menu-choice-stage" aria-label="Choose a Sensasia menu">
        {menus.map(({ id, number, label, title, desc, href, image, alt, Icon }) => (
          <a
            className={`menu-choice-card menu-choice-${id}`}
            href={href}
            target="_blank"
            rel="noreferrer"
            key={title}
          >
            <ResponsiveImage
              src={image}
              alt={alt}
              className="menu-choice-media"
              sizes="(max-width: 700px) 100vw, 50vw"
            />
            <span className="menu-choice-number">{number}</span>
            <div className="menu-choice-content">
              <div className="menu-choice-label">
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </div>
              <h2>{title}</h2>
              <p>{desc}</p>
              <span className="menu-choice-button">
                <FaFilePdf aria-hidden="true" />
                Open PDF
                <FaArrowRight aria-hidden="true" />
              </span>
            </div>
          </a>
        ))}
      </section>

      <section className="menu-preview" aria-label="Popular Sensasia menu highlights">
        <span className="menu-redesign-kicker">Popular Picks</span>
        <h2>Asian fusion Sri Lanka favorites, ready for the table.</h2>
        <ul>
          {menuHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="menu-fast-actions">
        <div>
          <span className="menu-redesign-kicker">Need it now?</span>
          <h2>Order online or reserve a table.</h2>
        </div>
        <div className="menu-fast-buttons">
          <a
            href={UBER_EATS_URL}
            target="_blank"
            rel="noreferrer"
          >
            Order Online
          </a>
          <a href={`tel:${PHONE_TEL}`}>
            <FaPhoneAlt aria-hidden="true" />
            Call / Reserve
          </a>
        </div>
      </section>
    </main>
  );
}
