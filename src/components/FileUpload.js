import React from "react";
import './FileUpload.css';

function FileUpload({
  uploadIcon,
  LabelText,
  identifier,
  canAttachMultiple,
  disabled,
  handleFiles}) {
  return(
    <div>
      <label className="button-tag"
        htmlFor={identifier}
      >Upload Files
        <img className="upload-image" src={uploadIcon} alt="Upload Icon"/>
      </label>
      <input
        className="input-file-upload-button"
        labelText= {LabelText}
        id={identifier}
        type="file"
        multiple={canAttachMultiple}
        disabled={disabled}
        onchange={handleFiles}
      />
    </div>
  );
}
export default FileUpload;
