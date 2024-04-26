import React from 'react';
import { Route,Routes,Navigate } from 'react-router-dom';

const HRPrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Routes>
    <Route
      {...rest}
      element={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
        // eslint-disable-next-line max-len
          <Navigate to={{ pathname: '/', state: { from: props.location, message: 'Unauthorised Access' } }} />
        )
      }
    />
  </Routes>
);

export default HRPrivateRoute;
