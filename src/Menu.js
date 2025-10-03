import React from "react";
import { FaUtensils, FaCocktail } from "react-icons/fa";

export default function Menu() {
  return (
    <section className="menu-section container">
      <div className="menu-hero">
        <h2 className="menu-title">Our Menus</h2>
        <p className="menu-subtitle">
          From handcrafted delicacies to signature cocktails, experience the best of Sensasia.
        </p>
      </div>

      <div className="menu-grid">
        {/* Food Menu */}
        <div className="menu-card">
          <div className="menu-header">
            <h3>
              <FaUtensils style={{ marginRight: "0.5rem" }} /> Food Menu
            </h3>
          </div>
          <p>
            View our food menu{" "}
            <a
              href="/FoodMenu.pdf"
              target="_blank"
              rel="noreferrer"
              className="menu-link"
            >
              here
            </a>.
          </p>
        </div>

        {/* Drinks Menu */}
        <div className="menu-card">
          <div className="menu-header">
            <h3>
              <FaCocktail style={{ marginRight: "0.5rem" }} /> Drinks Menu
            </h3>
          </div>
          <p>
            View our drinks menu{" "}
            <a
              href="/DrinksMenu.pdf"
              target="_blank"
              rel="noreferrer"
              className="menu-link"
            >
              here
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
