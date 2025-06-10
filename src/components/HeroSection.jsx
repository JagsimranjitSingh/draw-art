import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/image/home-art.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Text Column */}
          <div className="col-lg-6 text-center text-lg-mid mb-4 mb-lg-0">
            <h1 className="hero-title">Start Drawing Today</h1>
            <p className="hero-subtext">Ideal for both beginners and experts –</p>
            <p className="hero-subtext">discover tutorials, references, and art tools all in one spot.</p>
          </div>

          {/* Right Image Column */}
          <div className="col-lg-6 text-center">
            <img src={heroImage} alt="Hero Artwork" className="img-fluid hero-image shadow" />
          </div>
        </div>

        {/* Scroll Icon */}
        <div className="text-center mt-5">
          <div className="scroll-down-icon">&#x25BC;</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
