import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDownload } from 'react-icons/fa';
import './RandomImageGenerator.css';

const RandomImageGenerator = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const generateImages = () => {
    setLoading(true);

    const newImages = Array.from({ length: 12 }).map((_, i) => {
      const width = 300 + Math.floor(Math.random() * 200);  // width 300–500
      const height = 200 + Math.floor(Math.random() * 200); // height 200–400
      const seed = `${Date.now()}-${i}`;
      return {
        id: seed,
        src: `https://picsum.photos/seed/${seed}/${width}/${height}`,
      };
    });

    setTimeout(() => {
      setImages(newImages);
      setLoading(false);
      AOS.refresh();
    }, 500);
  };


  return (
    <div className="random-gen my-5 text-center container">
      <h2 className="mb-4" data-aos="fade-down">Random Image Generator</h2>

      <div className="mb-4">
        <button className="btn btn-success" onClick={generateImages} disabled={loading}>
          {loading && (
            <span className="spinner-border spinner-border-sm me-2" role="status" />
          )}
          Generate Images
        </button>
      </div>

      <div className="masonry-container">
        {images.map((image, idx) => (
          <div className="masonry-item position-relative" key={image.id} data-aos="zoom-in">
            <img
              src={`https://picsum.photos/seed/${image.id}/300/200`}
              alt={`Random ${idx}`}
              className="img-fluid rounded lazy-img"
              loading="lazy"
            />

            <a
              href={image.src}
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
