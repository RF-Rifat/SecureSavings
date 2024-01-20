import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import AuthProvider from "./Authentication/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { MaterialTailwindControllerProvider } from "./Context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MaterialTailwindControllerProvider>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={router} />
      </AuthProvider>
    </MaterialTailwindControllerProvider>
  </React.StrictMode>
);
