import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImageGallery from './components/ImageGallery';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
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
        <Route path="/references" element={<div className="p-4">References Page</div>} />

        {/* Projects Page */}
        <Route path="/projects" element={<div className="p-4">Projects Page</div>} />

        {/* About Page */}
        <Route path="/about" element={<div className="p-4">About Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
