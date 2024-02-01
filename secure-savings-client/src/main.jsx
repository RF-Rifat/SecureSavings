import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";

import { Toaster } from "react-hot-toast";
import { MaterialTailwindControllerProvider } from "./Context/index.jsx";
import UserProvider from "./Authentication/AuthProvider.jsx";
import AdminProvider from "./Context/AdminProvider.jsx";

import { Provider } from 'react-redux'
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <MaterialTailwindControllerProvider>
      <Toaster />
      <UserProvider>
        <AdminProvider>
          <RouterProvider router={router} />
        </AdminProvider>
      </UserProvider>
    </MaterialTailwindControllerProvider>
    </Provider>
  </React.StrictMode>
);
