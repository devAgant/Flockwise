import React from 'react';
import CreateTask from '../../app/task-manager/create-task';
import Provider from '../../components/Provider'; // Adjust the import path based on your project structure
import '../../styles/globals.css';
import Notification from '../../components/Notification';

describe('<CreateTask />', () => {
  it('Submits the form and displays a success notification', () => {
    const mockSession = {
      user: {
        name: 'Test User',
        email: 'test@example.com',
        employee: {
          accessLevel: 2,
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

    cy.wait('@createTask').then((interception) => {
      console.log('Request:', interception.request);
      console.log('Response:', interception.response);
    });
    
    cy.contains('.notification', 'Task created successfully!')
  .should('be.visible');

    cy.get('input[name="title"]').should('have.value', '');
    cy.get('input[name="estimatedEffort"]').should('have.value', '');
    cy.get('select[name="billableStatus"]').should('have.value', '');
    cy.get('textarea[name="description"]').should('have.value', '');
  });

});