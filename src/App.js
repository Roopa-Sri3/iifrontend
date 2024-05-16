import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./presentation/layout/Layout";
import ROUTES_CONFIG from "./routes";
import "./App.css";

const router = createBrowserRouter(ROUTES_CONFIG);

function App() {

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );

}
export default App;
