import React from 'react';

function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to Sensasia Restaurant & Bar</h1>
      </div>
      <p>
        Established in 2012, Sensasia Restaurant & Bar has been blending traditional Asian flavors with modern twists for over a decade.
        Our menu features authentic Asian fusion dishes crafted by experienced chefs, and our skilled bartenders serve the best cocktails and mocktails in town.
      </p>
      <p>
        Whether you're joining us for dinner or ordering online, we promise an elegant and enjoyable dining experience.
      </p>
      <a href="https://www.ubereats.com/lk/store/sensasia-restaurant-ragama/xSqQwTKNRIS7aBF5YRel2g"
         className="uber-button" target="_blank" rel="noopener noreferrer">
        Order Online on UberEats
      </a>
      <h3>Contact Us</h3>
      <p>Phone: <a href="tel:0112957700">0112 957 700</a></p>
      <p>Email: <a href="mailto:sensasia.rest@gmail.com">sensasia.rest@gmail.com</a></p>
      <p>Address: Peralanda Road, Ragama, Sri Lanka</p>

      <h3>Our Location</h3>
      <div className="map-container">
        {/* Google Map embed for the restaurant location */}
        <iframe
          title="Sensasia Location"
          src="https://maps.google.com/maps?q=Sensasia%20Restaurant,%20Peralanda%20Road,%20Ragama,%20Sri%20Lanka&hl=en&z=15&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
