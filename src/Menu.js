import React from "react";

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
            <h3>Food Menu</h3>
          </div>
          <object
            data="/FoodMenu.pdf"
            type="application/pdf"
            width="100%"
            height="600px"
          >
            <p> You can <a href="/FoodMenu.pdf" target="_blank" rel="noreferrer">view our Food menu here</a>.</p>
          </object>
        </div>

        {/* Drinks Menu */}
        <div className="menu-card">
          <div className="menu-header">
            <h3>Drinks Menu</h3>
          </div>
          <object
            data="/DrinksMenu.pdf"
            type="application/pdf"
            width="100%"
            height="600px"
          >
            <p>You can <a href="/DrinksMenu.pdf" target="_blank" rel="noreferrer">view our Drinks menu here</a>.</p>
          </object>
        </div>
      </div>
    </section>
  );
}
