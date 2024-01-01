/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMembersState, useMembersDispatch } from "../../context/members/context";
import { deleteMember } from "../../context/members/actions";

interface Member {
  id: number;
  name: string;
  email: string;
  password: string;
}

// delete a member
const deleteMemberById = async (dispatch: any, id: number) => {
  try {
    const response = await deleteMember(dispatch, id);

    if (response.ok) {
      console.log('User removed successfully');
    } else {
      console.error('Error removing user:', response.error);
    }
  } catch (error) {
    console.error('Error removing user:', error);
  }
};

export default function MemberListItems() {
  const state = useMembersState();
  const dispatch = useMembersDispatch();
  

  if (!state) {
    // Handle the case when state is not available yet
    return null;
  }

  const { members, isLoading, isError, errorMessage } = state;

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  // Next, if there is an error, I'll show the error message.
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {members.map((member: Member) => (
        <div key={`${member.name}_${member.email}`} className=" member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.email}</h5>
          <button
            className="px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
            onClick={() => deleteMemberById(dispatch, member.id)}
          >
            Delete  
          </button>
        </div>
      ))}
    </>
  );
}
