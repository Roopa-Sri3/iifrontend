import {React, useState} from 'react';
import {useNavigate} from "react-router-dom";
import FileUpload from '../components/core/fileUpload/FileUpload';
import Download from '../components/core/download/Download';
import BackarrowIcon from '../components/assets/svgs/BackarrowIcon';
import FileIcon from '../components/assets/svgs/FileIcon';
import DeletefileIcon from '../components/assets/svgs/DeletefileIcon';
import {instructions} from '../shared/constants';
import './Questionsconfiguration.css';

function Questionsconfiguration() {

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/dashboard');
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFiles = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleDeleteFile = () => {
    console.log("Deleted", selectedFile);
    setSelectedFile(null);
  };

  const handleSubmit = ()=>{
    alert("File Uploaded Successfully");
  };

  return(
    <div className='questions-main'>
      <div className='containerhead'>
        <div className='navigate-layout'>
          <BackarrowIcon onClick={handleNavigation}
            className="back-arrow-icon"/>
        </div>
        <div className='text-layout-head'>
          <h4 className='subText1'>Add Questions from a File</h4>
          <p className='subText2'>Import a large number of questions at once
          </p>
        </div>
      </div>
      <div className='super-container'>
        <div className='main-container'>
          <div className='download-template-section'>
            <div>
            Don't have a template to upload?
            </div>
            <Download />
          </div>
          <div className='upload-questions-section'>
            <FileUpload
              identifier="file-input"
              labelText="Upload Questions"
              disabled={false}
              canAttachMultiple={false}
              handleFiles={handleFiles}
            />
          </div>
          {selectedFile && (
            <div className="complete-file-content-layout">
              <div className='file-content-layout'>
                <div className='file-layout'><FileIcon /></div>
                <div className='file-info-layout'>
                  <span className='file-name'>{selectedFile.name}</span>
                  <span className='file-size'>
                    {(selectedFile.size / 1024).toFixed(2)} MB
                  </span>
                </div>
              </div>
              <div className='delete-button'>
                <DeletefileIcon onClick={handleDeleteFile}/>
              </div>
            </div>
          )}
          <button className='final-upload' onClick={handleSubmit}>
            Upload
          </button>
        </div>
        <div className='instructions-layout'>
          <b className='inst-head'>Instructions.</b>
          <ol className='instructions-list'>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Questionsconfiguration;
