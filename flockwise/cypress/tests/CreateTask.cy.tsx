// Written by Evan

import React from 'react';
import CreateTask from '../../app/task-manager/create-task';
import Provider from '../../components/Provider';
import '../../styles/globals.css';
import Notification from '../../components/notification';

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
    cy.intercept('POST', '/api/taskRoute', {
      statusCode: 200,
      body: { message: 'Task created successfully!' },
    }).as('createTask');

    cy.mount(
      <Provider session={mockSession}>
        <CreateTask />
      </Provider>
    );

    cy.get('input[name="title"]').type('Test Task');
    cy.get('input[name="estimatedEffort"]').type('5');
    cy.get('select[name="billableStatus"]').select('true');
    cy.get('textarea[name="description"]').type('This is a test task');
    
    cy.intercept('POST', '/api/taskRoute', {
      statusCode: 200,
      body: { message: 'Task created successfully!' },
    }).as('createTask');
    cy.get('button[type="submit"]').click();
    cy.wait('@createTask');

    cy.get('input[name="title"]').should('have.value', '');
    cy.get('input[name="estimatedEffort"]').should('have.value', '');
    cy.get('select[name="billableStatus"]').should('have.value', '');
    cy.get('textarea[name="description"]').should('have.value', '');
  });

});