import React from "react";
import Dashboard from "./pages/Dashboard";
import ProtectLoginRoute from "./privateRoutes/protectLoginRoute";
import ProtectedDashboardRoute from "./privateRoutes/protectDashboardRoute";
import Questionsconfiguration from "./pages/Questionsconfiguration";
import Start from "./components/question/Start";
import TestSubmit from "./pages/TestSubmit";
import Assessmentscreen from "./pages/Assessmentscreen";
import Unauthorized from "./pages/Unauthorized";
import CandidateProfileview from "./components/core/CandidateProfileView";import ThankYou from "./pages/ThankYou";

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
        path: "/candidate/candidate-profile-view",
        element:<CandidateProfileview/>
      },
      {
        path: "/candidate/feedback",
        element: <TestSubmit />
      },
      {
        path: "/candidate/thank-you",
        element: <ThankYou />
      }
    ]
  },
  {
    path: "/exam",
    element: <Start />
  },
];

export default ROUTES_CONFIG;
