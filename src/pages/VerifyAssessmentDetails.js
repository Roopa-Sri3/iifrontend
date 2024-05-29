import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { VerifyCandidateStatus } from "../store/reducers/app/app";
import { setCandidateDetails } from "../store/reducers/app/app";
import Loading from "./Loading";

function VerifyAssessmentDetails () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const candidateId = urlParams.get("candidateId");
  console.log(candidateId);
  dispatch(VerifyCandidateStatus({
    candidateId,
    onSuccess: (res) => {
      // console.log(res);
      if(res.message === "The link has expired"){
        // <Navigate to="/link-expired" />;
        navigate("/candidate/link-expired");
      }
      else{
        console.log("hii");
        const candidateDetails = res && res.response;
        dispatch(setCandidateDetails({
          ...candidateDetails
        }));
      // navigate to upload aadhaar page
      }
    },
    onError: (e) => {
      console.log(e.response.data.message);
      // <Navigate to="/unauthorized" />;
      navigate("/unauthorized");
    }
  }));

  return(
    <Loading />
  );
}

export default VerifyAssessmentDetails;
