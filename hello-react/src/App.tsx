import React from 'react';
import Taskcard from './TaskCard';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'right', textAlign: 'center', minHeight: '50vh' }}>
      <h1>Smarter Tasks</h1>
      <h2>Task Management App</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
        <div style={{ border: '4px solid white', padding: '10px', marginRight: '80px' }}>
          <h2 className='mx-auto text-red-500'>Pending</h2>
          <Taskcard
            title="Play VALORANT"
            dueDate="17 April"
            assigneeName="NAME"
          />

          <Taskcard
            title="Play AIM LABS"
            dueDate="17 April"
            assigneeName="NAME"
          />
        </div>

        <div style={{ border: '4px solid white', padding: '10px' }}>
          <h2 className='mx-auto text-red-500'>Done</h2>
          <Taskcard
            title="Go to College"
            completedAtDate="17 April"
            assigneeName="NAME"
          />
          <Taskcard
            title="Learn React.js"
            completedAtDate="17 April"
            assigneeName="NAME"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
