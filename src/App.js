import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './presentation/layout/Layout';
// import { useDispatch, useSelector } from 'react-redux';
// import { navigateToLogin } from './store/reducers/app/app';

import ROUTES_CONFIG from './routes';
import './App.css';

const router = createBrowserRouter(ROUTES_CONFIG);

function App() {
  // const dispatch = useDispatch();
  // const route = useSelector(state => state.app.route);

  // // Check the route and dispatch navigation action if needed
  // React.useEffect(() => {
  //   if (route === '/') {
  //     // Dispatch the navigateToLogin action if the route is '/login'
  //     dispatch(navigateToLogin());
  //   }
  // }, [dispatch, route]);
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );

}
export default App;
