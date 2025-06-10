// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/image/Logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => setIsCollapsed(!isCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm custom-navbar">
      <div className="container">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo-img" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
          <div className="navbar-nav ms-auto text-center gap-lg-4 gap-3 mt-3 mt-lg-0">
            <NavLink to="/" className="nav-link" end onClick={() => setIsCollapsed(true)}>Home</NavLink>
            <NavLink to="/references" className="nav-link" onClick={() => setIsCollapsed(true)}>References</NavLink>
            <NavLink to="/projects" className="nav-link" onClick={() => setIsCollapsed(true)}>Projects</NavLink>
            <NavLink to="/about" className="nav-link" onClick={() => setIsCollapsed(true)}>About</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
