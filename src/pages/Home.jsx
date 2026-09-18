import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        height: '100vh',
        width: '100%',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url("/images/hero_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        textAlign: 'center',
        padding: '0 2rem'
      }}>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1rem', letterSpacing: '2px' }}>
          Alex Photography
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', fontWeight: 300, letterSpacing: '1px' }}>
          Capturing the untamed beauty of life, one frame at a time.
        </p>
        <Link to="/portfolio" className="btn-primary" style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none' }}>
          View Portfolio
        </Link>
      </section>

      {/* Featured Categories */}
      <section className="section container">
        <h2 className="section-title">Specialties</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { title: 'Weddings', img: '/images/wedding_sample.png' },
            { title: 'Portraits', img: '/images/portrait_sample.png' },
            { title: 'Wildlife', img: '/images/wildlife_sample.png' },
          ].map((cat) => (
            <div key={cat.title} style={{ position: 'relative', overflow: 'hidden', height: '400px', cursor: 'pointer', borderRadius: '4px' }} className="category-card">
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: `url(${cat.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.5s ease'
              }} className="category-bg" />
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, width: '100%',
                padding: '2rem',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                color: 'white'
              }}>
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          .category-card:hover .category-bg {
            transform: scale(1.05);
          }
        `}</style>
      </section>
    </div>
  );
};

export default Home;
