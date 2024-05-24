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
    <div>
      <label className="button-tag"
        htmlFor={identifier}
      >
        <UploadIcon className="file-upload-image"/>
        <p className="upload-text">Click to upload</p><br></br>
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
    </div>
  );
}
export default FileUpload;
