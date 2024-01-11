import React, { Suspense } from "react";
import NewMember from './NewMember';

const MembersList = React.lazy(() => import('./MemberList'));

const Members = () => {
  return (
    <>
      <div className="flex justify-between" role="banner">
        <h2 className="text-2xl font-medium tracking-tight" aria-label="Members section header">Members</h2>
        <NewMember />
      </div>
      <Suspense fallback={<div role="status" aria-live="polite"  className="suspense-loading">Loading...</div>}>
        <MembersList />
      </Suspense>
    </>
  );
};

export default Members;