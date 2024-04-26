import React from 'react';
import './Download.css';

const Download = () => {
  const downloadFile = () => {
    const fileUrl = '/public/BulkAddQuestionsTemplate.xlsx';
    fetch(fileUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to download file');
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Bulk Add Questions Template.xlsx';
        a.click();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='download-layout'>
      <button
        onClick={downloadFile}
        className='download-button'
      >
        Download Here
      </button>
    </div>
  );
};

export default Download;
