import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { IsUserLoading, IsUserLoggedIn } from "../../store/selector/app";

const ProtectedDashboardRoute = () => {
  const isUserLoading = useSelector(IsUserLoading);
  const isUserLoggedIn = useSelector(IsUserLoggedIn);

  if (isUserLoading) {
    return <></>;
  }

  return isUserLoggedIn ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default ProtectedDashboardRoute;
