// Written by Evan

"use client";

import React, { useState, useEffect } from 'react';
import Task from '@models/task';
import { useSession } from 'next-auth/react';
import SessionManager from '@models/sessionManager';
import NextAuth from 'next-auth/next';
import { connectToDB } from '@utils/database';
import sessionManager from '@models/sessionManager';
import Notification from '@components/notification';



const CreateTask = () => {
  const { data: session } = useSession();

  useEffect(() => {
    SessionManager.setSession(session);
  }, [session]);
  
  const [task, setTask] = useState({
    title: '',
    estimatedEffort: '',
    billableStatus: '',
    description: '',
  });

  const [notification, setNotification] = useState(null);

  const handleCloseNotification = () => {
    setNotification(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const accessLevel = session?.user?.employee?.accessLevel;
      if (accessLevel >= 2) {
        const response = await fetch('/api/taskRoute', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(task),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const responseData = await response.json();
        console.log('Task created:', responseData);
        // Reset form or handle success (e.g., display success message, navigate to another page)
        setNotification({
          message: `Task created successfully!`,
          isError: false,
        });

        setTask({ title: '', estimatedEffort: '', billableStatus: '', description: '' });
      } else {
        setNotification({
          message: 'You do not have the required access to create a task.',
          isError: true,
        });
      }
    } catch (error) {
      setNotification({
        message: 'Error creating task. Please try again.',
        isError: true,
      });
      // Handle error (e.g., display error message)
    }
  };

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
    color: '#000', // Set the text color to black (or your preferred color)
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '30px'
  };

  return (
    <div>
      <form style={formStyles} onSubmit={handleSubmit}>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Title:</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleInputChange}
            style={inputStyles}
          />
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Estimated Effort:</label>
          <input
            type="text"
            name="estimatedEffort"
            value={task.estimatedEffort}
            onChange={handleInputChange}
            style={inputStyles}
          />
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Billable Task:</label>
          <select
            name="billableStatus"
            value={task.billableStatus}
            onChange={handleInputChange}
            style={inputStyles}
          >
            <option value="">Select</option>
            <option value="true">Billable</option>
            <option value="false">Non-billable</option>
          </select>
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Description:</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleInputChange}
            style={inputStyles}
          />
        </div>
        <button type="submit" style={buttonStyles}>Create New Task</button>
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

export default CreateTask;