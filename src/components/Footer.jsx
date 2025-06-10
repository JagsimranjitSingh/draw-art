import React from 'react';
import './Footer.css'; 
import logo from '../assets/image/Logo.png';
import { FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <div className="container">
        <div className="row align-items-start text-center text-md-start">

          {/* Left Side: Logo and Text side-by-side */}
          <div className="col-md-6 mb-4 mb-md-0 d-flex flex-column flex-md-row align-items-center align-items-md-start">
            <img
              src={logo}
              alt="Logo"
              style={{ width: '80px' }}
              className="mb-3 mb-md-0 me-md-3"
            />
            <div>
              <p className="mb-1">DrawArt is an platform for generating, showcasing, exploring artistic creations. Ideal for both beginners and experts</p>
            </div>
          </div>

          {/* Right Side: Social Icons */}
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center gap-4 fs-4">
            <a href="https://wa.me/916283482134" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/jag_simran77/" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
              <FaInstagram />
            </a>
            <a href="https://github.com/JagsimranjitSingh" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-light mt-4" />

        {/* Bottom Text */}
        <div className="text-center pb-3 small">
          &copy; {new Date().getFullYear()} <strong>JAGSIMRANJIT SINGH</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
