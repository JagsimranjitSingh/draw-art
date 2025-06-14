import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProductSuggestions.css';

const TAGS = ['Graphite', 'Charcoal', 'Pencil Color', 'Painting'];

const productsData = [
  // Graphite
  {
    id: 1, name: 'Graphite Pencil Set', use: 'Sketching & shading', category: 'Graphite', image: '/products/graphite-pencils.jpg',
  },
  {
    id: 2, name: 'Graphite Sticks', use: 'Large area shading', category: 'Graphite', image: '/products/graphite-sticks.jpg',
  },
  {
    id: 3, name: 'Mechanical Pencils', use: 'Precision graphite lines', category: 'Graphite', image: '/products/mechanical-pencil.jpg',
  },

  // Charcoal
  {
    id: 4, name: 'Charcoal Pencils', use: 'Bold & dramatic shading', category: 'Charcoal', image: '/products/charcoal-pencils.jpg',
  },
  {
    id: 5, name: 'Compressed Charcoal', use: 'Intense blacks', category: 'Charcoal', image: '/products/compressed-charcoal.jpg',
  },
  {
    id: 6, name: 'Charcoal Powder', use: 'Smooth backgrounds', category: 'Charcoal', image: '/products/charcoal-powder.jpg',
  },

  // Pencil Color
  {
    id: 7, name: 'Colored Pencil Set', use: 'Vibrant color drawing', category: 'Pencil Color', image: '/products/colored-pencils.jpg',
  },
  {
    id: 8, name: 'Watercolor Pencils', use: 'Color + watercolor effects', category: 'Pencil Color', image: '/products/watercolor-pencils.jpg',
  },

  // Painting
  {
    id: 9, name: 'Acrylic Paint Set', use: 'Bold and opaque art', category: 'Painting', image: '/products/acrylic-set.jpg',
  },
  {
    id: 10, name: 'Watercolor Set', use: 'Transparent and layered paint', category: 'Painting', image: '/products/watercolor-set.jpg',
  },
  {
    id: 11, name: 'Oil Pastels', use: 'Creamy blendable texture', category: 'Painting', image: '/products/oil-pastels.jpg',
  },
  {
    id: 12, name: 'Brush Set', use: 'Smooth brushstrokes', category: 'Painting', image: '/products/brush-set.jpg',
  }
];

const ProductSuggestions = () => {
  const [activeTag, setActiveTag] = useState('');
  const [filtered, setFiltered] = useState(productsData);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    setFiltered(activeTag
      ? productsData.filter(p => p.category === activeTag)
      : productsData
    );
  }, [activeTag]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="product-suggestions container py-5">
      <h2 className="text-center mb-2">Products:</h2>
      <p className="text-center fst-italic mb-4">Product/Tool suggestions for beginner artists</p>

      <div className="tags mb-4 d-flex justify-content-center flex-wrap gap-3">
        {TAGS.map(tag => (
          <button
            key={tag}
            className={`tag-btn ${activeTag === tag ? 'active' : ''}`}
            data-aos="zoom-in"
            onClick={() => setActiveTag(prev => prev === tag ? '' : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filtered.map(product => (
          <div className="product-card" key={product.id} data-aos="fade-up">
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="overlay">
              <h5>{product.name}</h5>
              <p>{product.use}</p>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default ProductSuggestions;
