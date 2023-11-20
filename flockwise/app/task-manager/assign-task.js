// Written by Evan
import React, { useState, useEffect } from 'react';
import Notification from '@components/Notification';
import { useSession, getSession } from 'next-auth/react';
import SessionManager from '@models/sessionManager';

const AssignTask = () => {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedTask, setSelectedTask] = useState('');
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [notification, setNotification] = useState(null);
  const { data: session } = useSession();

  const handleCloseNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    console.log('Session in useEffect:', session);
    fetchEmployees();
    fetchTasks();
    SessionManager.setSession(session);
  }, [session]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('/api/getEmployees');
      const data = await response.json();
  
      // Check if data is an array before calling map
      if (Array.isArray(data)) {
        setEmployees(data);
      } else {
        console.error('Error: Data is not an array', data);
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };
  
  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/getTasks');
      const data = await response.json();
  
      // Check if data is an array before calling map
      if (Array.isArray(data.tasks)) {
        setTasks(data.tasks);
      } else {
        console.error('Error: Data.tasks is not an array', data);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleEmployeeChange = (event) => {
    setSelectedEmployee(event.target.value);
  };

  const handleTaskChange = (event) => {
    setSelectedTask(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Perform the task assignment logic here
      const session = await getSession();

      const accessLevel = session?.user?.employee?.accessLevel;
      console.log('Access Level:', accessLevel);
      if (accessLevel >= 2) {
      const response = await fetch('/api/assignTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedEmployee, selectedTask }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();

      console.log('Task assigned:', responseData);
  
      // Display a success notification
      setNotification({
        message: `Task ${selectedTask} assigned to employee ${selectedEmployee} successfully!`,
        isError: false,
      });
  
      // Reset the form or handle success
      setSelectedEmployee('');
      setSelectedTask('');
    } else {
      console.log('Access level not sufficient:', accessLevel);
      setNotification({
        message: 'You do not have the required access to assign a task.',
        isError: true,
      });
    }
    } catch (error) {
      console.error('Error:', error);
  
      setNotification({
        message: 'Error assigning task. Please try again.',
        isError: true,
    })};
  }

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px', // Spacing between form elements
    maxWidth: '400px', // Limit the width of the form
    margin: '0 auto', // Center the form horizontally
  };

  const labelStyles = {
    width: '100px', // Fixed width for labels to create uniform spacing
    textAlign: 'left', // Align text to the left
  };

  const inputContainerStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', // Center the input to the right
    alignItems: 'center', // Center the input vertically
  };

  const inputStyles = {
    flex: 1, // Make the input fields expand to fill the container
    padding: '5px', // Padding around input fields
    width: '100%', // Set a fixed width for text boxes
  };

  const buttonStyles = {
    padding: '10px 20px', // Padding for the button-like appearance
    border: '1px solid #ccc', // Match the border color of the other buttons
    background: 'transparent', // Transparent background
    color: '#000', // Set the text color to black
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div>
      <form style={formStyles} onSubmit={handleSubmit}>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Select Employee:</label>
          <select
            data-cy="employee-select"
            value={selectedEmployee}
            onChange={handleEmployeeChange}
            style={inputStyles}
          >
  <option value="">Select an employee</option>
  {employees.map((employee) => (
    <option key={employee.value} value={employee.value}>
      {employee.label}
    </option>
  ))}
</select>
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Select Task:</label>
          <select
            data-cy="task-select"
            value={selectedTask}
            onChange={handleTaskChange}
            style={inputStyles}
          >
  <option value="">Select a task</option>
  {tasks.map((task) => (
    <option key={task.value} value={task.value}>
      {task.label}
    </option>
  ))}
</select>
        </div>
        <button type="submit" style={buttonStyles}>
          Assign Task
        </button>
      </form>
      {notification && (
        <Notification
          message={notification.message}
          isError={notification.isError}
          onClose={handleCloseNotification}
        />
      )}
    </div>
  );
};

export default AssignTask;