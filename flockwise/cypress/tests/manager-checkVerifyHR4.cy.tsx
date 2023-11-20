// Written by Sai Kotha

import React from 'react';
import VerifyHR from '../../app/hr-portal/manager-check';
import '../../styles/globals.css';

describe('<VerifyHR />', () => {
  it('User cannot create two employees with the same ID', () => {
    cy.mount(<VerifyHR />);
    cy.get('input').type('H');
    cy.get('button').click();

  
    cy.get('input[placeholder="Employee Name"]').type('John Doe');
    cy.get('input[placeholder="Employee ID"]').type('12345');
    cy.get('input[placeholder="Employee Role"]').type('Manager');
    cy.get('button').contains('Create').click();

    // Make sure the values exist
    cy.contains('Employee Created:', { timeout: 10000 }).should('be.visible');
    cy.contains('Name: John Doe').should('be.visible');
    cy.contains('ID: 12345').should('be.visible');
    cy.contains('Role: Manager').should('be.visible');

    // Clear input fields 
    cy.get('input[placeholder="Employee Name"]').clear();
    cy.get('input[placeholder="Employee ID"]').clear();
    cy.get('input[placeholder="Employee Role"]').clear();

    // Enter new employee information
    cy.get('input[placeholder="Employee Name"]').type('Jane Doe');
    cy.get('input[placeholder="Employee ID"]').type('12345');
    cy.get('input[placeholder="Employee Role"]').type('Supervisor');
    cy.get('button').contains('Create').click();

    // An alert shows up saying you had the same employee code before
  });
});
