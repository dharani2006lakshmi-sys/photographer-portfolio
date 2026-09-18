import React, { useState } from 'react';
import { X } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/images/wedding_sample.png', alt: 'Wedding Photography', category: 'Wedding' },
    { src: '/images/portrait_sample.png', alt: 'Portrait Photography', category: 'Portrait' },
    { src: '/images/wildlife_sample.png', alt: 'Wildlife Photography', category: 'Wildlife' },
    { src: '/images/landscape_sample.png', alt: 'Landscape Photography', category: 'Landscape' },
    { src: '/images/hero_bg.png', alt: 'Moody Setup', category: 'Creative' },
    // Reusing samples to create a masonry grid
    { src: '/images/wedding_sample.png', alt: 'Wedding Detail', category: 'Wedding' },
    { src: '/images/portrait_sample.png', alt: 'Studio Portrait', category: 'Portrait' },
    { src: '/images/landscape_sample.png', alt: 'Mountain View', category: 'Landscape' },
  ];

  return (
    <div className="animate-fade-in section" style={{ paddingTop: '100px' }}>
      <div className="container">
        <h1 className="section-title">Portfolio</h1>
        
        {/* Masonry Layout */}
        <div style={{
          columnCount: 3,
          columnGap: '1.5rem',
          '@media (max-width: 768px)': { columnCount: 1 }
        }} className="masonry-grid">
          {images.map((img, index) => (
            <div 
              key={index} 
              style={{ 
                marginBottom: '1.5rem', 
                breakInside: 'avoid',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '4px'
              }}
              onClick={() => setSelectedImage(img.src)}
              className="gallery-item"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                style={{ 
                  width: '100%', 
                  display: 'block', 
                  transition: 'transform 0.4s ease'
                }} 
                className="gallery-img"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.95)',
            zIndex: 2000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            style={{ position: 'absolute', top: '2rem', right: '2rem', color: 'white' }}
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Fullscreen" 
            style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain' }} 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .masonry-grid { column-count: 2 !important; }
        }
        @media (max-width: 600px) {
          .masonry-grid { column-count: 1 !important; }
        }
        .gallery-item:hover .gallery-img {
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
