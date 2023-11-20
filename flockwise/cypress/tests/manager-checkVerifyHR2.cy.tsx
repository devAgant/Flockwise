// Written by Sai Kotha

import React from 'react';
import VerifyHR from '../../app/hr-portal/manager-check';
import '../../styles/globals.css';

describe('<VerifyHR />', () => {
  it('User has access to the page for input H', () => {
    cy.mount(<VerifyHR />);
    cy.get('input').type('H');
    cy.get('button').click();

    // Checking to make sure the page shows up for them
    cy.get('input[placeholder="Employee Name"]').should('be.visible');
    cy.get('input[placeholder="Employee ID"]').should('be.visible');
    cy.get('input[placeholder="Employee Role"]').should('be.visible');
  });
});