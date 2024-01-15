import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
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
