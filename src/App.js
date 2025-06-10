import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/references" element={<div>References Page</div>} />
        <Route path="/projects" element={<div>Projects Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
