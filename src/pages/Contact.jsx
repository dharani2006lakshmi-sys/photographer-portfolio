import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="animate-fade-in section container" style={{ paddingTop: '120px' }}>
      <h1 className="section-title">Let's Create Together</h1>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4rem',
        marginTop: '2rem'
      }}>
        {/* Contact Info */}
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ marginBottom: '2rem' }}>Get in Touch</h3>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Mail className="logo-icon" />
            <span>hello@alexphotography.com</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Phone className="logo-icon" />
            <span>+1 (555) 123-4567</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <MapPin className="logo-icon" />
            <span>123 Creative Studio Blvd, NY 10001</span>
          </div>
          
          {/* Mock Map */}
          <div style={{
            width: '100%',
            height: '250px',
            backgroundColor: 'var(--border-color)',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'var(--bg-color)'
          }}>
            <p>Interactive Map Integration Here</p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ flex: '1 1 400px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.8 }}>Name</label>
              <input type="text" style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--secondary-bg)', border: '1px solid var(--border-color)', color: 'var(--text-color)', borderRadius: '4px' }} placeholder="Your Name" required />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.8 }}>Email</label>
              <input type="email" style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--secondary-bg)', border: '1px solid var(--border-color)', color: 'var(--text-color)', borderRadius: '4px' }} placeholder="your@email.com" required />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.8 }}>Inquiry Type</label>
              <select style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--secondary-bg)', border: '1px solid var(--border-color)', color: 'var(--text-color)', borderRadius: '4px' }}>
                <option>Wedding Photography</option>
                <option>Portrait Session</option>
                <option>Commercial / Product</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.8 }}>Message</label>
              <textarea rows="5" style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--secondary-bg)', border: '1px solid var(--border-color)', color: 'var(--text-color)', borderRadius: '4px', resize: 'vertical' }} placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
