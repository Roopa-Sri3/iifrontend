import React from 'react';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Unauthorized from './pages/Unauthorized';
import ProtectedDashboardRoute from './privateRoutes/protectDashboardRoute';

const ROUTES_CONFIG = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/',
    element:  <ProtectedDashboardRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ]
  },
  {
    path: '/unauthorized',
    element: <Unauthorized />
  }
];

export default ROUTES_CONFIG;
