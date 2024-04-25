import Dashboard from "./pages/Dashboard";
import AdminPrivateRoute from "./PrivateRoute component/AdminPrivateRoute";
import HRPrivateRoute from "./PrivateRoute component/HrPrivateRoute";
import Login from "./pages/Login";
import UnauthorizedAccess from "./Unauthorised component/UnauthorisedAcess";

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
    path: '/unauthorized',
    element: <UnauthorizedAccess />,
  },
];

export default ROUTES_CONFIG;
