import React from "react";
import LinkExpiredImg from "../../src/assets/Images/LinkExpiredImg.png";
import "./LinkExpired.css";

function LinkExpired(){
  return(
    <div className="link-expired-page">
      <div className="link-expired-card">
        <div className="text-image">
          <div>
            <h3 className="header-text">Link has Expired!</h3>
          </div>
          <div>
            <img
              src={LinkExpiredImg}
              alt="link-expired-img"
              className="link-expired-img">
            </img>
          </div>
        </div>
        <div className="text"><p>
         You forgot to complete the exam within the due date.
         The link has been expired.
        </p></div>
      </div>
    </div>
  );
}

export default LinkExpired;
