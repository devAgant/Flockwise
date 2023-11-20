// Written by Evan

import React, { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';

const ViewTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const { data: session } = useSession();


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const userSession = await getSession();
        console.log('Session in useEffect:', session); // somehow necessary to re-render the component
        const assignedTasks = userSession?.user?.employee?.assignedTasks || [];
    
        console.log('Assigned tasks:', assignedTasks);
    
        const tasksData = await Promise.all(
          assignedTasks.map(async (task) => {
            const response = await fetch(`/api/getUserTask?taskId=${task}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
        );
    
        const tasks = tasksData.map(data => data.task);
    
        setTasks(tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    // Check if the user is authenticated
    if (session) {
      fetchTasks();
    }
  }, [session]);
  

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
    margin: '0 10px 0 0',
  };

  const taskDetailsStyles = {
    width: '70%',
    padding: '10px',
    textAlign: 'left',
    margin: '0 0 0 80px',
  };

  return (
    <div>
      <div style={containerStyles}>
        <div style={taskListStyles}>
          {tasks.map((task) => (
            <div
            key={task?._id}
            onClick={() => handleTaskClick(task)}
            style={{ cursor: 'pointer', padding: '5px' }}
          >
            {task?.title || "Untitled Task"}
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
