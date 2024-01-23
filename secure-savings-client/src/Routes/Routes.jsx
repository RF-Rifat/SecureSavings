import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp";
import Home from "../pages/Home";
import Root from "./Root";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs";
import Dashboard from "../DashBoard/Dashboard";
import Profile from "../DashBoard/DashBoard-Pages/Profile";
import DashboardRoot from "./DashboardRoot";
import Saving from "../pages/Saving";
import Contact from "../pages/Contact";
import PrivateRoute from "./PrivateRoute";
import MyWallet from "../DashBoard/DashBoard-Pages/MyWallet";
import Blogs from "../pages/blogs/Blogs";
import UserList from "../DashBoard/DashBoard-Pages/UserList";

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
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/saving",
        element: <Saving />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardRoot />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/home",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/wallet",
        element: <MyWallet />,
      },
      {
        path: "/dashboard/users",
        element: <UserList />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);
