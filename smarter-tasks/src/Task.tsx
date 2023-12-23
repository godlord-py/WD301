
import "/home/godlord/wd301/hello-react/src/TaskCard.css";
interface TaskProp {
  id: string;
  todoTitle: string;
  todoDueDate: string;
  todoDescription: string;
}
// class Task extends React.Component<TaskProp> {
//   render() {
//     return (
//       <div className="TaskItem shadow-md border border-slate-100">
//         <h2 className="text-base font-bold my-1">Title: {this.props.todoTitle}</h2>
//         <p className="text-sm text-slate-500">Description: {this.props.todoDueDate}</p>
//         <p className="text-sm text-slate-500">DueDate: {this.props.todoDescription}</p>
//       </div>
//     );
//   }
// }

const Task = (props: TaskProp) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <a href= {`/tasks/${props.id || ""}`}>
      <h2 className="text-base font-bold my-1">Title: {props.todoTitle}</h2>
      </a>
      <p className="text-sm text-slate-500">Description: {props.todoDueDate}</p>
      <p className="text-sm text-slate-500">DueDate: {props.todoDescription}</p>
    </div>
  );
};


export default Task;
