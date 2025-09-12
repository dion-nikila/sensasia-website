import React from "react";
import Slider from "react-slick";

const images = [
  "/images/about1.jpg",
  "/images/about2.jpg",
  "/images/about3.jpg",
  "/images/about4.jpg",
]; 
const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <section className="about-section container">
      {/* Hero */}
      <div className="about-hero">
        <h1>About Senssia</h1>
        <p className="about-subtitle">
          Serving authentic Asian fusion cuisine since 2012
        </p>
      </div>

      {/* Story */}
      <div className="about-content">
        <p>
          Senssia combines exquisite flavors, elegant ambiance, and a passion
          for culinary artistry. Each dish is crafted with love and precision,
          and our cocktails are designed to delight.
        </p>
        <p>
          Join us for a memorable experience — whether it's a casual dinner, a
          special celebration, or a night out with friends, Senssia is your
          destination for unforgettable moments.
        </p>
      </div>

      {/* Gallery */}
      <div className="about-gallery">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default About;
