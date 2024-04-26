import React from 'react';
import './Footer.css';

function Footer()  {
  return (
    <footer>
      <div className="footer">
        <p className='footer-text'>
          Copyright &copy; {new Date().getFullYear()}&nbsp;
           Innova Solutions,Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
