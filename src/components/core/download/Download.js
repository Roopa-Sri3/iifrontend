import React from 'react';
import Button from '../button';
import './Download.css';
import { GetFileDownload } from '../../../store/reducers/app/app';
import { useDispatch } from 'react-redux';

const Download = () => {
  const dispatch = useDispatch();

  const downloadFile = () => {
    dispatch(GetFileDownload({
      onSuccess: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.click();
        alert("Download Successful");
      },
      onError: (e) => {
        console.error(e);
        alert("Failed to download");
      },
    }));
  };

  return (
    <div className='download-layout'>
      <Button handleClick={downloadFile}
        className='download-button'
        label="Download Template"
      />
    </div>
  );
};

export default Download;
