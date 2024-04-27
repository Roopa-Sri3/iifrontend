import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { IsUserLoggedIn } from "../../store/selector/app";

const ProtectedDashboardRoute = () => {
  const isUserLoggedIn = useSelector(IsUserLoggedIn);

  return isUserLoggedIn ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default ProtectedDashboardRoute;
