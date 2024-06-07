import React from "react";
import OopsIcon from "../assets/svgs/OopsIcon";
import "./AssessmentCompleted.css";

function AssessmentCompleted(){
  return (
    <div className ="already-completed-data">
      <div className="reason-data">
        <p className="oops-data">Oops!</p>
        <OopsIcon />
        <p>You've completed this assessment already. You cannot take it again.</p>
      </div>
    </div>
  );
}

export default AssessmentCompleted;
