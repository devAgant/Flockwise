import React, { useState } from 'react';

const ViewTasks = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  // mock tasks, full implementation will retrieve values from the database
  const tasks = [
    {
      id: 1,
      title: 'Task 1',
      estimatedEffort: '2 hours',
      dueDate: '2023-11-10',
      description: 'Description for Task 1',
    },
    {
      id: 2,
      title: 'Task 2',
      estimatedEffort: '3 hours',
      dueDate: '2023-11-15',
      description: 'Description for Task 2',
    },
    {
      id: 3,
      title: 'Task 3',
      estimatedEffort: '16 hours',
      dueDate: '2023-11-3',
      description: 'Description for Task 3',
    },
    {
      id: 4,
      title: 'Task 4',
      estimatedEffort: '120 hours',
      dueDate: '2023-11-4',
      description: 'waaaaaaaaaa',
    },
    // more tasks here ...
  ];

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const taskListStyles = {
    width: '250%', // Adjust the width for better readability
    overflowY: 'scroll',
    border: '1px solid #ccc',
    padding: '10px',
    background: '#f2f2f2', // Background color
  };

  const taskDetailsStyles = {
    width: '100%', // Fixed width to prevent shifting
    padding: '10px',
    textAlign: 'left', // Align text to the left
  };
  

  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const marginStyles = {
    margin: '10px',
  };

  return (
    <div>
      <h3>View Tasks</h3>
      <div style={containerStyles}>
        <div>
          <div style={taskListStyles}>
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => handleTaskClick(task)}
                style={{ cursor: 'pointer', padding: '5px' }}
              >
                {task.title}
              </div>
            ))}
          </div>
        </div>
        <div style={marginStyles}>
          <div style={taskDetailsStyles}>
            {selectedTask ? (
              <div>
                <h4>{selectedTask.title}</h4>
                <p>
                  <strong>Estimated Effort:</strong> {selectedTask.estimatedEffort}
                </p>
                <p>
                  <strong>Due Date:</strong> {selectedTask.dueDate}
                </p>
                <p>
                  <strong>Description:</strong> {selectedTask.description}
                </p>
              </div>
            ) : (
              <div>Select a task to view details</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTasks;
