import React from "react";
import UploadIcon from "../../assets/svgs/UploadIcon";
import "./FileUpload.css";

function FileUpload({
  fileRef,
  identifier,
  canAttachMultiple,
  disabled,
  handleFiles,
}) {
  return(
    <>
      <label className="button-tag"
        htmlFor={identifier}
      >
        <UploadIcon className="file-upload-image"/>
        <p className="upload-text">Click to Upload</p>
      </label>
      <input
        ref={fileRef}
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
