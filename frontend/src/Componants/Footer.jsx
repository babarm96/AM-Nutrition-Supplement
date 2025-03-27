import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer-content">
          {/* Social Media Section */}
          <div className="footer-section social-media">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: support@proteinstore.com</p>
            <p>Phone: +1 (234) 567-890</p>
            <p>Address: 123 Fitness St, Muscle City, USA</p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section links">
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
        <div className="footer-bottom">
          <p>© 2025 Protein Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
