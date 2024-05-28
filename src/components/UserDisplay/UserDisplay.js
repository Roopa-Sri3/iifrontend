import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../core/button";
import { GetProfileName, GetToken, GetUserDesignation, GetUserRole } from "../../store/selector/app";
import DownloadIcon from "../../assets/svgs/downloadIcon";
import "./UserDisplay.css";
import { PostToken } from "../../store/reducers/app/app";

const UserDisplay = () => {
  const [candidateTillDate, setCandidateTillDate] = useState(null);
  const profileName = useSelector(GetProfileName);
  const userRole = useSelector(GetUserRole);
  const designation = useSelector(GetUserDesignation);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(GetToken);

  useEffect(() => {

    const fetchCandidateTillDate = () => {
      try {
        dispatch(PostToken({
          data: {
            token,
          },
          onSuccess: (userDetails) => {
            const responseDetails = userDetails && userDetails.response;
            console.log("User Details =>", responseDetails);
            if (responseDetails) {
              setCandidateTillDate(responseDetails.candidateTillDate);
            }
          }
        }));
      }

      catch (error) {
        setCandidateTillDate("Error");
      }
    };

    fetchCandidateTillDate();
  }, [dispatch, token]);

  const handleNavigate = () => {
    navigate("/admin/questions-configure");
  };

  return (
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
            <DownloadIcon fillColor="white" />
          </Button>
        )}
        {(userRole === "HR") && (
          <div className="candidates-count">
            <div>Candidates</div>
            <div>Till Date: {candidateTillDate}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDisplay;
