import {React, useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import FileUpload from "../components/core/fileUpload/FileUpload";
import Button from "../components/core/button";
import Download from "../components/core/download/Download";
import BackarrowIcon from "../assets/svgs/BackarrowIcon";
import FileIcon from "../assets/svgs/FileIcon";
import DeletefileIcon from "../assets/svgs/DeletefileIcon";
import {instructions} from "../shared/constants";
import { PostUploadFile } from "../store/reducers/dashboard/dashboard";
import { setAlert } from "../store/reducers/app/app";
import { useDispatch } from "react-redux";
import LogoutModal from "../components/modals/logoutModal/LogoutModal";
import "./Questionsconfiguration.css";

function Questionsconfiguration() {
  const fileRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/dashboard");
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileValid, setIsFileValid] = useState(true);
  const handleFiles = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
      setIsFileValid(true);
    }
    else{
      setSelectedFile(null);
    }
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
    fileRef.current.value = null;
    setIsFileValid(true);
  };

  const handleSubmit = () => {
    if (selectedFile.size > (4 * 1024 * 1024)) {
      dispatch(setAlert({ message: "File size exceeded", messageType: "failure" }));
      fileRef.current.value = null;
      setIsFileValid(false);
    } else if (selectedFile.type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      dispatch(setAlert({ message: "Invalid file type", messageType: "failure" }));
      fileRef.current.value = null;
      setIsFileValid(false);
    } else {
      dispatch(PostUploadFile({
        file: selectedFile,
        onSuccess: (res) => {
          dispatch(setAlert({ message: res.message, messageType: "success" }));
        },
        onError: (e) => {
          if (e.errorMessage === "The uploaded file contains an unexpected column.") {
            dispatch(setAlert({message: e.errorMessage, messageType: "failure" }));
            setIsFileValid(false);
          } else if(e.errorMessage){
            dispatch(setAlert({ message: e.errorMessage, messageType: "failure" }));
            setIsFileValid(false);
          } else{
            dispatch(setAlert({message: "Failed to upload", messageType: "failure"}));
            setIsFileValid(false);
          }
        },
      }));
    }
  };

  return(
    <div className="questions-main">
      <div className="containerhead">
        <div className="navigate-layout">
          <BackarrowIcon onClick={handleNavigation}
            className="back-arrow-icon"/>
        </div>
        <div className="text-layout-head">
          <h4 className="subText1">Add Questions from a File</h4>
          <p className="subText2">Import a large number of questions at once
          </p>
        </div>
      </div>
      <div className="super-container">
        <div className="main-container">
          <div className="download-template-section">
            <div>
            Don't have a template to upload?
            </div>
            <Download />
          </div>
          <div className="upload-questions-section">
            <FileUpload
              fileRef={fileRef}
              identifier="file-input"
              labelText="Upload Questions"
              disabled={false}
              canAttachMultiple={false}
              handleFiles={handleFiles}
            />
          </div>
          {selectedFile && (
            <div className="complete-file-content-layout">
              <div className={`file-content-layout  ${!isFileValid ? "invalid" : ""}`}>
                <div className="file-layout"><FileIcon /></div>
                <div className="file-info-layout">
                  <span className="file-name">{selectedFile.name}</span>
                  <span className="file-size">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </span>
                </div>
              </div>
              <div className="delete-button">
                <DeletefileIcon onClick={handleDeleteFile}/>
              </div>
            </div>
          )}
          <Button
            className="final-upload"
            handleClick={handleSubmit}
            label="Upload"
            disabled = {!selectedFile}
          >
          </Button>
        </div>
        <div className="instructions-layout">
          <b className="inst-head">Instructions.</b>
          <ol className="instructions-list">
            {instructions.map((instruction, index) => (
              <li className="list-layout" key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
      <LogoutModal />
    </div>
  );
}

export default Questionsconfiguration;
