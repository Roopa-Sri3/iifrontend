import React from "react";
import UploadIcon from "../../../assets/svgs/UploadIcon";
import Label from "../Label/Label";
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
      <Label className="button-tag" htmlFor={identifier}>
        <div className="div-icon">
          <UploadIcon className="file-upload-image"/>
        </div>
        <div className="upload-label-text">
          <p className="upload-text-data">Click to upload</p>
          <p className="criteria-text"> Supported file XLSX with max size 4MB</p>
        </div>
      </Label>
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
