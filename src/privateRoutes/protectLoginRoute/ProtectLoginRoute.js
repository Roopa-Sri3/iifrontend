import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IsUserLoggedIn } from "../../store/selector/app";
import Login from "../../pages/Login";

const ProtectLoginRoute = () => {
  const isUserLoggedIn = useSelector(IsUserLoggedIn);

  return isUserLoggedIn ? <Navigate to="/dashboard" /> : <Login />;
};

export default ProtectLoginRoute;
