// Viraaj Veeramachaneni's Code
import React, { useState } from 'react';

const AssignBenefit = () => {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedTask, setSelectedTask] = useState('');

  const handleEmployeeChange = (event) => {
    setSelectedEmployee(event.target.value);
  };

  const handleTaskChange = (event) => {
    setSelectedTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the task assignment logic here, e.g., update the database.
    // Provide feedback to the user.
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
            value={selectedEmployee}
            onChange={handleEmployeeChange}
            style={inputStyles}
          >
            <option value="">Select an employee</option>
            <option value="employee1">Viraaj</option>
            <option value="employee2">Evan</option>
            <option value="employee1">Arif</option>
            <option value="employee2">Sai</option>
            <option value="employee1">Isabella</option>
            <option value="employee2">Elijah</option>
            {/* Add more employee options here */}
          </select>
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Select Benefit:</label>
          <select
            value={selectedTask}
            onChange={handleTaskChange}
            style={inputStyles}
          >
            <option value="">Select a benefit</option>
            <option value="task1">Medical</option>
            <option value="task2">Dental</option>
            <option value="task2">Visual</option>
            <option value="task2">Retirement</option>
            {/* Add more task options here */}
          </select>
        </div>
        <button type="submit" style={buttonStyles}>
          Assign Benefit
        </button>
      </form>
    </div>
  );
};

export default AssignBenefit;
