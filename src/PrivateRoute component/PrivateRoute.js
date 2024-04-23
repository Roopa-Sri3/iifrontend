import React from 'react';
import { Route,} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
    {isAuthenticated ?
      <Component {...props} /> :
      <Navigate to="/unauthorized" />;
    }
    }
  />
);

export default PrivateRoute;
