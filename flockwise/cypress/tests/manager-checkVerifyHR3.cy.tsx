// Written by Sai Kotha

import React from 'react';
import VerifyHR from '../../app/hr-portal/manager-check';
import '../../styles/globals.css';

describe('<VerifyHR />', () => {
  it('User can create an employee with input H and values are displayed', () => {
    // Mount the VerifyHR component
    cy.mount(<VerifyHR />);

    // Enter 'H' in the input field
    cy.get('input').type('H');

    // Click the 'Check' button
    cy.get('button').click();

    // Enter employee information
    cy.get('input[placeholder="Employee Name"]').type('John Doe');
    cy.get('input[placeholder="Employee ID"]').type('12345');
    cy.get('input[placeholder="Employee Role"]').type('Manager');

    // Click the 'Create' button
    cy.get('button').contains('Create').click();

    // Assert that the created employee values are displayed
    cy.contains('Employee Created:', { timeout: 10000 }).should('be.visible');
    cy.contains('Name: John Doe').should('be.visible');
    cy.contains('ID: 12345').should('be.visible');
    cy.contains('Role: Manager').should('be.visible');
  });
});