import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { IsUserLoading, IsUserLoggedIn } from "../../store/selector/app";
import Loading from "../../pages/Loading";

const ProtectedDashboardRoute = () => {
  const isUserLoading = useSelector(IsUserLoading);
  const isUserLoggedIn = useSelector(IsUserLoggedIn);

  if (isUserLoading) {
    return <Loading />;
  }

  return isUserLoggedIn ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default ProtectedDashboardRoute;
