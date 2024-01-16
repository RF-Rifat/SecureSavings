import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp";
import Home from "../pages/Home";
import Root from "./Root";
import ErrorPage from "../pages/ErrorPage";
import MyWallet from "../pages/MyWallet";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/wallet",
        element: <MyWallet />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);
