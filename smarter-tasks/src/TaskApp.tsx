import { useEffect } from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";
interface TaskAppState {
  tasks: TaskItem[];
  darkMode: boolean;
}
const TaskApp = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
      darkMode: false,
    },
  );
  const addTask = (task: TaskItem) => {
    setTaskAppState({ ...taskAppState, tasks: [...taskAppState.tasks, task] });
  };
  const toggleDarkMode = () => {
    setTaskAppState({ ...taskAppState, darkMode: !taskAppState.darkMode });
  };
  useEffect(() => {
    // Apply dark mode
    document.body.classList.toggle("dark-mode", taskAppState.darkMode);
  }, [taskAppState.darkMode]);

  //delete a task
  const deleteTask = (index: number) => {
    const newTasks = [...taskAppState.tasks];
    newTasks.splice(index, 1);
    setTaskAppState({ ...taskAppState, tasks: newTasks });
  };

  useEffect(() => {
    // console.log("User Effect is called!")
    // document.title= `You have ${taskAppState.tasks.length} tasks!`;
    const id = setTimeout(() => {
      console.log(`Saved ${taskAppState.tasks.length} items to backend...`);
    }, 5000);
    return () => {
      console.log("clear or cancel any existing network call");
      clearTimeout(id);
    };
  }, [taskAppState.tasks]);
  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-lg mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} deleteTask={deleteTask} />
        </div>
      </div>
      <button
        onClick={toggleDarkMode}
        className="bg-gray-800 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-gray-700 focus:outline-none focus:shadow-outline"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};
export default TaskApp;

//CLASS COMPONENT
// interface TaskAppProp {}
// class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
//   constructor(props: TaskAppProp) {
//     super(props);
//     this.state = {
//       tasks: [],
//     };
//   }
//   addTask = (task: TaskItem) => {
//     if (!task.todoTitle || !task.todoDueDate) {
//       alert("Title and due date are required!");
//       return;
//     }
//     else {
//       //fill TodoDescription with not provided
//       if (!task.todoDescription) {
//         task.todoDescription = "Not provided";
//       }
//     }
//     this.setState((state) => {
//       return {
//         tasks: [...state.tasks, task],
//       };
//     });
//   };
//   render() {
//     return (
//       <div className="container py-10 max-w-4xl mx-auto">
//         <h1 className="text-3xl mb-2 font-bold text-slate-700">
//           Smarter Tasks
//         </h1>
//         <h1 className="text-lg mb-6 text-slate-600">
//           <span className="font-bold">Project: </span>
//           Graduation Final Year Project - Smarter Tasks
//         </h1>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="border border-slate-200 rounded-xl p-4">
//             <h1 className="text-slate-500 text-xl font-bold text-cente r mb-2">
//               Pending Tasks
//             </h1>
//             <TaskForm addTask={this.addTask} />
//             <TaskList tasks={this.state.tasks} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
