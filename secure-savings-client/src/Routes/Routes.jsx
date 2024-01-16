import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp";
import Home from "../pages/Home";
import Root from "./Root";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
