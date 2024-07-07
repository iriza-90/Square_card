import React from 'react';
import '../App.css';
import { FaEnvelope, FaPhone, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <div className="logo-box"></div>
            <div className="logo-box"></div>
          </div>
          <p className="footer-description">
            A Modern Bank Card For A Modern World And Advanced And Up-To-Date Services For Your Convenience
          </p>
          <div className="footer-links">
            <a href="/about-us">About Us</a>
            <a href="/services">Services</a>
            <a href="/careers">Careers</a>
            <a href="/learn">Learn</a>
            <a href="/branches">Branches</a>
            <a href="/faq">FAQ</a>
            <a href="/blog">Blog</a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-newsletter-section">
            <p className="footer-newsletter-title">To know the latest news and updates, enter your email so that we can contact you:</p>
            <div className="footer-newsletter">
              <form>
                <input type="email" placeholder="Enter Email Address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-contact">
            <p>Contact Us</p>
            <a href="mailto:support@squarecard.com"><FaEnvelope /> support@squarecard.com</a>
            <p><FaPhone /> +123 456 7890</p>
            <div className="footer-social">
              <a href="https://twitter.com"><FaTwitter /></a>
              <a href="https://facebook.com"><FaFacebook /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Square Card. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
