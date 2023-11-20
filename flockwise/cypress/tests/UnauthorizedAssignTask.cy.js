// Written by Evan

import React from 'react';
import AssignTask from '../../app/task-manager/assign-task';
import Provider from '../../components/Provider'; // Adjust the import path based on your project structure
import Notification from '../../components/notification';
import '../../styles/globals.css';

describe('<AssignTask />', () => {
  it('Submits the form and displays a success notification', () => {
    const mockSession = {
      user: {
        name: 'Test User',
        email: 'test@example.com',
        employee: {
          accessLevel: 1,
        },
      },
    };

    const mockEmployees = [
      { value: 'employee1', label: 'Employee 1' },
      { value: 'employee2', label: 'Employee 2' },
    ];

    const mockTasks = [
      { value: 'task1', label: 'Task 1' },
      { value: 'task2', label: 'Task 2' },
    ];

    cy.intercept('/api/getEmployees', { statusCode: 200, body: mockEmployees }).as('getEmployees');
    cy.intercept('/api/getTasks', { statusCode: 200, body: { tasks: mockTasks } }).as('getTasks');
    cy.intercept('POST', '/api/assignTask', { statusCode: 200, body: { message: 'Task assigned successfully!' } }).as('assignTask');
    cy.intercept('GET', '/api/auth/session', { 
      statusCode: 200, 
      body: { 
        user: { 
          name: 'Test User', 
          email: 'test@example.com', 
          employee: { 
            accessLevel: 1 
          }
        }
      }
    }).as('getSession');


    cy.mount(
      <Provider session={mockSession}>
        <AssignTask />
      </Provider>
    );

    cy.wait(['@getEmployees', '@getTasks']);


    cy.get('button[type="submit"]').click();

    cy.get('.notification').should('be.visible').invoke('text')
    .then((notificationText) => {
      expect(notificationText).to.equal('You do not have the required access to assign a task.');
  
    });
    cy.get('.notification').should('not.exist');

  });
});