import Task from "./Task";
interface Props {
  tasks: TaskItem[];
  deleteTask: (index: number) => void;
}
interface TaskItem {
  todoDescription: string;
  todoTitle: string;
  todoDueDate: string;
}
const TaskList = (props: Props) => {
  const list=<ul>
  {props.tasks.map((task, idx) => (
    <li key={idx}>
      <Task
        key={idx}
        todoTitle={task.todoTitle}
        todoDueDate={task.todoDueDate}
        todoDescription={task.todoDescription}
      />
      <button className="deleteTaskButton bg-red-500 text-white p-2 m-1 rounded-lg" onClick={() => props.deleteTask(idx)}>
            Delete
          </button>
    </li>
  ))}
</ul>
return <>{list}</>
}
export default TaskList;
// class TaskList extends React.Component<Props, State> {
//   render() {
//     return (
//       <ul>
//         {this.props.tasks.map((task, idx) => (
//           <li key={idx}>
//             <Task
//               key={idx}
//               todoTitle={task.todoTitle}
//               todoDueDate={task.todoDueDate}
//               todoDescription={task.todoDescription}
//             />
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
