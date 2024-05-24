import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../../../store/reducers/app/app";
import { useNavigate } from "react-router-dom";
import DocumentUploader from "../documentUploader/documentUploader";
import RightArrowIcon from "../../../assets/svgs/rightArrowIcon";
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

  const simulateUpload = () => new Promise((resolve, reject) => {
    const networkIssue = Math.random() < 0.3;
    setTimeout(() => {
      if (networkIssue) {
        reject(new Error("Network issue"));
      } else {
        resolve("Upload successful");
      }
    }, 1000);
  });

  const handleSubmit = async () => {
    if (selectedFile) {
      if (isValidFile) {
        try {
          await simulateUpload();
          dispatch(setAlert({ message: "File uploaded successfully", messageType: "success" }));
          setErrorMessage("");
          setUploadFailed(false);
        } catch (error) {
          setUploadFailed(true);
          dispatch(setAlert({ message: "Failed to upload", messageType: "failure" }));
        }
      } else {
        setErrorMessage("File size or format is incorrect.");
        setUploadFailed(true);
      }
    }
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
          <button className="next-page-button"
            onClick={handleNextPage}
            disabled={!isValidFile}>
            Next page
            <div className="arrow-container">
              <RightArrowIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CandidateProfileView;

