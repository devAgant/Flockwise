import React, { useState } from 'react';

const CreateTask = () => {
  const [task, setTask] = useState({
    title: '',
    estimatedEffort: '',
    dueDate: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Mock: You can display the task data or send it to the server here.
    console.log('New Task:', task);
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
          <label style={labelStyles}>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleInputChange}
            style={inputStyles}
          />
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
    </div>
  );
};

export default CreateTask;
