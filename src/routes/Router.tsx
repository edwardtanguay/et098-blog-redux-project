import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import CreateArticlePage from "../pages/CreateArticlePage";
import UpdateArticlePage from "../pages/UpdateArticlePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/blog/:blogId",
        element: <HomePage />,
      },
      {
        path: "/create-article",
        element: <CreateArticlePage />,
      },
      {
        path: "/update-article/:blogId",
        element: <UpdateArticlePage />,
      },
    ],
  },
]);

export default router;
