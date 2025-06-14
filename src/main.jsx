import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { RouterProvider } from "react-router";
import AuthProvider from "./context/AuthProvider.jsx";
import routes from "./routes.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
