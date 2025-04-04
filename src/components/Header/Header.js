import React from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import '@cmsgov/design-system/dist/css/index.css';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();

  return (
    <Box className={`header-container ${darkMode ? 'dark-mode' : ''}`}>
      <Box className="logo-container ds-u-display--flex ds-u-justify-content--between ds-u-align-items--center">
        <Link to="/" className="logo-link">
          <img 
            src="/images/cms-logo.png" 
            alt="Centers for Medicare & Medicaid Services" 
            className="cms-logo"
          />
        </Link>
        <img 
          src="/images/compliance-road-sign.png" 
          alt="Compliance Road Sign" 
          className="road-sign"
        />
      </Box>
      <AppBar position="static" className="nav-bar">
        <Toolbar className="toolbar">
          <Box className="nav-links ds-u-display--flex ds-u-align-items--center">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              About ASETT
            </Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact Us
            </Link>
            <Box className="dropdown">
              <Link to="/support" className={`nav-link ${location.pathname === '/support' ? 'active' : ''}`}>
                Support
                <span className="dropdown-arrow">▼</span>
              </Link>
            </Box>
          </Box>
          <Box className="auth-buttons ds-u-display--flex ds-u-align-items--center ds-u-gap--2">
            <IconButton
              onClick={toggleDarkMode}
              color="inherit"
              className="theme-toggle-button"
              aria-label="toggle dark mode"
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Link to="/register" className="auth-link">
              <span className="auth-icon">👤</span> Register
            </Link>
            <Link to="/login" className="auth-link">
              <span className="auth-icon">🔒</span> Login
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Typography variant="caption" className="form-number ds-u-text-align--right">
        Form Approved OMB No. 0938-0948
      </Typography>
    </Box>
  );
};

export default Header; 