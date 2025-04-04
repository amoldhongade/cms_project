import React from 'react';
import { Link } from 'react-router-dom';
import '@cmsgov/design-system/dist/css/index.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer ds-u-padding-y--2 ds-u-margin-top--auto">
      <div className="footer-links ds-u-display--flex ds-u-justify-content--start ds-u-padding-x--2">
        <Link to="/" className="footer-link ds-u-padding-y--1">Home</Link>
        <Link to="/privacy-policy" className="footer-link ds-u-padding-y--1">Privacy Policy</Link>
        <Link to="/security-policy" className="footer-link ds-u-padding-y--1">Security Policy</Link>
      </div>
    </footer>
  );
};

export default Footer; 