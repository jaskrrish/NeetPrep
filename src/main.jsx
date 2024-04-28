import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Registration, Home, Login, Exam, ThanksPage, Rules } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const authToken = localStorage.getItem("authToken");
  return authToken ? children : <Navigate to="/register" replace />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/exam",
        element: (
          <PrivateRoute>
            <Exam />
          </PrivateRoute>
        ),
      },
      {
        path: "/thanks",
        element: (
          <PrivateRoute>
            <ThanksPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/rules",
        element: (
          <PrivateRoute>
            <Rules />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
