import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionCard from './SectionCard';
import ReviewSwiper from './ReviewSwiper';

const About = () => {
  const categories = [
    {
      name: 'Proteins',
      image: 'https://images.unsplash.com/photo-1598960891283-8b6c63d1083b?auto=format&fit=crop&w=600&q=60',
    },
    {
      name: 'Vitamins',
      image: 'https://images.unsplash.com/photo-1606229570165-d28f857e8b6b?auto=format&fit=crop&w=600&q=60',
    },
    {
      name: 'Pre-Workout',
      image: 'https://images.unsplash.com/photo-1585386959984-a4155224c8f8?auto=format&fit=crop&w=600&q=60',
    }
  ];

  const certifications = [
    { name: "ISO Certified", image: "/assets2/certificate1.jpg" },
    { name: "FDA Approved", image: "/assets2/certificate2.jpg" },
    { name: "GMP Certified", image: "/assets2/certificate3.jpg" }
  ];

  return (
    <div className="container my-5">
      <style>{`
        .card-img-top {
          border-bottom: 2px solid #eee;
        }
        .card-title {
          font-weight: 600;
        }
        .bg-light {
          background-color: #f8f9fa !important;
        }
        .founder-img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 50%;
        }
      `}</style>

      <div className="text-center mb-5">
      <h2 
        className="fw-bold" 
        style={{ 
          fontSize: '2.5rem', 
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)', 
          color: 'black' 
        }}
      >About Our Store</h2>
        <p className="lead">Providing premium quality supplements since 2010</p>
        <p>We offer a wide range of products backed by science, quality certifications, and expert recommendations.</p>
      </div>

      <div className="row mb-5 justify-content-center">
        <div className="col-md-12">
          <div className="card shadow p-4 bg-light mx-auto text-center" style={{ maxWidth: '900px' }}>
            <h4 className="fw-bold mb-3 text-center">Our Office</h4>
            <p><i className="bi bi-geo-alt-fill text-primary me-2"></i>123 Fitness Street, Gym District, City - 560001</p>
            <p><i className="bi bi-clock-fill text-primary me-2"></i>Mon-Sat: 7:00 AM - 9:00 PM | Sun: 9:00 AM - 6:00 PM</p>
            <p><i className="bi bi-telephone-fill text-primary me-2"></i>+91 9876543210</p>
          </div>
        </div>
      </div>


      <div className="text-center mb-5">
        <h3 className="fw-bold mb-4">Certifications</h3>
        <div className="row justify-content-center">
          {certifications.map((cert, idx) => (
            <div key={idx} className="col-4 col-md-2 mb-3">
              <div className="bg-white p-3 rounded shadow text-center">
                <img src={cert.image} alt={cert.name} className="img-fluid mb-2" style={{ height: '80px' }} />
                <p className="mb-0">{cert.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="founder-list">
              <h3 className="fw-bold mb-4 text-center">Meet Our Founders</h3>
              <div className="row mb-5 justify-content-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card p-4 shadow" style={{ maxWidth: '1000px', width: '100%' }}>
                  <div className="d-flex align-items-center">
                    <img
                      src="/assets2/founder1.jpg"
                      alt="Founder"
                      className="founder-img me-3"
                    />
                    <div>
                      <h5 className="fw-bold mb-1">Tushar Falke</h5>
                      <p className="text-muted small mb-2">Founder & Nutrition Expert</p>
                    </div>
                  </div>
                  <p className="mt-3 mb-0">
                    "I founded this store to empower individuals with the right nutrition to transform their lives. With a background in sports nutrition, I'm committed to quality, authenticity, and your goals."
                  </p>
                </div>
              </div>
            </div>
            <div className="row mb-5 justify-content-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card p-4 shadow" style={{ maxWidth: '1000px', width: '100%' }}>
                  <div className="d-flex align-items-center">
                    <img
                      src="/assets2/founder2.jpg"
                      alt="Founder"
                      className="founder-img me-3"
                    />
                    <div>
                      <h5 className="fw-bold mb-1">Adil Mulani</h5>
                      <p className="text-muted small mb-2">Founder & Nutrition Expert</p>
                    </div>
                  </div>
                  <p className="mt-3 mb-0">
                    "I founded this store to empower individuals with the right nutrition to transform their lives. With a background in sports nutrition, I'm committed to quality, authenticity, and your goals."
                  </p>
                </div>
              </div>
            </div>
        </div>
      
    
        <ReviewSwiper />

          <div className="all-product-container">
          <h3 className="text-center fw-bold mb-4">Look At Our Products</h3>
          <SectionCard />
          </div>
     
    </div>
  );
};

export default About;
