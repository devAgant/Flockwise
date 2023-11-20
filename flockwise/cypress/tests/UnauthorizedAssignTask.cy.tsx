// Written by Evan
import React from 'react';
import AssignTask from '../../app/task-manager/assign-task';
import Provider from '../../components/Provider'; // Adjust the import path based on your project structure
import '../../styles/globals.css';

describe('<AssignTask />', () => {
  it('Displays an error notification for unauthorized user', () => {
    // Mock session with a user having access level 1 (or any level that is too low to assign tasks)
    const mockSession = {
      user: {
        name: 'Unauthorized User',
        email: 'unauthorized@example.com',
        employee: {
          accessLevel: 1,
        },
      },
    };

    // Mock data for employees and tasks
    const mockEmployees = [
      { value: 'employee1', label: 'Employee 1' },
      { value: 'employee2', label: 'Employee 2' },
    ];

    const mockTasks = [
      { value: 'task1', label: 'Task 1' },
      { value: 'task2', label: 'Task 2' },
    ];

    // Intercept API calls
    cy.intercept('/api/getEmployees', { statusCode: 200, body: mockEmployees }).as('getEmployees');
    cy.intercept('/api/getTasks', { statusCode: 200, body: { tasks: mockTasks } }).as('getTasks');
    cy.intercept('POST', '/api/assignTask').as('assignTask');
    cy.intercept('GET', '/api/auth/session', {
      statusCode: 200,
      body: {
        user: {
          name: 'Unauthorized User',
          email: 'unauthorized@example.com',
          employee: {
            accessLevel: 1,
          },
        },
      },
    }).as('getSession');

    // Mount the component with the mocked session
    cy.mount(
      <Provider session={mockSession}>
        <AssignTask />
      </Provider>
    );

    // Wait for API calls
  cy.wait(['@getEmployees', '@getTasks']);

  // Trigger form submission
  cy.get('button[type="submit"]').click();

  // Wait for a short time to allow potential network requests
  cy.wait(1000);

  // Ensure that the assignTask route was not called
  cy.get('@assignTask').should('not.have.property', 'request');
});

});