import React from "react";
import { FaArrowRight, FaCocktail, FaFilePdf, FaPhoneAlt, FaUtensils } from "react-icons/fa";

const menus = [
  {
    id: "food",
    number: "01",
    label: "Kitchen",
    title: "Food Menu",
    desc: "Asian fusion signatures, comfort dishes, sharing plates, and Sensasia favorites.",
    href: "/FoodMenu.pdf",
    image: "/images/food4.jpg",
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
    Icon: FaCocktail,
  },
];

export default function Menu() {
  return (
    <main className="menu-redesign">
      <section className="menu-redesign-hero">
        <div className="menu-redesign-copy">
          <span className="menu-redesign-kicker">Sensasia Menus</span>
          <h1 className="menu-redesign-title">
            <span>Food first.</span>
            <span>Drinks next.</span>
            <span>The night follows.</span>
          </h1>
          <p>
            Skip the clutter. Choose the menu you need and step straight into
            Sensasia’s Asian fusion kitchen or cocktail bar.
          </p>
        </div>
        <div className="menu-redesign-status">
          <span>Open Daily</span>
          <strong>10 AM - Midnight</strong>
        </div>
      </section>

      <section className="menu-choice-stage" aria-label="Choose a Sensasia menu">
        {menus.map(({ id, number, label, title, desc, href, image, Icon }) => (
          <a
            className={`menu-choice-card menu-choice-${id}`}
            href={href}
            target="_blank"
            rel="noreferrer"
            key={title}
          >
            <img src={image} alt={`${title} preview`} />
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

      <section className="menu-fast-actions">
        <div>
          <span className="menu-redesign-kicker">Need it now?</span>
          <h2>Order online or reserve a table.</h2>
        </div>
        <div className="menu-fast-buttons">
          <a
            href="https://www.ubereats.com/lk/store/sensasia-restaurant-ragama/xSqQwTKNRIS7aBF5YRel2g"
            target="_blank"
            rel="noreferrer"
          >
            Order Online
          </a>
          <a href="tel:0112957700">
            <FaPhoneAlt aria-hidden="true" />
            Call / Reserve
          </a>
        </div>
      </section>
    </main>
  );
}
