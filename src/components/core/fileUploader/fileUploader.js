import React from "react";
import UploadIcon from "../../../assets/svgs/UploadIcon";
import "./fileUploader.css";

function FileUploader({
  identifier,
  fileRef,
  canAttachMultiple,
  disabled,
  handleFiles,
  displayText,
  secondaryText,
  secondaryTextClassName
}) {
  return (
    <>
      <div className="overall-content-container">
        <label className="upload-tag" htmlFor={identifier}>
          <div className="imageicon-container">
            <UploadIcon />
          </div>
          <div>
            <p className="upload-text">{displayText}</p>
            {secondaryText && (
              <p className={`secondary-text ${secondaryTextClassName}`}>
                {secondaryText}
              </p>
            )}
          </div>
        </label>
      </div>
      <input
        className="input-file-upload-button"
        id={identifier}
        ref={fileRef}
        type="file"
        multiple={canAttachMultiple}
        disabled={disabled}
        onChange={handleFiles}
      />
    </>
  );
}

export default FileUploader;

