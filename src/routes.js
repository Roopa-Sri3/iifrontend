import React from "react";
import Dashboard from "./pages/Dashboard";
import ProtectLoginRoute from "./privateRoutes/protectLoginRoute";
import ProtectedDashboardRoute from "./privateRoutes/protectDashboardRoute";
import Questionsconfiguration from "./pages/Questionsconfiguration";
import Unauthorized from "./pages/Unauthorized";
import CandidateProfileview from "./components/core/CandidateProfileView";
const ROUTES_CONFIG = [
  {
    path: "/",
    element: <ProtectLoginRoute />
  },
  {
    path: "/",
    element:  <ProtectedDashboardRoute />,
    children: [
      {
        path: "/dashboard",
        element: (<Dashboard />)
      },
    ]
  },
  {
    path: "/admin/questions-configure",
    element: <Questionsconfiguration />
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />
  },

  {
    path:"/CandidateProfileView",
    element: <CandidateProfileview/>
  }
];

export default ROUTES_CONFIG;
