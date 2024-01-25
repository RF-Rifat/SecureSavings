import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";

import { Toaster } from "react-hot-toast";
import { MaterialTailwindControllerProvider } from "./Context/index.jsx";
import Provider from "./Authentication/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MaterialTailwindControllerProvider>
      <Toaster />
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </MaterialTailwindControllerProvider>
  </React.StrictMode>
);
