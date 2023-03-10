import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import DetailPage from "../pages/Detail";
import Layout from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
