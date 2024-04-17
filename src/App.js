import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './presentation/layout/Layout';
import ROUTES_CONFIG from './routes';
import './App.css';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter(ROUTES_CONFIG);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
      <Dashboard></Dashboard>
    </Layout>
  );
}

export default App;
