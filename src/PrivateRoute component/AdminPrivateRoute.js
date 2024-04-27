import React, { useState } from 'react';
import Dashboard from "../pages/Dashboard";
import Unauthorized from '../pages/Unauthorized';

const  ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return isAuthenticated ?  <Unauthorized /> : <Dashboard />;
};

export default ProtectedRoute;
