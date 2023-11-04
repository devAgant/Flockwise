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

  const containerStyles = {
    display: 'flex',
    width: '100%',
  };
  
  const taskListStyles = {
    width: '40%',
    overflowY: 'scroll',
    border: '1px solid #ccc',
    padding: '10px',
    background: '#f2f2f2',
    margin: '0 10px 0 0', // Add margin to the right
  };
  
  const taskDetailsStyles = {
    width: '70%',
    padding: '10px',
    textAlign: 'left',
    margin: '0 0 0 80px', // Add margin to the left to separate the list from the info
  };
  
  return (
    <div>
      <div style={containerStyles}>
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
  );
};

export default ViewTasks;
