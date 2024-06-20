import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../core/button";
import { GetCandidateTillDate, GetProfileName, GetUserDesignation, GetUserRole } from "../../store/selector/app";
import DownloadIcon from "../../assets/svgs/downloadIcon";
import { PostToken } from "../../store/reducers/app/app";
import "./UserDisplay.css";

const UserDisplay = () => {
  const profileName = useSelector(GetProfileName);
  const userRole = useSelector(GetUserRole);
  const designation = useSelector(GetUserDesignation);
  const candidateTillDate = useSelector(GetCandidateTillDate);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("Token");

  useEffect(() => {
    const fetchCandidateTillDate = () => {
      dispatch(PostToken({
        data: {
          token,
        },
      }));

    };

    fetchCandidateTillDate();
  }, [dispatch, token]);

  const handleNavigate = () => {
    navigate("/admin/questions-configure");
  };

  return (
    <div className="user-display">
      <div className="dashboard-user-details">
        <div className = "role-name"> {profileName}</div>
        <div className="designation">{designation}</div>
      </div>
      <div>
        {(userRole === "ADMIN") && (
          <Button
            className="import-questions-button"
            handleClick={handleNavigate}
            label="Import Questions"
          >
            <DownloadIcon fillColor="white" />
          </Button>
        )}
        {(userRole === "HR") && (
          <div className="candidates-count">
            <div>Candidates</div>
            <div className = "till-date">Till Date: {candidateTillDate}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDisplay;
