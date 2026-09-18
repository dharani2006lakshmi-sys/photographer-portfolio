import React from 'react';

const About = () => {
  return (
    <div className="animate-fade-in section container" style={{ paddingTop: '120px' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '4rem',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        {/* Image Side */}
        <div style={{ flex: '1 1 400px' }}>
          <img 
            src="/images/hero_bg.png" 
            alt="Alex - Photographer" 
            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }} 
          />
        </div>
        
        {/* Text Side */}
        <div style={{ flex: '1 1 500px' }}>
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Behind the Lens</h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.9 }}>
            Hi, I'm Alex. With over a decade of experience, my journey in photography began as a passion for storytelling and has evolved into a lifelong pursuit of capturing genuine emotion and breathtaking beauty.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            Whether I'm photographing a couple's most intimate moments on their wedding day or tracking elusive wildlife in remote locations, my goal remains the same: to create timeless, authentic imagery that resonates.
          </p>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Awards & Recognition</h3>
          <ul style={{ listStylePosition: 'inside', marginBottom: '2rem', opacity: 0.8 }}>
            <li>National Geographic Photo of the Year Finalist (2022)</li>
            <li>Best Wedding Photographer - Modern Bride Magazine (2021)</li>
            <li>Global Portrait Excellence Award (2019)</li>
          </ul>

          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Gear Setup</h3>
          <p style={{ opacity: 0.8 }}>Sony A1 & A7RV | G-Master Primes & Zooms | DJI Mavic 3 Pro</p>
        </div>
      </div>
    </div>
  );
};

export default About;
