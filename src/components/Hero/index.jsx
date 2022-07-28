import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img
        src="../../media/group.png"
        alt="grouped photos"
        className="hero--photo"
      ></img>
      <div className="hero--title">Online Experiences</div>
      <div className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </div>
    </div>
  );
};

export default Hero;
