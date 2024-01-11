import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { TasksProvider } from "../../context/task/context";
import ErrorBoundary from "../../components/ErrorBoundary";
const ProjectDetails = React.lazy(() => import('./ProjectDetails'));
const ProjectDetailsIndex: React.FC = () => {
  return (
    <ErrorBoundary>
      <TasksProvider>
        <Suspense fallback={<div role="status" aria-live="polite">Loading...</div>}>
          <ProjectDetails />
          <Outlet />
        </Suspense>
      </TasksProvider>
    </ErrorBoundary>
  );
};

export default ProjectDetailsIndex;