/* eslint-disable react/prop-types */
import React from 'react';
import './TaskCard.css' 
//Level 1
// const Taskcard = (props) => {
//     console.log(props);
//     const isPending = !props.completedOn;
//     return (
//       <div className = "TaskItem">
//         <h3 className="text-xl font-bold">{props.title}</h3>
//         {isPending && <p>{props.dueDate}</p>}
//         {!isPending && <p>{props.completedOn}</p>}
//         <p>{props.assigneeName}</p>
//       </div>
//     )
//   }
//   export default Taskcard;
//Level 2
interface TaskCardProps {
  title: string;
  dueDate?: string;
  assigneeName: string;
  completedAtDate?: string;
}

function TaskCard({ title, dueDate, completedAtDate, assigneeName }: TaskCardProps) {
  return (
    <div style={{ border: '4px solid White', padding: '10px', marginBottom: '10px' }}>
      <h3>{title}</h3>
      {dueDate && <p>{`Due on: ${dueDate}`}</p>}
      {completedAtDate && <p>{`Completed on: ${completedAtDate}`}</p>}
      {assigneeName && <p>{`Assignee: ${assigneeName}`}</p>}
    </div>
  );
};
export default TaskCard;