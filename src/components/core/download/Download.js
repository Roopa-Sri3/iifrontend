import React from "react";
import Button from "../button";
import { GetFileDownload } from "../../../store/reducers/app/app";
import { useDispatch } from "react-redux";
import { downloadUrl } from "../../../shared/constants";
import "./Download.css";

const Download = () => {
  const dispatch = useDispatch();

  const downloadFile = () => {
    dispatch(GetFileDownload({
      onSuccess: () => {
        window.open(downloadUrl,"_blank");
        alert("Download Successful");
      },
      onError: (e) => {
        console.error(e);
        alert("Failed to download");
      },
    }));
  };

  return (
    <div className="download-layout">
      <Button
        handleClick={downloadFile}
        className="download-button"
        label="Download Template"
      />
    </div>
  );
};

export default Download;
