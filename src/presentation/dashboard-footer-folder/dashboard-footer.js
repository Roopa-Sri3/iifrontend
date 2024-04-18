import React from 'react';
import './dashboard-footer.css';

function Footer() {
  return (
    <div className = "footer">
      Copyright © {new Date().getFullYear()}
      Innova Solutions Inc. All rights reserved.
    </div>
  );
}

export default Footer;

