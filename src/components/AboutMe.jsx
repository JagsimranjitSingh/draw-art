import React, { useEffect } from 'react';
import './AboutMe.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import myImage from '../assets/image/aboutme.png';
import { FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-container container py-5 d-flex flex-column flex-md-row align-items-center justify-content-center">
      {/* Image Section with shapes */}
      <div className="image-section position-relative mb-4 mb-md-0 me-md-5" data-aos="zoom-in">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <img src={myImage} alt="Jagsimranjit Singh" className="about-image" />
      </div>

      {/* Text Section */}
      <div className="text-section text-center text-md-start" data-aos="fade-left">
        <h2 className="about-title">About Me</h2>
        <p>
          I’m <em>Jagsimranjit Singh</em>. I’m Web-Designer and Web-Developer. And a part-<br />time artist.
          I have developed many type of project and website.
        </p>
        <p>
          I like to craft solid and scalable web products with great user experience. In<br /> part-time,
          I love to draw people, nature, building and fictional characters.
        </p>

        {/* Social Icons */}
        <div className="social-icons mt-4 d-flex justify-content-center justify-content-md-start gap-4">
          <a href="https://wa.me/916283482134" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={36} color="#25D366" />
          </a>
          <a href="https://www.instagram.com/jag_simran77/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={36} color="#E4405F" />
          </a>
          <a href="https://github.com/JagsimranjitSingh" target="_blank" rel="noopener noreferrer">
            <FaGithub size={36} color="#000" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
