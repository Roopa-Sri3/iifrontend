import React from "react";
import { useNavigate } from "react-router-dom";
import DocumentUploader from "../documentUploader/documentUploader";
import rightArrowIcon from "../../../assets/Images/rightArrowIcon.svg";
import "./CandidateProfileView.css";

function CandidateProfileView() {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/unauthorized");
  };

  return (
    <div className="profile-viewer container">
      <div className="id-proof-title">
        <p>ID Proof</p>
      </div>
      <div className="id-proof-super-container">
        <div className="id-proof container">
          <p className="id-proof-text">Upload files for ID proof</p>
          <DocumentUploader
            displayText="Click to Upload PAN/Aadhar"
            secondaryText="Supported files JPEG, JPG, PNG with max size 2MB."
          />
        </div>
      </div>
      <div className="next-page-container">
        <div className="button-container">
          <button className="next-page-button" onClick={handleNextPage}>
            Next page
            <img className="arrow-container" src={rightArrowIcon} alt="Right-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CandidateProfileView;

