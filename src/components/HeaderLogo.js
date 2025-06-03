import React from 'react';
import './HeaderLogo.css';
import logo from 'assets/sahil-holidays-logo.png';

const HeaderLogo = () => {
  return (
    <header className="header-logo-container">
      <div className="logo-wrapper">
        <img src={logo} alt="Sahil Holidays Logo" className="header-logo-img" />
      </div>
    </header>
    
  );
};

export default HeaderLogo;
