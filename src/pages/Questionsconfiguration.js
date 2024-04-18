import React from 'react';
import FileUpload from '../components/FileUpload';
import img from '../images/upload-file.svg';
import './Questionsconfiguration.css';

function Questionsconfiguration() {
  const handleFiles = (event) => {
    const attachedFiles = event.target.files;
    event.persist();
    const noOfFiles = attachedFiles.length;
    if (noOfFiles > 0){
      const payload = {};
      payload.type = 'formData';
      payload.file_name = attachedFiles[0].name;
      for (let fileIndex = 0; fileIndex < noOfFiles; fileIndex += 1){
        payload.path = attachedFiles[fileIndex];
      }
    }
  };
  return(
    <div>
      <h1 className='bulk-tags'>Bulk Import Questions</h1>
      <FileUpload
        uploadIcon={img}
        identifier="file-input"
        labelText="Upload Questions"
        disabled={false}
        canAttachMultiple={false}
        handleFiles={handleFiles}
      />
    </div>
  );
}

export default Questionsconfiguration;
