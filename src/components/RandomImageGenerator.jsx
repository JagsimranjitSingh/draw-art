import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDownload } from 'react-icons/fa';
import './RandomImageGenerator.css';

const RandomImageGenerator = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const generateImages = () => {
    setLoading(true);
    const newImages = [];

    for (let i = 0; i < 12; i++) {
      const width = 300 + Math.floor(Math.random() * 200);
      const height = 200 + Math.floor(Math.random() * 300);
      const seed = Math.floor(Math.random() * 10000 + i);
      const url = `https://picsum.photos/seed/${seed}/${width}/${height}`;
      newImages.push({ src: url, loaded: false });
    }

    setTimeout(() => {
      setImages(newImages);
      setLoading(false);
      AOS.refresh();
    }, 600);
  };

  // Lazy observer hook
  const lazyRef = useRef([]);
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('fade-in');
            observer.current.unobserve(img);
          }
        });
      });
      lazyRef.current.forEach((img) => {
        if (img) observer.current.observe(img);
      });
    }
  }, [images]);

  return (
    <div className="random-gen my-5 text-center container">
      <h2 className="mb-4" data-aos="fade-down">Random Image Generator</h2>

      <div className="mb-4">
        <button
          className="btn btn-success"
          onClick={generateImages}
          disabled={loading}
        >
          {loading && (
            <span className="spinner-border spinner-border-sm me-2" role="status" />
          )}
          Generate Images
        </button>
      </div>

      <div className="masonry-container">
        {images.map((img, idx) => (
          <div key={idx} className="masonry-item position-relative" data-aos="zoom-in">
            <img
              data-src={img.src}
              ref={(el) => (lazyRef.current[idx] = el)}
              alt={`Random ${idx}`}
              className="img-fluid rounded lazy-img"
            />
            <a
              href={img.src}
              download={`random-image-${idx}.jpg`}
              className="download-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomImageGenerator;
