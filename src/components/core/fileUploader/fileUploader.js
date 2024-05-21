import React from "react";
import uploadicon from "../../../assets/Images/uploadicon.svg";
import "./fileUploader.css";

function FileUploader({
  identifier,
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

        {/*eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
        <label className="upload-tag" htmlFor={identifier}>

          <div className="imageicon-container">
            <img src={uploadicon} alt="Upload Icon" /></div>
          <div>

            <p className="upload-text">
              {displayText}</p>

            {secondaryText && (
              <p className={`secondary-text ${secondaryTextClassName}`}>
                {secondaryText}
              </p>

            )}
          </div>
        </label>
      </div>
      <input className="input-file-upload-button"
        id={identifier}
        type="file"
        multiple={canAttachMultiple}
        disabled={disabled}
        onChange={handleFiles}
      />
    </>
  );
}

export default FileUploader;

