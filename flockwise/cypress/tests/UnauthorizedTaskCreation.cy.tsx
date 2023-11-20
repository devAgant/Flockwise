import React from 'react';
import CreateTask from '../../app/task-manager/create-task';
import Provider from '../../components/Provider'; // Adjust the import path based on your project structure
import '../../styles/globals.css';

describe('<CreateTask />', () => {
  it('Submits the form and displays a success notification', () => {
    const mockSession = {
      user: {
        name: 'Test User',
        email: 'test@example.com',
        employee: {
          accessLevel: 1, // Employees shouldnt be able to create tasks
        },
      },
    };

    cy.mount(
      <Provider session={mockSession}>
        <CreateTask />
      </Provider>
    );

    // Fill out the form
    cy.get('input[name="title"]').type('Test Task');
    cy.get('input[name="estimatedEffort"]').type('5');
    cy.get('select[name="billableStatus"]').select('true');
    cy.get('textarea[name="description"]').type('This is a test task');

    cy.intercept('POST', '/api/taskRoute').as('createTask');

    cy.get('button[type="submit"]').click();
    
    cy.contains('.notification', 'You do not have the required access to create a task.')
  .should('be.visible');

    cy.get('input[name="title"]').should('have.value', 'Test Task');
    cy.get('input[name="estimatedEffort"]').should('have.value', '5');
    cy.get('select[name="billableStatus"]').should('have.value', 'true');
    cy.get('textarea[name="description"]').should('have.value', 'This is a test task');
  });

});