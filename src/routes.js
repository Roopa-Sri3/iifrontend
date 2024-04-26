import React from 'react';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const ROUTES_CONFIG = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
];

export default ROUTES_CONFIG;
