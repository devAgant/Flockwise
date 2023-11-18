// Written by Evan
"use client";

import React, { useState } from 'react';
import { Session } from 'next-auth';
import AssignTask from './assign-task';
import CreateTask from './create-task';
import ViewTasks from './view-tasks';
import { useSession } from 'next-auth/react';


const TaskManager = () => {
  const { data: session } = useSession();
  const [activeComponent, setActiveComponent] = useState<null | string>(null);

  console.log("in task manager");

  const taskManagerStyles = {
    textAlign: 'center',
    padding: '20px',
  } as React.CSSProperties;

  const sectionStyles = {
    margin: '20px 50px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    flex: 1,
  };

  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const handleViewTasksClick = () => {
    setActiveComponent('viewTasks');
  };

  const handleCreateTaskClick = () => {
    setActiveComponent('createTask');
    console.log("yoo")
  };

  const handleAssignTaskClick = () => {
    setActiveComponent('assignTask');
  };

  return (
    <div style={taskManagerStyles}>
      <h1>Task Manager</h1>

      <div style={containerStyles}>
        <div style={sectionStyles} onClick={handleViewTasksClick}>
          <h2>View Tasks</h2>
        </div>

        <div style={sectionStyles} onClick={handleCreateTaskClick}>
          <h2>Create Tasks</h2>
        </div>

        <div style={sectionStyles} onClick={handleAssignTaskClick}>
          <h2>Assign Tasks</h2>
        </div>
      </div>

      {activeComponent === 'viewTasks' && <ViewTasks />}
      {activeComponent === 'createTask' && <CreateTask />}
      {activeComponent === 'assignTask' && <AssignTask />}
    </div>
  );
};

export default TaskManager;
