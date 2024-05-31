import React from "react";
import FileIcon from "../../../components/assets/svgs/FileIcon";
import DeletefileIcon from "../../../assets/svgs/DeletefileIcon";
import "./uploadItems.css";

const UploadItems = ({ file, onDelete, errorMessage, uploadFailed }) => {
  const handleDeleteFile = () => {
    onDelete();
  };

  return (
    <div className="complete-file-content-view">
      <div className={`file-document-layout ${(uploadFailed || errorMessage) ? "error-document-layout" : ""}`}>
        <div className="file-layout"><FileIcon /></div>
        <div className="file-info-layout">
          <span className="file-name">{file.name}</span>
          <span className="file-size">
            {(file.size / (1024 * 1024)).toFixed(2)} MB
          </span>
        </div>
      </div>
      <div className="delete-button">
        <DeletefileIcon onClick={handleDeleteFile} />
      </div>
    </div>
  );
};

export default UploadItems;

