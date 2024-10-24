import React from 'react';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoFacebook } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-text">Follow me on social media</p>
      <div className="footer-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <IoLogoInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <IoLogoFacebook />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <SiGithub />
        </a>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Faizan Anjum. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
