/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import Layout from "./Layout";
import TaskApp from "./TaskApp";
import TaskDetailsPage from './pages/TaskDetailsPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    element: (
      <Layout />
    ),
    children: [
      {
        path: "/",
        element: (<HomePage />)
      },
      {
        path: "tasks",
        element: (<TaskListPage />)
      },
      {
        path: "tasks/:taskId",
        element: (<TaskDetailsPage />)
      },
    ]
  }
]);


const App = () => {
  return (
    <RouterProvider router={router}/>
    // <div className="App">
    //   <TaskApp />
    // </div>
  );
}
export default App;
