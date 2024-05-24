import React from "react";
import CallIcon from "../../assets/svgs/CallIcon";
import MailIcon from "../../assets/svgs/MailIcon";
import ExperienceIcon from "../../assets/svgs/ExperienceIcon";
import Infocard from "./Infocard/Infocard";
import "./CandidateProfileView.css";

function CandidateProfileView() {
  return (
    <div className='Candidate-box'>
      <div className="vertical-line"></div>
      <div className="icon-wrapper">
        <div className='icon-container'>
          <div className="icon-item">
            <CallIcon />
          </div>
          <div className="icon-item">
            <MailIcon />
          </div>
          <div className="icon-item">
            <ExperienceIcon />
          </div>
        </div>
      </div>
      <div className = "support-email">
        <p>For further queries reach out to
         firstname.lastname@innovasolutions.com </p>
      </div>
      <Infocard/>
    </div>
  );
}

export default CandidateProfileView;
