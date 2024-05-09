import React from "react";
import "./Footer.css";

function Footer()  {
  return (
    <div className = "footer">
      Copyright © {new Date().getFullYear()} Innova
      Solutions,Inc. All rights reserved.
    </div>
  );
}

export default Footer;

