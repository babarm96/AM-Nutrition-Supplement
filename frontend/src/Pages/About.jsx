import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionCard from '../Componants/SectionCard';


import './About.css';
import ReviewSwiper from '../Componants/ReviewSwiper';

const About = () => {
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

      {/* About Title Section */}
              <div className="container my-5">
          <div
            className="row justify-content-center align-items-center text-center"
            style={{
              background: "#3B3D3F",
              borderRadius: "30px",
              color: "#212529",
              padding: "40px 20px",
            }}
          >
            <div className="col-12">
              <h2
                className="fw-bold"
                style={{
                  fontSize: "clamp(40px, 8vw, 90px)",
                  fontFamily: "Georgia, serif",
                  textShadow: "2px 2px 6px rgba(230, 219, 219, 0.3)",
                  color: "black",
                }}
              >
                About Our Store
              </h2>
            </div>
            <div className="col-12 col-md-10 mt-3">
              <p className="lead text-white">
                Providing premium quality supplements since 2010
              </p>
              <p className="text-white">
                We offer a wide range of products backed by science, quality certifications, and expert recommendations.
              </p>
            </div>
            <div className="col-12 d-flex justify-content-center flex-wrap mt-3">
              <a
                href="/"
                className="btn text-light m-2"
                style={{
                  fontSize: "18px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Home Page
              </a>
              <a
                href="/about"
                className="btn text-light m-2"
                style={{
                  fontSize: "18px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "bold",
                }}
              >
                <span>◉</span> About
              </a>
            </div>
          </div>
        </div>



      {/* Office Info Section */}
      <div className="row mt-5 mb-5 justify-content-center">
        <div className="col-md-12">
          <div className="card shadow p-4 bg-light mx-auto text-center" style={{ maxWidth: '900px' }}>
            <h4 className="fw-bold mb-3 text-center">Our Office</h4>
            <p><i className="bi bi-geo-alt-fill text-primary me-2"></i>123 Fitness Street, Gym District, City - 560001</p>
            <p><i className="bi bi-clock-fill text-primary me-2"></i>Mon-Sat: 7:00 AM - 9:00 PM | Sun: 9:00 AM - 6:00 PM</p>
            <p><i className="bi bi-telephone-fill text-primary me-2"></i>+91 9876543210</p>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
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

      {/* Founders Section */}
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

      {/* Reviews Swiper Section */}
      <ReviewSwiper />

      {/* Products Section */}
      <div className="all-product-container">
        <h3 className="text-center fw-bold mb-4">Look At Our Products</h3>
        <SectionCard />
      </div>
    </div>
  );
};

export default About;
