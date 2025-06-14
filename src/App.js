import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImageGallery from './components/ImageGallery';
import RandomImageGenerator from './components/RandomImageGenerator';
import ProductSuggestions from './components/ProductSuggestions';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ImageGallery />
                </>
              }
            />
            {/* References Page */}
            <Route 
              path="/references"
              element={
                <RandomImageGenerator />
              }
            />
            {/* Projects Page */}
            <Route 
              path="/products"
              element={
                <ProductSuggestions />
              }
            />
            {/* About Page */}
            <Route
              path="/about"
              element={
                <>
                  <AboutMe />
                  <ContactMe />
                </>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
