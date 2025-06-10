import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/image/Logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm custom-navbar">
      <div className="container">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo-img" />
        </NavLink>

        <div className="d-flex ms-auto gap-4 nav-links">
          <NavLink to="/" className="nav-link" end>Home</NavLink>
          <NavLink to="/references" className="nav-link">References</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
