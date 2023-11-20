import React from 'react';
import AssignTask from '../../app/task-manager/assign-task';
import Provider from '../../components/Provider'; // Adjust the import path based on your project structure
import '../../styles/globals.css';

describe('<AssignTask />', () => {
  it('Submits the form and displays a success notification', () => {
    const mockSession = {
      user: {
        name: 'Test User',
        email: 'test@example.com',
        employee: {
          accessLevel: 3,
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

    cy.mount(
      <Provider session={mockSession}>
        <AssignTask />
      </Provider>
    );

    cy.wait(['@getEmployees', '@getTasks']);


    cy.get('button[type="submit"]').click();

    cy.wait('@assignTask');

  });
});