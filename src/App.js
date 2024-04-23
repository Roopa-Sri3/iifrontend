import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './presentation/layout/Layout';
import ROUTES_CONFIG from './routes';
import { useAuth } from './Hook/useAuth';

import './App.css';

const router = createBrowserRouter(ROUTES_CONFIG);

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>

  );
}

export default App;
