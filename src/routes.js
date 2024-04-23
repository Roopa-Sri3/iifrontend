import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute component/PrivateRoute";
import UnauthorizedAccess from "./Unauthorised component/UnauthorisedAcess";
const ROUTES_CONFIG = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute isAuthenticated={false}>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: '/unauthorized',
    element: <UnauthorizedAccess />,
  },
];

export default ROUTES_CONFIG;
