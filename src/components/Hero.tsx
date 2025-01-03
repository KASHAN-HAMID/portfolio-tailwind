import React from "react";
import Navbar from "./Navbar";
import '../app/styles/hero.css';

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero-container"
    >
      <Navbar />
      <div className="hero-content">
        <div></div>

        <div className="hero-text">
          <div className="hero-msin"> 
            <p data-aos="zoom-in-up">I am Muhammad KASHAN</p>
            <p data-aos="zoom-in-up">A Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
