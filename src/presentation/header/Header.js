import React from 'react';
import './Header.css';
import companylogo from '../../images/company-symbol.png';

function Header(){
  return (
    <header className="header">
      <img src ={companylogo} alt="Hal" className = 'logo'></img>
      <div className="title-container">
        <p className="title">Interview Insights</p>

      </div>
    </header>
  );
}

export default Header;

