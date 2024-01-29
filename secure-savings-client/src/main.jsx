import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";

import { Toaster } from "react-hot-toast";
import { MaterialTailwindControllerProvider } from "./Context/index.jsx";
import Provider from "./Authentication/AuthProvider.jsx";
import AdminProvider from "./Context/AdminProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MaterialTailwindControllerProvider>
      <Toaster />
      <Provider>
        <AdminProvider>
          <RouterProvider router={router} />
        </AdminProvider>
      </Provider>
    </MaterialTailwindControllerProvider>
  </React.StrictMode>
);
