import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/shared/errorPage/ErrorPage";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Shop from "../pages/shop/Shop";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/shop',
        element:<Shop/>
      }
    ],
  },
]);
