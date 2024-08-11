import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon offers a delightful array of Mediterranean-inspired dishes, featuring fresh, high-quality ingredients. Our menu includes flavorful appetizers, crisp salads, savory main courses, and delectable desserts. Enjoy classic favorites like lamb kebabs, roasted vegetables, and zesty lemon-infused dishes that highlight the vibrant tastes of the Mediterranean.
        </p>
        <button className="reserve-button">Reserve a Table</button>
      </div>
      <div className="res-image">
        <img src="/icons/restaurant.jpg" alt="Little Lemon Restaurant" />
      </div>
    </section>
  );
};

export default Hero;