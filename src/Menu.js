import React from "react";

/* Place FoodMenu.pdf and DrinksMenu.pdf in public/ to enable these previews */
export default function Menu() {
  return (
    <section className="page container">
      <div className="menu-hero">
        <h2>Our Menus (PDF)</h2>
        <p className="muted">Open each PDF to view the full menu. If you want, replace the files in <code>/public</code>.</p>
      </div>

      <div className="menu-grid">
        <div className="menu-card">
          <h3>Food Menu</h3>
          <p className="muted">Full food menu with descriptions & prices (PDF preview).</p>

          <div style={{ margin: "1rem 0" }}>
            <iframe
              title="Food Menu"
              src="/FoodMenu.pdf"
              width="100%"
              height="480px"
              style={{ border: "1px solid rgba(255,255,255,0.04)", borderRadius: "8px" }}
            />
          </div>

          <div className="menu-actions">
            <a className="btn btn-outline" href="/FoodMenu.pdf" target="_blank" rel="noreferrer">Open FoodMenu.pdf</a>
          </div>
        </div>

        <div className="menu-card">
          <h3>Drinks Menu</h3>
          <p className="muted">Cocktails & mocktail list — PDF preview below.</p>

          <div style={{ margin: "1rem 0" }}>
            <iframe
              title="Drinks Menu"
              src="/DrinksMenu.pdf"
              width="100%"
              height="480px"
              style={{ border: "1px solid rgba(255,255,255,0.04)", borderRadius: "8px" }}
            />
          </div>

          <div className="menu-actions">
            <a className="btn btn-outline" href="/DrinksMenu.pdf" target="_blank" rel="noreferrer">Open DrinksMenu.pdf</a>
          </div>
        </div>
      </div>

      <p className="small muted">TIP: To update menu content, replace <code>/public/FoodMenu.pdf</code> and <code>/public/DrinksMenu.pdf</code> with new files (same filename).</p>
    </section>
  );
}
