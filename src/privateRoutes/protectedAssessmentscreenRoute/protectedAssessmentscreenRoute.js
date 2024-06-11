import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { GetExamStatus } from "../../store/selector/screen";

const ProtectedAssessmentscreenRoute = () => {
  const examStatus = useSelector(GetExamStatus);

  return examStatus ? <Outlet /> : <Navigate to="/candidate/feedback" />;

};

export default ProtectedAssessmentscreenRoute;
