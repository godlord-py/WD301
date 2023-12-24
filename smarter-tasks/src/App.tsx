/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import Layout from "./Layout";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Signin from "./pages/Signin";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./pages/Notfound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "tasks",
        element: <TaskListPage />,
      },
      {
        path: "tasks/:id",
        element: <TaskDetailsPage />,
      },
      {       
          path: "*",
          element: <Notfound />,
        
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};
export default App;
