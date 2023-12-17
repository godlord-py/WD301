import Taskcard from './TaskCard';
function App() {
  return (
    <div>
      <div>
        <h1>Pending</h1>
        <Taskcard title = "Play VALORANT"
                  dueDate = "due date: 10th April"
                  assigneeName = "assignee name :Myself" />

        <Taskcard title = "Play AIM LABS"
                  dueDate = "due date: 12th April"
                  assigneeName = "assignee name : Myself" />
      </div>
      <div>
        <h1>Done</h1>
        <Taskcard title = "Go to College"
                  dueDate = "completed on: 14th April"
                  assigneeName = "assignee name :Myself"/>
        <Taskcard title = "Learn React.js"
                  dueDate = "completed on: 16th April"
                  assigneeName = "assignee name :Teachers"/>
      </div>
    </div>

  );
}

export default App
