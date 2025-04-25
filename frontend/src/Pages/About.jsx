import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className="about-page">

      <section className="about-store py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">About Our Store</h2>
              <p className="lead mb-4">
                Founded in 2010, our supplement store has been serving fitness enthusiasts with premium quality products for over a decade. 
                Our mission is to provide authentic, scientifically-backed supplements that help our customers achieve their fitness goals.
              </p>
              <p>
                We stand out by offering expert advice, personalized recommendations, and only stocking products that meet our strict quality standards. 
                Our knowledgeable staff are all fitness enthusiasts themselves, ready to guide you to the right products for your needs.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="store-image position-relative rounded overflow-hidden">
                <img 
                  src="https://via.placeholder.com/600x400?text=Our+Store" 
                  alt="Our Store" 
                  className="img-fluid rounded shadow"
                />
                <div className="store-info bg-white p-3 rounded shadow-sm">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                      <strong>Location:</strong> 123 Fitness Street, Gym District, City - 560001
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-clock-fill text-primary me-2"></i>
                      <strong>Timings:</strong> Mon-Sat: 7:00 AM - 9:00 PM | Sun: 9:00 AM - 6:00 PM
                    </li>
                    <li>
                      <i className="bi bi-telephone-fill text-primary me-2"></i>
                      <strong>Contact:</strong> +91 9876543210
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands */}
      <section className="brands-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Our Trusted Brands</h2>
            <p className="lead">We provide only 100% genuine and certified products from top international and Indian brands.</p>
          </div>
          
          <div className="row g-4 justify-content-center">
            {brands.map((brand, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2">
                <div className="brand-item p-3 d-flex align-items-center justify-content-center bg-white rounded shadow-sm">
                  <img src={brand.logo} alt={brand.name} className="img-fluid" style={{maxHeight: '50px'}} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Our Certifications</h2>
            <p className="mb-4">All our products are sourced from verified distributors and certified for quality assurance.</p>
          </div>
          
          <div className="row justify-content-center">
            {certifications.map((cert, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 mb-4">
                <div className="cert-item text-center p-3">
                  <img src={cert.image} alt={cert.name} className="img-fluid mb-3" style={{height: '80px'}} />
                  <h5 className="mb-0">{cert.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="categories py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Our Product Categories</h2>
            <p className="lead">Everything you need for your fitness journey in one place</p>
          </div>
          
          <div className="row g-4">
            {categories.map((category, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2-4">
                <div className="category-card text-center p-3 rounded shadow-sm h-100">
                  <div className="category-image mb-3">
                    <img src={category.image} alt={category.name} className="img-fluid rounded" />
                  </div>
                  <h5 className="mb-0">
                    {category.name} {category.emoji}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">What Our Customers Say</h2>
            <p className="lead">Hear from fitness enthusiasts who trust our products</p>
          </div>
          
          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-4">
                <div className="testimonial-card p-4 bg-white rounded shadow-sm h-100">
                  <div className="d-flex align-items-center mb-3">
                    <img src={testimonial.image} alt={testimonial.name} className="rounded-circle me-3" width="60" />
                    <div>
                      <h5 className="mb-1">{testimonial.name}</h5>
                      <p className="text-muted mb-0 small">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`bi bi-star-fill ${i < testimonial.rating ? 'text-warning' : 'text-secondary'}`}
                      ></i>
                    ))}
                  </div>
                  <p className="mb-0">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Ready to Boost Your Performance?</h2>
          <p className="lead mb-4">Visit our store or shop online for the best supplements in town</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="https://maps.google.com" className="btn btn-light btn-lg px-4">
              <i className="bi bi-geo-alt-fill me-2"></i> Visit Our Store
            </a>
            <a href="/shop" className="btn btn-outline-light btn-lg px-4">
              <i className="bi bi-cart-fill me-2"></i> Shop Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
