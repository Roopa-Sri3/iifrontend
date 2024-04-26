import React from "react";
import './FileUpload.css';
import Upload from "../../assets/svgs/Upload";

function FileUpload({
  identifier,
  canAttachMultiple,
  disabled,
  handleFiles}) {
  return(
    <>
      <label className="button-tag"
        htmlFor={identifier}
      >
        <Upload />
        <p className="upload-text">Click to Upload</p>
      </label>
      <input
        className="input-file-upload-button"
        id={identifier}
        type="file"
        multiple={canAttachMultiple}
        disabled={disabled}
        onChange={handleFiles}
      />
    </>
  );
}
export default FileUpload;
