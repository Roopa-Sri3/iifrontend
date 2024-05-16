import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../core/button";
import { GetProfileName, GetUserDesignation, GetUserRole } from "../../store/selector/app";
import DownloadIcon from "../../assets/svgs/downloadIcon";
import "./UserDisplay.css";

const UserDisplay = () => {
  const profileName = useSelector(GetProfileName);
  const userRole = useSelector(GetUserRole);
  const designation = useSelector(GetUserDesignation);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/admin/questions-configure");
  };

  return(
    <div className="user-display">
      <div className="dashboard-user-details">
        <div>{profileName}</div>
        <div>{designation}</div>
      </div>
      <div>
        {(userRole === "ADMIN") && (
          <Button
            className="import-questions-button"
            handleClick={handleNavigate}
            label="Import Questions"
          >
            <DownloadIcon
              fillColor="white"
            />
          </Button>
        )}
        {(userRole === "HR") && (
          <div className="candidates-count">
            <div>Candidates</div>

            <div>Till Date : 113</div>
          </div>
        )}
      </div>
      <div className='user-details-line2 roleName'>
        {/* <div className='first-row'>Candidate</div> */}
        {/* {(userRole === "HR") && (
          <div className='second-row'>Till Date: 113</div>
        )} */}
      </div>
      {/* {(userRole === "ADMIN") && (
        <button className='config-question' onClick={handleNavigate}>
            Import Questions
        </button>
      )} */}

    </div>

  );
};

export default UserDisplay;

