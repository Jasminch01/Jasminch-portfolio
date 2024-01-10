import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Blogs from "../Page/Blogs/Blogs";
import Layout from "../Components/Layout/Layout";
import Error from "../Page/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "contact",
        element: <div></div>,
      },
    ],
  },
]);

export default router;
