import React from 'react';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Unauthorized from './pages/Unauthorized';
import ProtectedDashboardRoute from './privateRoutes/protectDashboardRoute';
import Questionsconfiguration from "./pages/Questionsconfiguration";

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
    path: '/admin/questions_configure',
    element: <Questionsconfiguration />
  },
  // {
  //   path: '/unauthorized',
  //   element: <Unauthorized />
  // },
];

export default ROUTES_CONFIG;
