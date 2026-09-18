import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Wedding Photography",
      desc: "Comprehensive coverage of your special day, from getting ready to the final dance. Includes pre-wedding shoot.",
      price: "Starts at $2,500"
    },
    {
      title: "Portrait Sessions",
      desc: "Professional studio or outdoor portraits for individuals, families, and corporate headshots.",
      price: "Starts at $350"
    },
    {
      title: "Commercial & Product",
      desc: "High-end imagery to elevate your brand. Perfect for e-commerce, advertising, and social media.",
      price: "Custom Pricing"
    },
    {
      title: "Wildlife & Nature",
      desc: "Commissioned nature photography and exclusive prints available for purchase.",
      price: "Contact for details"
    }
  ];

  return (
    <div className="animate-fade-in section container" style={{ paddingTop: '120px' }}>
      <h1 className="section-title">Services & Pricing</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        marginTop: '3rem'
      }}>
        {services.map((service, index) => (
          <div key={index} style={{
            padding: '2rem',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            backgroundColor: 'var(--secondary-bg)',
            transition: 'transform 0.3s ease'
          }} className="service-card">
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>{service.title}</h3>
            <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>{service.desc}</p>
            <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>{service.price}</p>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Need a custom package?</h2>
        <p style={{ marginBottom: '2rem' }}>Contact me to discuss your specific requirements.</p>
        <button className="btn-primary">Get a Quote</button>
      </div>

      <style>{`
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default Services;
