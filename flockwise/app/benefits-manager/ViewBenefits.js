// Viraaj Veeramachaneni's Code

import React, { useState } from 'react';

const ViewBenefits = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  
  const tasks = [
  
    {
      id: 1,
      title: 'Medical',
      name: 'Comprehensive Health Plan',
      planType: 'Preferred Provider Organization',
      employeeContribution: '$50/month',
      coPay: '$20 (primary care), $40 (specialists)',
      coverage: 'General medical, emergency, mental health, preventive care',
    },
    {
      id: 2,
      title: 'Dental',
      name: 'Total Dental Care Plan',
      planType: 'Preferred Provider Organization',
      employeeContribution: '$30/month',
      coPay: '$15 (routine check-ups)',
      coverage: 'Exams, cleanings, fillings, orthodontics',
    },
    {
      id: 3,
      title: 'Visual',
      name: 'Clear Vision Plan',
      planType: 'Health Maintenance Organization',
      employeeContribution: '$20/month',
      coPay: '$10 (eye exams)',
      coverage: 'Eye exams, glasses, contact lenses',
    },
    {
      id: 4,
      title: 'Disability',
      name: 'Secure Income Plan',
      planType: 'Long-Term Disability Organization',
      employeeContribution: '$40/month',
      coPay: '$25 per claim',
      coverage: 'Income protection in case of long-term illness or injury',
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
                <strong>Name:</strong> {selectedTask.name}
              </p>
              <p>
                <strong>Plan Type:</strong> {selectedTask.planType}
              </p>
              <p>
                <strong>Employee Amount:</strong> {selectedTask.employeeContribution}
              </p>
              <p>
                <strong>Co-pay:</strong> {selectedTask.coPay}
              </p>
              <p>
                <strong>Coverage:</strong> {selectedTask.coverage}
              </p>
            </div>
          ) : (
            <div>Select a benefit to view details</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewBenefits;
