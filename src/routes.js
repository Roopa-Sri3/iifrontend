import React from "react";
import Dashboard from "./pages/Dashboard";
import ProtectLoginRoute from "./privateRoutes/protectLoginRoute";
import ProtectedDashboardRoute from "./privateRoutes/protectDashboardRoute";
import ProtectedQuestionConfigurationRoute from "./privateRoutes/protectedQuestionConfigurationRoute";
import ProtectedAssessmentscreenRoute from "./privateRoutes/protectedAssessmentscreenRoute";
import Questionsconfiguration from "./pages/Questionsconfiguration";
import Unauthorized from "./pages/Unauthorized";
import Feedback from "../src/pages/Feedback";
import AssessmentInstructions from "./pages/AssessmentInstructions";
import Assessmentscreen from "./pages/Assessmentscreen";
import VerifyAssessmentDetails from "./pages/VerifyAssessmentDetails";
import LinkExpired from "./pages/LinkExpired";
import ThankYou from "./pages/ThankYou";
import CandidateProfileview from "./components/core/CandidateProfileView";
import AssessmentCompleted from "./pages/AssessmentCompleted";
import AssessmentStarted from "./pages/AssessmentStarted";

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
      }
    ]
  },
  {
    path: "/",
    element:  <ProtectedQuestionConfigurationRoute />,
    children: [
      {
        path: "/admin/questions-configure",
        element: <Questionsconfiguration />
      },
    ]
  },
  {
    path: "/candidate",
    element:  <ProtectedAssessmentscreenRoute />,
    children: [
      {
        path: "/candidate/assessment-screen",
        element: <Assessmentscreen />
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
        path: "/candidate/candidate-profile-view",
        element:<CandidateProfileview/>
      },
      {
        path: "/candidate/assessment-instructions",
        element: <AssessmentInstructions />
      },
      {
        path: "/candidate/assessment-completed",
        element: <AssessmentCompleted />
      },
      {
        path: "/candidate/assessment-started",
        element: <AssessmentStarted />
      },
      {
        path: "/candidate/verify-assessment-details",
        element: <VerifyAssessmentDetails />
      },
      {
        path: "/candidate/link-expired",
        element: <LinkExpired />
      },
      {
        path: "/candidate/feedback",
        element: <Feedback />
      },
      {
        path: "/candidate/thank-you",
        element: <ThankYou />
      }
    ]
  },
];

export default ROUTES_CONFIG;
