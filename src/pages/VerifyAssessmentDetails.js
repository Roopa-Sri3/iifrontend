import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { GetTechnicalSkillsForCandidate, VerifyCandidateStatus, setCandidateDetails, setCandidateId, setHREmail } from "../store/reducers/candidate/candidate";

function VerifyAssessmentDetails () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const candidateId = urlParams.get("candidateId");
  sessionStorage.setItem("candidateId",candidateId);
  dispatch(VerifyCandidateStatus({
    candidateId,
    onSuccess: (res) => {
      if(res.message === "The link has expired"){
        const HRMail = res.createdBy;
        dispatch(setHREmail(HRMail));
        navigate("/candidate/link-expired");
      }
      else if(res.message === "Candidate already completed the Assessment"){
        navigate("/candidate/assessment-completed");
      }
      else{
        const candidateDetails = res && res.response;
        dispatch(setCandidateId({candidateId}));
        dispatch(setCandidateDetails({
          ...candidateDetails
        }));
        dispatch(GetTechnicalSkillsForCandidate({}));
        navigate("/candidate/candidate-profile-view");
      }
    },
    onError: (e) => {
      navigate("/unauthorized");
    }
  }));

  return(
    <></>
  );
}

export default VerifyAssessmentDetails;
