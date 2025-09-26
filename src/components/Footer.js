import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🌱</span>
              <span className="logo-text">Krishi AI</span>
            </div>
            <p className="footer-description">
              Empowering farmers with AI-driven crop recommendations for sustainable and profitable agriculture.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                📘
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                🐦
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                📷
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                💼
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/project">Project Details</a></li>
              <li><a href="/recommendation">Recommendation</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li><a href="mailto:support@krishiai.com">support@krishiai.com</a></li>
              <li><a href="tel:+91-9876543210">+91-9876543210</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <p>📍 New Delhi, India</p>
              <p>📧 info@krishiai.com</p>
              <p>📞 +91-9876543210</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Krishi AI | SIH Project</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

