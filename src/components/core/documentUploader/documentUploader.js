import React from "react";
import FileUploader from "../fileUploader";
import UploadItems from "../uploadItems";
import "./documentUploader.css";

const DocumentUploader = ({
  displayText,
  secondaryText,
  handleFiles,
  selectedFile,
  handleDelete,
  errorMessage,
  uploadFailed,
  fileRef,
}) => (
  <div>
    <FileUploader
      identifier="file-input"
      disabled={false}
      canAttachMultiple={false}
      displayText={displayText}
      secondaryText={secondaryText}
      secondaryTextClassName="custom-secondary-text"
      handleFiles={handleFiles}
      fileRef={fileRef}
    />
    {selectedFile && (
      <UploadItems
        file={selectedFile}
        errorMessage={errorMessage}
        onDelete={handleDelete}
        uploadFailed={uploadFailed}
      />
    )}
  </div>
);

export default DocumentUploader;

