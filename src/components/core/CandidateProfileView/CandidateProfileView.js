import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../../../store/reducers/app/app";
import { useNavigate } from "react-router-dom";
import { PostIdProofDetails } from "../../../../src/store/reducers/candidate/candidate";
import DocumentUploader from "../documentUploader/documentUploader";
import RightArrowIcon from "../../../assets/svgs/rightArrowIcon";
import CallIcon from "../../assets/svgs/CallIcon";
import MailIcon from "../../assets/svgs/MailIcon";
import ExperienceIcon from "../../assets/svgs/ExperienceIcon";
import Infocard from "./Infocard/Infocard";
import "./CandidateProfileView.css";
import { candidateDetails } from "../../../components/core/CandidateProfileView/Infocard/Constants";
import VerticalLine from "../../../assets/svgs/VerticalLine";
import "./CandidateProfileView.css";

function CandidateProfileView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isValidFile, setIsValidFile] = useState(false);
  const [uploadFailed, setUploadFailed] = useState(false);

  const handleNextPage = () => {
    navigate("/candidate/assessment-instructions");
  };

  const handleFileChange = (file) => {
    if (file) {
      setSelectedFile(file);
      setIsValidFile(
        file.size <= 2 * 1024 * 1024 &&
        ["image/jpeg", "image/jpg", "image/png"].includes(file.type)
      );
      setUploadFailed(false);
    }
  };

  const handleDelete = () => {
    setSelectedFile(null);
    setErrorMessage("");
    setIsValidFile(false);
    setUploadFailed(false);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      if (isValidFile) {
        dispatch(PostIdProofDetails({
          file: selectedFile,
          candidateId: "00329248-165d-45e4-96dd-dcd1b3f31dac",
          onSuccess: () => {
            dispatch(setAlert({ message: "File uploaded successfully", messageType: "success" }));
            setErrorMessage("");
            setUploadFailed(false);
          },
          onError: () => {
            setUploadFailed(true);
            dispatch(setAlert({ message: "Failed to upload", messageType: "failure" }));
          }
        }));
      } else {
        setErrorMessage("File size or format is incorrect.");
        setUploadFailed(true);
      }
    }
  };

  return (
    <>
      <div className="header-container">
        <div className="candidate-container">
          <div className="Candidate-box">
            <div className="Candidate-info-container">
              <div className="icon-wrapper">
                <div className="icon-container">
                  <div className="candidate-name">
                    {candidateDetails.candidateName}
                    <Infocard text={candidateDetails.uniqueNumber} background="green-background" />
                  </div>
                  <div className="icon-item">
                    <CallIcon />
                    <span className="candidate-number">
                      {candidateDetails.phoneNumber}
                    </span>
                  </div>
                  <div className="icon-item">
                    <MailIcon />
                    <span className="candidate-mail">
                      {candidateDetails.Email}
                    </span>
                  </div>
                  <div className="icon-item">
                    <ExperienceIcon />
                    <span className="candidate-experience">
                      {candidateDetails.Experience}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="Skill-set-container">
              <div className="vertical-line">
                <VerticalLine />
              </div>
              <div className="skills-container">
                <p>Skills:</p>
                <div className="skills">
                  <div className="primary-skills">
                    <Infocard text={candidateDetails.primarySkills} background="blue-background" />
                  </div>
                  <div className="secondary-skills">
                    <Infocard text={candidateDetails.secondarySkills} background="blue-background" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="email-address-container">
            {candidateDetails.supportEmail}
          </div>
        </div>
      </div>

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
              handleFiles={(e) => handleFileChange(e.target.files[0])}
              selectedFile={selectedFile}
              errorMessage={errorMessage}
              handleDelete={handleDelete}
              uploadFailed={uploadFailed}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="button-layout">
              <button
                className="upload-button"
                onClick={handleSubmit}
                disabled={!selectedFile || errorMessage}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
        <div className="next-page-container">
          <div className="button-container">
            <button
              className="next-page-button"
              onClick={handleNextPage}
              disabled={!isValidFile || uploadFailed}
            >
              Next page
              <div className="arrow-container">
                <RightArrowIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CandidateProfileView;

