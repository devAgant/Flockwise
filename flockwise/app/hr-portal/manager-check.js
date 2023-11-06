// Worked on by Sai Kotha

import React, { useState } from 'react';

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

  const checkEmployeeCode = () => {
    if (employeeCode === 'H') {
      setIsEmployeeH(true);
    } else {
      setIsEmployeeH(false);
    }
  };

  const handleCreateEmployee = () => {
    setCreatedEmployee({
      name: employeeName,
      id: employeeID,
      role: employeeRole,
      department: employeeDepartment,
      promotions: employeePromotions,
      transfers: employeeTransfers,
    });
  };

  const buttonStyles = {
    margin: '0 15px',
    border: '1px solid #000',
    padding: '5px 10px',
    borderRadius: '5px',
  };

  const containerStyles = {
    textAlign: 'center',
  };

  const textStyles = {
    margin: '10px 0',
  };

  return (
    <div style={containerStyles}>
      <h1 style={textStyles}>Employee Code Verification</h1>
      <input
        type="text"
        placeholder="Enter employee code"
        value={employeeCode}
        onChange={(e) => setEmployeeCode(e.target.value)}
      />
      <button onClick={checkEmployeeCode} style={buttonStyles}>
        Check
      </button>

      {isEmployeeH ? (
        <div>
          <input
            type="text"
            placeholder="Employee Name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Employee ID"
            value={employeeID}
            onChange={(e) => setEmployeeID(e.target.value)}
          />
          <input
            type="text"
            placeholder="Employee Role"
            value={employeeRole}
            onChange={(e) => setEmployeeRole(e.target.value)}
          />
          <input
            type="text"
            placeholder="Employee Department"
            value={employeeDepartment}
            onChange={(e) => setEmployeeDepartment(e.target.value)}
          />
          <input
            type="text"
            placeholder="Employee Promotions"
            value={employeePromotions}
            onChange={(e) => setEmployeePromotions(e.target.value)}
          />
          <input
            type="text"
            placeholder="Employee Transfers"
            value={employeeTransfers}
            onChange={(e) => setEmployeeTransfers(e.target.value)}
          />
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
        <p style={textStyles}>
          The user does not have an employee code of "H".
        </p>
      )}
    </div>
  );
}

export default VerifyHR;
