import React from "react";
import "./hero.css";
import dark_arrow from '../../assets/dark-arrow.png'
const hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>We ensure better education for better world.</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education.
        </p>
        <button className="btn">Explore More <img src={dark_arrow}></img></button>
      </div>
    </div>
  );
};

export default hero;
