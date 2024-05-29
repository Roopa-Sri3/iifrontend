import React from "react";
import Dashboard from "./pages/Dashboard";
import ProtectLoginRoute from "./privateRoutes/protectLoginRoute";
import ProtectedDashboardRoute from "./privateRoutes/protectDashboardRoute";
import Questionsconfiguration from "./pages/Questionsconfiguration";
import Start from "./components/question/Start";
import TestSubmit from "./pages/TestSubmit";
import Assessmentscreen from "./pages/Assessmentscreen";
import LinkExpired from "./pages/LinkExpired";
import VerifyAssessmentDetails from "./pages/VerifyAssessmentDetails";

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
      {
        path: "/admin/questions-configure",
        element: <Questionsconfiguration />
      },
    ]
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />
  },
  {
    path: "/candidate",
    children: [
      {
        path: "/candidate/assessment-screen",
        element: <Assessmentscreen />
      },
      {
        path: "/candidate/link-expired",
        element: <LinkExpired />
      },
      {
        path: "/candidate/verify-assessment-details",
        element : <VerifyAssessmentDetails />
      },
    ]
  },
  {
    path: "/exam",
    element: <Start />
  },
  {
    path: "/test-submitted",
    element: <TestSubmit />
  },
];

export default ROUTES_CONFIG;
