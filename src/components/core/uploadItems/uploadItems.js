import React from "react";
import filesymbol from "../../../assets/Images/filesymbol.svg";
import deletesymbol from "../../../assets/Images/deletesymbol.svg";
import "./uploadItems.css";

const UploadItems = ({ file, onDelete, errorMessage }) => {

  const handleDeleteFile = () => {
    console.log("Deleted", file);
    onDelete();
  };

  return (
    <div className="complete-file-content-view">

      <div className={`file-document-layout 
      ${(!errorMessage) ? " " : "error-layout"}`}>
        <div className='file-icon-layout'>
          <img src={filesymbol} alt="File Icon"/>
        </div>

        <div className='file-information-layout'>
          <span className='file-name'>{file.name}</span>
          <span className='file-size'>
            {(file.size / (1024 * 1024)).toFixed(2)} MB
          </span>
        </div>
      </div>

      <button className='delete-button' onClick={handleDeleteFile}>
        < img src={deletesymbol} alt="Delete Icon"/>
      </button>
    </div>
  );
};

export default UploadItems;
