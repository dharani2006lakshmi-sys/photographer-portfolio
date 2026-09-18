import React from 'react';
import { Mail, Phone, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0', backgroundColor: 'var(--secondary-bg)', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ marginBottom: '1rem' }}>Alex Photography</h2>
        <p style={{ marginBottom: '2rem', opacity: 0.7 }}>Capturing moments that last a lifetime.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <a href="#" aria-label="Email"><Mail size={24} /></a>
          <a href="#" aria-label="Phone"><Phone size={24} /></a>
          <a href="#" aria-label="Portfolio"><Camera size={24} /></a>
        </div>
        
        <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>
          &copy; {new Date().getFullYear()} Alex Photography. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
