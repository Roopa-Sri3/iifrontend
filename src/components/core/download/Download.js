import React from 'react';
import Button from '../button';
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
      <Button handleClick={downloadFile}
        className='download-button'
        label="Download here"
      />
    </div>
  );
};

export default Download;
