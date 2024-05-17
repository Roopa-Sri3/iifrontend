import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../core/button";
import { GetUserRole } from "../../store/selector/app";
import DownloadIcon from "../../assets/svgs/downloadIcon";
import "./UserDisplay.css";

const  UserDisplay = () => {

  const userRole = useSelector(GetUserRole);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/admin/questions-configure");
  };

  return(
    <div className="user-display">
      <div className="dashboard-user-details">
        <div>Myla Prakash</div>
        <div>sr. software Engineer</div>
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
            <div>Till Date</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDisplay;
