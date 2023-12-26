/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Signin from "./pages/signin";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin/>

    },
    {
      path: "/notfound",
      element: <Notfound />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: <Notfound />,
    }
  ]);

const App = () => {
  return (
    <>
    <RouterProvider router={router} /></>
  );
};
export default App;