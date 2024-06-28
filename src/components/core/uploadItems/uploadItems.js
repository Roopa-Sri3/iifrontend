import React from "react";
import FileIcon from "../../../assets/svgs/FileIcon";
import DeletefileIcon from "../../../assets/svgs/DeletefileIcon";
import "./uploadItems.css";

const UploadItems = ({ file, onDelete, errorMessage, uploadFailed }) => {
  const handleDeleteFile = () => {
    onDelete();
  };

  return (
    <div className="complete-file-content-view">
      <div className={`file-document-layout ${(uploadFailed || errorMessage) ? "error-document-layout" : ""}`}>
        <div className="file-layout">
          <FileIcon />
        </div>
        <div className="file-information-layout">
          <span className="file-document-name">{file.name}</span>
          <span className="file-document-size">
            {(file.size / (1024 * 1024)).toFixed(2)} MB
          </span>
        </div>
      </div>
      <div className="delete-button-upload">
        <DeletefileIcon onClick={handleDeleteFile} />
      </div>
    </div>
  );
};

export default UploadItems;

