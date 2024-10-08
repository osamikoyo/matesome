import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
// Pages
import AuthPage from "./pages/AuthPage/AuthPage";
import NotFound from "./pages/NotFoundPage/NotFound";
// Styles
import "./app/styles/index.css"; // Tailwind CSS
import "./app/styles/global.css"; // Global css styles for whole projects

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
