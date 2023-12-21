import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  todoTitle: string;
  todoDescription: string;
  todoDueDate: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      todoTitle: "",
      todoDescription: "",
      todoDueDate: "",
    };
    // this.inputRef = React.createRef(); // Initialize the ref in the constructor //uncontrolled
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      todoTitle: this.state.todoTitle,
      todoDescription: this.state.todoDescription,
      todoDueDate: this.state.todoDueDate,
    };
    this.props.addTask(newTask);
    //cleans the state after submitting
    this.setState({ todoTitle: "" 
    , todoDescription: ""
    , todoDueDate: ""});
  };
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ todoTitle: event.target.value 
    });
  };
  todoDescriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ todoDescription: event.target.value 
    });
  };
  todoDueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ todoDueDate: event.target.value 
    });
  };
  //   inputRef: React.RefObject<HTMLInputElement>; // Define the ref type
  render() {
    return (
      <form onSubmit={this.addTask}>
        <input
          type="text"
          placeholder="Enter task title"
          value={this.state.todoTitle}
          onChange={this.titleChanged}
          id="todoTitle"
        />
              <input
          type="text"
          placeholder="Enter task description"
          value={this.state.todoDescription}
          id="todoDescription"
          onChange={this.todoDescriptionChanged} 
        />
              <input
          type="text"
          placeholder="Enter task due date"
          value={this.state.todoDueDate}
          id = "todoDueDate"
          onChange={this.todoDueDateChanged}
        />             
        <button type="submit" id="addTaskButton">Add a Task</button>
      </form>
    );
  }
}

export default TaskForm;
