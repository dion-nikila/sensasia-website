import React from 'react';

function Menu() {
  return (
    <div className="container">
      <h2>Food Menu</h2>
      {/* Embed your Food Menu PDF from public/FoodMenu.pdf */}
      <iframe src="/FoodMenu.pdf" width="100%" height="500px" title="Food Menu"></iframe>
      <p className="small">*Replace this PDF with your actual Food Menu.</p>

      <h2>Drinks Menu</h2>
      {/* Embed your Drinks Menu PDF from public/DrinksMenu.pdf */}
      <iframe src="/DrinksMenu.pdf" width="100%" height="500px" title="Drinks Menu"></iframe>
      <p className="small">*Replace this PDF with your actual Drinks Menu.</p>
    </div>
  );
}

export default Menu;
