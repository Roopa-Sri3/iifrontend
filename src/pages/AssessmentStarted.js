import React from "react";
import OopsIcon from "../assets/svgs/OopsIcon";
import "./AssessmentStarted.css";

function AssessmentStarted(){
  return (
    <div className ="already-started-data">
      <div className="reason-info">
        <p className="oops-message">Oops!</p>
        <OopsIcon />
        <p>The assessment has already started. You won't be able to handle it again.</p>
      </div>
    </div>
  );
}

export default AssessmentStarted;
