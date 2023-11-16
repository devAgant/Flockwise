// Written by Evan
import React, { useState } from 'react';
import Task from '@models/task';

const CreateTask = ({session}) => {
  const [task, setTask] = useState({
    title: '',
    estimatedEffort: '',
    billableStatus: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let taskCode = await generateUniqueTaskCode();

  if(session.user && session.user.employee && session.user.employee.accessLevel >= 2) {
    try {
      const newTask = await Task.create({
        title: task.title,
        taskCode: taskCode,
        estimatedEffort: task.estimatedEffort,
        description: task.description,
        billable: task.billableStatus === 'true', // converts the string to a boolean
      });

      console.log('New Task:', newTask);

    } 
    catch (error) {
      console.error('Error creating task: ', error.message)
    }
  }
  else {
    console.error('User does not have the required access level to create a task, must be a Manager or HR Staff')
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
    </div>
  );
};

// pretty much identical to generating a unique employee id
const generateUniqueTaskCode = async () => {
  const lastTask = await Task.findOne().sort({ taskCode: -1 });

  if (lastTask) {
    return lastTask.taskCode + 1;
  } else {
    // If no tasks exist yet, start with an initial value
    return 100000;
  }
};

export default CreateTask;
