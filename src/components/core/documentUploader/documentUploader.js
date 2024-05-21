import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../../../store/reducers/app/app";
import FileUploader from "../fileUploader";
import UploadItems from "../uploadItems";
import "./documentUploader.css";

const DocumentUploader = ({ displayText, secondaryText}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(" ");
  const [isFileValid, setIsFileValid] = useState(false);
  const dispatch = useDispatch();

  const validFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  const maxFileSizeInBytes = 2 * 1024 * 1024;

  const handleFiles = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setIsFileValid(validateFile(file));
    clearErrorMessage();
  };

  const validateFile = (file) => {
    if (!file) {
      return false;
    }
    const fileType = file.type;
    const fileSizeInBytes = file.size;
    return validFileTypes.includes(fileType)
     && fileSizeInBytes <= maxFileSizeInBytes;
  };

  const clearErrorMessage = () => {
    setErrorMessage("");
  };

  const handleSubmit = () => {

    if (!isFileValid) {
      handleInvalidFile("File format or size is incorrect.");
      return;
    }

    handleValidFile();
  };

  const handleInvalidFile = (errorMessage) => {
    setErrorMessage(errorMessage);
    dispatch(setAlert({
      message: "Failed to upload",
      messageType: "failure",
    }));
  };

  const handleValidFile = () => {
    dispatch(setAlert({
      message: "File uploaded successfully",
      messageType: "success",
    }));
    clearErrorMessage();
  };

  return (
    <div>
      <FileUploader
        identifier="file-input"
        labelText={displayText}
        disabled={false}
        canAttachMultiple={false}
        handleFiles={handleFiles}
        displayText={displayText}
        secondaryText={secondaryText}
        secondaryTextClassName="custom-secondary-text"
      />

      {selectedFile && (
        <UploadItems
          errorMessage={errorMessage}
          file={selectedFile}
          onDelete={() => {
            setSelectedFile(null);
            setIsFileValid(false);
            clearErrorMessage();
          }}
          isValidFile={isFileValid}
        />
      )}

      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}

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
  );
};

export default DocumentUploader;

