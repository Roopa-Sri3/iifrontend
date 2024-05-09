import React, { useState } from "react";
import { assessmentInstructions } from "../shared/constants";
import "./AssessmentInstructions.css";

const AssessmentInstructions = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmation = () => {
    setIsConfirmed(!isConfirmed);
  };

  return (
    <div className="instructions-container">
      <div className="instructions-card">
        <b className="inst-title">Instructions</b>
        <div className="instructions-box">
          <p className="greeting">Hello <b>Micheal Arhen,</b></p>
          <p className="go-through">
            Go through the instructions before you commence the exam.
          </p>
          <ol className="instructions-page">
            {assessmentInstructions.map((instruction, index) => (
              <li className="list-instructions" key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
        <div className="confirm-section">
          <input
            type="checkbox"
            id="confirm-checkbox"
            checked={isConfirmed}
            onChange={handleConfirmation}
            style={{ accentColor: "#4595ff",cursor:"pointer" }}
          />
          <label htmlFor="confirm-checkbox"
            className="checkbox-text">
          I confirm that I have read and understood all the exam instructions
          </label>
        </div>
        <button
          id="start-exam"
          disabled={!isConfirmed}
          className={`start-exam-button ${isConfirmed ? "enabled" : ""}`}
          onClick={() => {
            alert("Exam started!");
          }}
        >
          Start Exam
        </button>
      </div>
    </div>
  );
};

export default AssessmentInstructions;
