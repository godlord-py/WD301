import { createBrowserRouter, Navigate } from "react-router-dom";
import AccountLayout from "../layouts/account";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import ProtectedRoute from "./ProtectedRoute";
import Projects from "../pages/projects";
import Members from "../pages/members";
import Logout from "../pages/logout";
import ProjectContainer from "../pages/projects/ProjectContainer";
import ProjectDetails from "../pages/project_details";
import NewTask from "../pages/tasks/NewTask";
import TaskDetailsContainer from "../pages/tasks/TaskDetails";
const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/account/projects" replace /> },
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
        {
          path: "projects",
          element: <ProjectContainer />,
          children: [
            { index: true, element: <Projects /> },
            {
              path: ":projectID",
              element: <ProjectDetails />,
              children: [
                { index: true, element: <></> },
                {
                  path: "tasks",
                  children: [
                    { index: true, element: <Navigate to="../" /> },
                    {
                      path: "new",
                      element: <NewTask />,
                    },
                    {
                      path: ":taskID",
                      children: [
                        { index: true, element: <TaskDetailsContainer /> },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      {
        path: "members",
        element: <Members />,
      },
    ],
  },
]);
export default router;
