import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Questionsconfiguration from "./pages/Questionsconfiguration";

const ROUTES_CONFIG = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/admin/questions_configure',
    element: <Questionsconfiguration />
  }
];

export default ROUTES_CONFIG;
