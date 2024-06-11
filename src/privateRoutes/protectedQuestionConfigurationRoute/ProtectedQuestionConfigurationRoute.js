import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { IsUserLoading, IsUserLoggedIn, GetUserRole } from "../../store/selector/app";
import Loading from "../../pages/Loading";

const ProtectedQuestionConfigurationRoute = () => {
  const isUserLoading = useSelector(IsUserLoading);
  const isUserLoggedIn = useSelector(IsUserLoggedIn);
  const role = useSelector(GetUserRole);

  if (isUserLoading) {
    return <Loading />;
  }

  return isUserLoggedIn && role === "ADMIN" ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default ProtectedQuestionConfigurationRoute;
