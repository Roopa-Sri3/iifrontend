import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IsUserLoggedIn } from "../../store/selector/app";

const ProtectedLogoutRoute = () => {
  const isUserLoggedIn = useSelector(IsUserLoggedIn);
  console.log("isUserLoggedIn in logout =>", isUserLoggedIn);

  return isUserLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/" />;
};

export default ProtectedLogoutRoute;
