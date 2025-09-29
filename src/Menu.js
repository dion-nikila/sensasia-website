import React from "react";

export default function Menu() {
  return (
    <section className="menu-section container">
      {/* Hero Section */}
      <div className="menu-hero">
        <h2 className="menu-title">Our Menus</h2>
        <p className="menu-subtitle">
          From handcrafted delicacies to signature cocktails, experience the best
          of Sensasia.
        </p>
      </div>

      {/* Menus Grid */}
      <div className="menu-grid">
        {/* Food Menu */}
        <div className="menu-card">
          <div className="menu-header">
            <h3>Food Menu</h3>
            <p className="muted">Discover our full selection of Asian fusion dishes.</p>
          </div>
          <div className="menu-frame-wrapper">
            <iframe
              title="Food Menu"
              src="/FoodMenu.pdf#toolbar=0&navpanes=0&scrollbar=0"
            />
          </div>
        </div>

        {/* Drinks Menu */}
        <div className="menu-card">
          <div className="menu-header">
            <h3>Drinks Menu</h3>
            <p className="muted">
              Signature cocktails, mocktails & timeless classics crafted by our bartenders.
            </p>
          </div>
          <div className="menu-frame-wrapper">
            <iframe
              title="Drinks Menu"
              src="/DrinksMenu.pdf#toolbar=0&navpanes=0&scrollbar=0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
