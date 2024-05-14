import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GetUserRole } from "../../store/selector/app";
import { GetProfileName } from "../../store/selector/app";
import "./UserDisplay.css";

const UserDisplay = () => {
  const profileName = useSelector(GetProfileName);
  const userRole = useSelector(GetUserRole);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/admin/questions_configure");
    navigate("/admin/questions-configure");
  };

  return (
    <div className='user-display'>
      <div className='user-details-line1 profileName'>
        <div className='first-row'>{profileName}</div>
        {(userRole === "HR") && (
          <div className='second-row'>Candidates</div>
        )}
      </div>
      <div className='user-details-line2 roleName'>
        <div className='first-row'>{userRole}</div>
        {(userRole === "HR") && (
          <div className='second-row'>Till Date: 113</div>
        )}
      </div>
      {(userRole === "ADMIN") && (
        <button className='config-question' onClick={handleNavigate}>
            Import Questions
        </button>
      )}

    </div>

  );
};

export default UserDisplay;

