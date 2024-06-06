import React from "react";
import Button from "../button";
import { GetFileDownload } from "../../../store/reducers/dashboard/dashboard";
import { useDispatch } from "react-redux";
import "./Download.css";

const Download = () => {
  const dispatch = useDispatch();

  const downloadFile = () => {
    dispatch(GetFileDownload({
      onSuccess: () => {
        window.open(`${process.env.REACT_APP_API_BASE_URL}/interviewinsights/downloadTemplate`,"_blank");
      },
      onError: (e) => {
        console.error(e);
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
