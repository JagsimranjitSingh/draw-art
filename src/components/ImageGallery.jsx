import React, { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../assets/gallery/img1.jpg';
import img2 from '../assets/gallery/img2.jpg';
import img3 from '../assets/gallery/img3.jpg';
import img4 from '../assets/gallery/img4.jpg';
import img5 from '../assets/gallery/img5.jpg';
import img6 from '../assets/gallery/img6.jpg';
import img7 from '../assets/gallery/img7.jpg';
import img8 from '../assets/gallery/img8.jpg';
import img9 from '../assets/gallery/img9.jpg';
import img10 from '../assets/gallery/img10.jpg';
import img11 from '../assets/gallery/img11.jpg';
import img12 from '../assets/gallery/img12.jpg';

const images = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
  { src: img12 },
];

const ImageGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleClick = (idx) => {
    setIndex(idx);
    setOpen(true);
  };

  return (
    <section className="gallery-section bg-light">

        <div className="container py-5">
        <h2 className="text-center mb-4">My Art Gallery</h2>
        <div className="row g-3">
            {images.map((img, idx) => (
            <div
                key={idx}
                className="col-6 col-md-3 col-lg-2"
                data-aos="zoom-in"
                data-aos-delay={idx * 50}
                onClick={() => handleClick(idx)}
                style={{ cursor: 'pointer' }}
            >
                <img src={img.src} alt={`Artwork ${idx + 1}`} className="img-fluid rounded shadow-sm" />
            </div>
            ))}
        </div>

        {open && (
            <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={images}
            index={index}
            />
        )}
        </div>
    </section>
  );
};

export default ImageGallery;
