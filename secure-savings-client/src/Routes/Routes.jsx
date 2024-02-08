import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp";
import Home from "../pages/Home";
import Root from "./Root";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs";

import DashboardRoot from "./DashboardRoot";
import Saving from "../pages/Saving";
import Contact from "../pages/Contact";
import PrivateRoute from "./PrivateRoute";
import MyWallet from "../DashBoard/DashBoard-Pages/MyWallet";
import Blogs from "../pages/blogs/Blogs";
import UserList from "../DashBoard/DashBoard-Pages/UserList";
import Dashboard from "../DashBoard/DashBoard-Home/Dashboard";
import CustomProfile from "../DashBoard/DashBoard-Pages/CustomProfile";
import AddBlog from "../pages/blogs/AddBlog";
import Transactions from "../pages/Transactions/Transactions";
import BlogDetails from "../pages/blogs/BlogDetails";
import AdminChat from "../DashBoard/DashBoard-Pages/AdminChat";
import HomeLoan from "../components/HomeLoan/HomeLoan";
import BusinessLoan from "../BusinessLoan/BusinessLoan";

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
        path: "/services",
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
      {
        path: "/blog-details/:id",
        element: (
          <PrivateRoute>
            <BlogDetails />,
          </PrivateRoute>
        ),
      },
      {
        path: "homeloan",
        element: <HomeLoan/>,
      },
      {
        path: "businessloan",
        element: <BusinessLoan/>,
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
        element: <CustomProfile />,
      },
      {
        path: "/dashboard/wallet",
        element: <MyWallet />,
      },
      {
        path: "/dashboard/users",
        element: <UserList />,
      },
      {
        path: "/dashboard/addBlog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/dashboard/transactions",
        element: <Transactions />,
      },
      {
        path: "/dashboard/chat",
        element: <AdminChat />,
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
