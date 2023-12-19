import React from 'react';
import Taskcard from './TaskCard';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'right', textAlign: 'center', minHeight: '50vh' }}>
      <h1>Smarter Tasks</h1>
      <h2>Task Management App</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
        <div style={{ border: '4px solid white', padding: '10px', marginRight: '80px' }}>
          <h2>Pending</h2>
          <Taskcard
            title="Play VALORANT"
            dueDate="due date: 10th April"
            assigneeName="assignee name: Myself"
          />

          <Taskcard
            title="Play AIM LABS"
            dueDate="due date: 12th April"
            assigneeName="assignee name: Myself"
          />
        </div>

        <div style={{ border: '4px solid white', padding: '10px' }}>
          <h2>Done</h2>
          <Taskcard
            title="Go to College"
            dueDate="completed on: 14th April"
            assigneeName="assignee name: Myself"
          />
          <Taskcard
            title="Learn React.js"
            dueDate="completed on: 16th April"
            assigneeName="assignee name: Teachers"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
