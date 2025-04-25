import React from "react";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <footer className="gym-footer">
      <div className="gym-footer-container container">
        {/* Top Section */}
        <div className="gym-footer-content row">
          {/* Social Media Section */}
          <div className="gym-footer-section gym-social-media col-md-4">
            <h3>Follow Us</h3>
            <div className="gym-social-icons d-flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gym-social-link"
              >
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gym-social-link"
              >
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gym-social-link"
              >
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gym-social-link"
              >
                <i className="bi bi-youtube fs-5"></i>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="gym-footer-section gym-contact col-md-4">
            <h3>Contact Us</h3>
            <p>Email: support@proteinstore.com</p>
            <p>Phone: +1 (234) 567-890</p>
            <p>Address: 123 Fitness St, Muscle City, USA</p>
          </div>

          {/* Quick Links Section */}
          <div className="gym-footer-section gym-links col-md-4">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/faq">FAQs</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="gym-footer-bottom text-center mt-4">
          <p>© 2025 Protein Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
