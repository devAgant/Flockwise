// Worked on by Sai Kotha

import React, { useState } from 'react';
import Notification from '@components/notification';

function VerifyHR() {
  const [employeeCode, setEmployeeCode] = useState('');
  const [isEmployeeH, setIsEmployeeH] = useState(false);
  const [employeeName, setEmployeeName] = useState('');
  const [employeeID, setEmployeeID] = useState('');
  const [employeeRole, setEmployeeRole] = useState('');
  const [createdEmployee, setCreatedEmployee] = useState(null);
  const [employeeDepartment, setEmployeeDepartment] = useState('');
  const [employeePromotions, setEmployeePromotions] = useState('');
  const [employeeTransfers, setEmployeeTransfers] = useState('');
  const [notification, setNotification] = useState(null);

  const handleCloseNotification = () => {
    setNotification(null);
  };

  // Test case checking for validation 
  const checkEmployeeCode = () => {
    if (employeeCode === 'H') {
      setIsEmployeeH(true);
      setNotification(null); // Clear any existing notification
    } else {
      setIsEmployeeH(false);
      console.log("User has entered the wrong code")
      setNotification({
        message: 'The user does not have access to this section.',
        isError: true,
      });
    }
  };

  const handleCreateEmployee = () => {
    // Check if the employee ID already exists
    if (createdEmployee && createdEmployee.id === employeeID) {
      alert('You are not allowed to use this employee ID.');
    } else {
      // If the employee ID is unique, proceed with creating the employee
      setCreatedEmployee({
        name: employeeName,
        id: employeeID,
        role: employeeRole,
        department: employeeDepartment,
        promotions: employeePromotions,
        transfers: employeeTransfers,
      });
      // Adding a success message
      alert('Employee successfully added!');
    }
  };

  const buttonStyles = {
    margin: '0 15px',
    border: '1px solid #000',
    padding: '5px 10px',
    borderRadius: '5px',
  };

  const containerStyles = {
    textAlign: 'center',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center', 
  };
  
  const rowContainerStyles = {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center', 
    margin: '10px 0', 
  };

  const textStyles = {
    margin: '10px 0',
  };

  const inputStyles = {
    margin: '10px 0', 
    padding: '5px 10px', 
  };

  return (
    <div style={containerStyles}>
      <h1 style={textStyles}>Employee Code Verification</h1>
      <input
        type="text"
        placeholder="Enter employee code"
        value={employeeCode}
        onChange={(e) => setEmployeeCode(e.target.value)}
        style={inputStyles}
      />
      <button onClick={checkEmployeeCode} style={buttonStyles}>
        Check
      </button>

      {isEmployeeH ? (
        <div>
          <div style={rowContainerStyles}>
            <input
              type="text"
              placeholder="Employee Name"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              style={inputStyles}
            />
            <input
              type="text"
              placeholder="Employee ID"
              value={employeeID}
              onChange={(e) => setEmployeeID(e.target.value)}
              style={inputStyles}
            />
            <input
              type="text"
              placeholder="Employee Role"
              value={employeeRole}
              onChange={(e) => setEmployeeRole(e.target.value)}
              style={inputStyles}
            />
          </div>
          <div style={rowContainerStyles}>
            <input
              type="text"
              placeholder="Employee Department"
              value={employeeDepartment}
              onChange={(e) => setEmployeeDepartment(e.target.value)}
              style={inputStyles}
            />
            <input
              type="text"
              placeholder="Employee Promotions"
              value={employeePromotions}
              onChange={(e) => setEmployeePromotions(e.target.value)}
              style={inputStyles}
            />
            <input
              type="text"
              placeholder="Employee Transfers"
              value={employeeTransfers}
              onChange={(e) => setEmployeeTransfers(e.target.value)}
              style={inputStyles}
            />
          </div>
          <button onClick={handleCreateEmployee} style={buttonStyles}>
            Create
          </button>
          {createdEmployee && (
            <div>
              <p style={textStyles}>
                Employee Created:
                <br />
                Name: {createdEmployee.name}
                <br />
                ID: {createdEmployee.id}
                <br />
                Role: {createdEmployee.role}
                <br />
                Department: {createdEmployee.department}
                <br />
                Promotions: {createdEmployee.promotions}
                <br />
                Transfers: {createdEmployee.transfers}
              </p>
            </div>
          )}
        </div>
      ) : (
        <br></br>
      )}
      {notification && (
        <Notification
          message={notification.message}
          isError={notification.isError}
          onClose={handleCloseNotification}
        />
      )}
    </div>
  );
}

export default VerifyHR;