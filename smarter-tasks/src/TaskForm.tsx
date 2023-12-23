import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  todoTitle: string;
  todoDescription?: string;
  todoDueDate: string;
}
const TaskForm= (props:TaskFormProps)=> {
  const [formState, setFormState] = React.useState<TaskFormState>({
    todoTitle: "",
    todoDescription: "",
    todoDueDate: "",
  });

  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({...formState, todoTitle: event.target.value 
    });
  };
  const todoDescriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
   setFormState({...formState, todoDescription: event.target.value 
    });
  };
  const todoDueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({...formState, todoDueDate: event.target.value 
    });
  };
  const resetTaskButton = () => {
    setFormState({ todoTitle: "", todoDescription: "", todoDueDate: "" });
  }
  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.todoTitle.length === 0 || formState.todoDueDate.length === 0) {
      return;
    }
    props.addTask({
      todoTitle: formState.todoTitle,
      todoDescription: formState.todoDescription || "", // Use an empty string if todoDescription is undefined
      todoDueDate: formState.todoDueDate,
    });
    setFormState({ todoTitle: "", todoDescription: "", todoDueDate: "" });
  };

  //   inputRef: React.RefObject<HTMLInputElement>; // Define the ref type
    return (
      <form onSubmit={addTask} className="flex flex-col gap-4">
        <label htmlFor="todoTitle">Task Title</label>
        <input
          type="text"
          placeholder="Enter task title"
          value={formState.todoTitle}
          onChange={titleChanged}
          id="todoTitle"
        />
  
        <label htmlFor="todoDescription">Task Description</label>
        <input
          type="text"
          placeholder="Enter task description"
          value={formState.todoDescription}
          id="todoDescription"
          onChange={todoDescriptionChanged}
        />
  
        <label htmlFor="todoDueDate">Task Due Date</label>
        <input
          type="date"
          placeholder="Enter task due date"
          value={formState.todoDueDate}
          id="todoDueDate"
          onChange={todoDueDateChanged}
        />
        <div className = "flex space-x-40">
        <div className="bg-green-600 p-2 text-slate-800 rounded-lg text-white">
          <button type="submit" id="addTaskButton">
            Add a Task
          </button>
        </div>
        <div className="bg-green-600 p-2 text-slate-800 rounded-lg text-white">
          <button type="reset" id="resetTaskButton" onClick={resetTaskButton}>
            Reset
          </button>
          </div>
          </div>
      </form>
    );
  }
export default TaskForm;






// class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
//   constructor(props: TaskFormProps) {
//     super(props);
//     this.state = {
//       todoTitle: "",
//       todoDescription: "",
//       todoDueDate: "",
//     };
//     // this.inputRef = React.createRef(); // Initialize the ref in the constructor //uncontrolled
//   }

//   addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
//     event.preventDefault();
//     const newTask = {
//       todoTitle: this.state.todoTitle,
//       todoDescription: this.state.todoDescription,
//       todoDueDate: this.state.todoDueDate,
//     };
//     this.props.addTask(newTask);
//     //cleans the state after submitting
//     this.setState({ todoTitle: "" 
//     , todoDescription: ""
//     , todoDueDate: ""});
//   };