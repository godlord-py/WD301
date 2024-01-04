import { useEffect } from "react";
import { useCommentDispatch, useCommentState } from "../../context/comment/context"
import { fetchComment } from "../../context/comment/actions";
import { useParams } from "react-router-dom";
import { useMembersState } from "../../context/members/context";

export const Comments: React.FC = () => {
  const commentState = useCommentState();
  const { comments } = commentState;
  const commentDispatch = useCommentDispatch();
  const memberState = useMembersState();
  const { projectID, taskID } = useParams();
  useEffect(() => {
    fetchComment(commentDispatch, projectID!, taskID!);
  }, [commentDispatch, projectID, taskID]);
  const getDate = (date: Date): string => {
    const newDate = new Date(date);
    return `${newDate.toLocaleDateString("en-In")} ${newDate.toLocaleTimeString(
      "en-In")}`
  }
  const getuser = (owner: number) => {
    const user = memberState?.members.filter((member) => member.id === owner)[0];
    return user?.name;
  }
  return (
    <>
      {Array.isArray(comments) && comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className="comment"
          >
            <div
              className="flex text-gray-800 "
            >
              <div className="mr-3">{comment.description}</div>
              <div className="mr-3">{getDate(comment.createdAt)}</div>
              <div className="mr-3">{getuser(comment.owner)}</div>
            </div>
          </div>
        )
      })}
    </>
  )
}