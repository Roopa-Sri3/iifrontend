import React from "react";
import Dashboard from "./pages/Dashboard";
import ProtectLoginRoute from "./privateRoutes/protectLoginRoute";
import ProtectedDashboardRoute from "./privateRoutes/protectDashboardRoute";
import Questionsconfiguration from "./pages/Questionsconfiguration";
import Unauthorized from "./pages/Unauthorized";
import AssessmentInstructions from "./pages/AssessmentInstructions";

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
        element: <Dashboard />,
      },
    ]
  },
  {
    path: "/admin/questions_configure",
    element: <Questionsconfiguration />
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />
  },
  {
    path: "/candidate/assessment-instructions",
    element: <AssessmentInstructions />
  },
];

export default ROUTES_CONFIG;
