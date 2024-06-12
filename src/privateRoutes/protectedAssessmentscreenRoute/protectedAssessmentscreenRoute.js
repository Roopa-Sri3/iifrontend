import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { IsAssessmentscreenLoading, GetExamStatus, getAssessmentId } from "../../store/selector/screen";
import Loading from "../../pages/Loading";

const ProtectedAssessmentscreenRoute = () => {
  const examStatus = useSelector(GetExamStatus);
  const assessment_id = useSelector(getAssessmentId);
  const isAssessmentscreenLoading = useSelector(IsAssessmentscreenLoading);

  if (!isAssessmentscreenLoading) {
    return <Loading />;
  }

  if (!assessment_id) {
    return <Navigate to="/unauthorized" />;
  }

  return examStatus ? <Outlet /> : <Navigate to="/candidate/feedback" />;

};

export default ProtectedAssessmentscreenRoute;
