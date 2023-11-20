// Written by Viraaj Veeramachaneni

import React from 'react';
import AssignBenefit from '../../app/benefits-manager/AssignBenefit';

describe('<AssignBenefit /> Dropdown Interaction Tests', () => {
  it('should allow selection of an employee and a benefit', () => {
    // Mount the AssignBenefit component
    cy.mount(<AssignBenefit />);

    // Select an employee from the dropdown and verify the selection
    cy.get('select').first().select('Viraaj').should('have.value', 'employee1');
    cy.get('select').first().select('Evan').should('have.value', 'employee2');
    // Add checks for other employees as needed

    // Select a benefit from the dropdown and verify the selection
    cy.get('select').last().select('Medical').should('have.value', 'task1');
    cy.get('select').last().select('Dental').should('have.value', 'task2');
  });
});
