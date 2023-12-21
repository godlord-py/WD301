/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Task from "./Task";
interface Props {
  tasks: TaskItem[];
}
interface TaskItem {
  todoDescription: string;
  todoTitle: string;
  todoDueDate: string;
}
interface State {}
class TaskList extends React.Component<Props, State> {
  // constructor(props: Props) {
  //     super(props);
  //     this.state = {
  //         tasks: []
  //     }
  // }
  // componentDidMount() {
  //     const tasks = [{ title: "Pay rent" }, { title: "Submit assignment" }];
  //     this.setState((state, props) => ({
  //       tasks,
  //     }));
  //   }
  render() {
    return this.props.tasks.map((task, idx) => (
      <li key={idx} className="TaskItem">
      <Task key={idx} todoTitle={task.todoTitle} 
                      todoDueDate={task.todoDescription}  
                      todoDescription={task.todoDueDate} /></li>
      
    ));
  }
}
export default TaskList;
