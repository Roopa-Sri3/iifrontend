import React from 'react';
import './login-header.css';
import companylogo from "../../images/company-symbol.png";
import photo from "../../images/Group.png";
function LoginHeader(){
  return (
    <header className="header">
      <img src ={companylogo} alt="Hal" className = 'logo'></img>
      <img src ={photo} alt = "pic" className = 'pic'></img>
      <div className="header-content">
        <h6 className = "header-text">
        A Platform for conducting and analyzing interviews to streamline
        the hiring process for potential candidates.
        </h6>
      </div>
    </header>
  );
}

export default LoginHeader;

