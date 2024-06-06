import React from "react";
import Thankyou from "../assets/Images/ThankYou.png";
import "./ThankYou.css";

const ThankYou = () => {
  const message = "Your response has been submitted and will contact you soon.";
  return (
    <div className="thank-you-container">
      <div className="thank-you-sub">
        <center>
          <img className="thank-you-img" src={Thankyou} alt="Thank You" ></img>
          <p className="thank-you">Thank You.</p>
          <p className="thank-you-desc">{message}</p>
        </center>
      </div>
    </div>
  );
};

export default ThankYou;
