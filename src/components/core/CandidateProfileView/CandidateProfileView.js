import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../../../store/reducers/app/app";
import { useNavigate } from "react-router-dom";
import { PostIdProofDetails } from "../../../../src/store/reducers/dashboard/dashboard";
import DocumentUploader from "../documentUploader/documentUploader";
import RightArrowIcon from "../../../assets/svgs/rightArrowIcon";
import CallIcon from "../../assets/svgs/CallIcon";
import MailIcon from "../../assets/svgs/MailIcon";
import ExperienceIcon from "../../assets/svgs/ExperienceIcon";
import Infocard from "./Infocard/Infocard";
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
        file.size > 10 * 1024 &&
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

  const handleSubmit =  () => {
    if (selectedFile) {
      if (isValidFile) {
        dispatch(PostIdProofDetails({
          file: selectedFile,
          candidateId:"CAND12348",
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
        <div className="Candidate-box">
          <div className="vertical-line"></div>
          <div className="icon-wrapper">
            <div className="icon-container">
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
          <div className="support-email">
            <p>For further queries reach out to
              firstname.lastname@innovasolutions.com </p>
          </div>
          <Infocard />
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
              uploadFailed={uploadFailed} />
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
            <button className="next-page-button"
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
