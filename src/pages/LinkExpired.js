import React, { useEffect } from "react";
import LinkExpiredImg from "../../src/assets/Images/LinkExpiredImg.png";
import "./LinkExpired.css";
import { useDispatch, useSelector } from "react-redux";
import { GetCandidateHR, GetCandidateId } from "../store/selector/candidate/candidate";
import { GetTechnicalSkillsForCandidate, VerifyCandidateStatus, setCandidateDetails, setCandidateId, setHREmail } from "../store/reducers/candidate/candidate";
import { useNavigate } from "react-router-dom";

function LinkExpired(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HREmail = useSelector(GetCandidateHR);
  const isStoreHasCandidateData = useSelector(GetCandidateId);
  const candidateId = sessionStorage.getItem("candidateId");

  useEffect(() => {
    const localStoreCandidateId = sessionStorage.getItem("candidateId");
    if (
      !isStoreHasCandidateData
      && localStoreCandidateId
    ) {
      dispatch(VerifyCandidateStatus({
        candidateId: localStoreCandidateId,
        onSuccess: (res) => {
          if(res.message === "The link has expired"){
            const HRMail = res.createdBy;
            dispatch(setHREmail(HRMail));
            navigate("/candidate/link-expired");
          }
          else{
            const candidateDetails = res && res.response;
            dispatch(setCandidateId({candidateId}));
            dispatch(setCandidateDetails({
              ...candidateDetails
            }));
            dispatch(GetTechnicalSkillsForCandidate({}));
          }
        },
        onError: (e) => {
          navigate("/unauthorized");
        }
      }));
    }
  }, [dispatch, isStoreHasCandidateData, navigate, candidateId]);

  return(
    <div className="link-expired-page">
      <div className="link-expired-card">
        <div className="text-image">
          <div>
            <h3 className="header-text">Link has Expired!</h3>
          </div>
          <div>
            <img
              src={LinkExpiredImg}
              alt="link-expired-img"
              className="link-expired-img">
            </img>
          </div>
        </div>
        <div className="text">
          <p className="para1">
            You forgot to complete the exam within the due date.
            The link has been expired.
          </p>
          <p className="para2">
            For any queries reach out to <span className="hr-email">{HREmail}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LinkExpired;
