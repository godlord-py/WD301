import NewProject from "./NewProject";
import React, {Suspense} from "react";
const ProjectList   = React.lazy(() => import('./ProjectList'))
const Projects = () => {
    return (
        <>
          <div className="flex justify-between">
            <h2 className="text-2xl font-medium tracking-tight">Projects</h2>
            <NewProject />
          </div>
          <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <ProjectList />
          </Suspense>
        </>
      )
    }

export default Projects;