import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IsUserLoading, IsUserLoggedIn } from "../../store/selector/app";

const ProtectedDashboardRoute = () => {
  const navigate = useNavigate();
  const isUserLoading = useSelector(IsUserLoading);
  const isUserLoggedIn = useSelector(IsUserLoggedIn);

  if(!isUserLoggedIn){
    navigate("/unauthorized");
  }

  if (isUserLoading) {
    return <>Loading...</>;
  }

  return isUserLoggedIn ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default ProtectedDashboardRoute;
