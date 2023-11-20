// Written by Viraaj Veeramachaneni

import React from 'react';
import ViewBenefits from '../../app/benefits-manager/ViewBenefits';
import '../../styles/globals.css';

describe('ViewBenefits Component Tests', () => {
  it('displays a list of benefits and shows details when a benefit is clicked', () => {
    cy.mount(<ViewBenefits />);

    // Check if the benefits list is rendered
    cy.get('div').contains('Medical').should('be.visible');
    cy.get('div').contains('Dental').should('be.visible');
    cy.get('div').contains('Visual').should('be.visible');
    cy.get('div').contains('Disability').should('be.visible');

    // Simulate clicking on a benefit
    cy.get('div').contains('Medical').click();

    // Check if the details for the 'Medical' benefit are displayed
    cy.get('div').contains('Name: Comprehensive Health Plan').should('be.visible');
    cy.get('div').contains('Plan Type: Preferred Provider Organization').should('be.visible');
    cy.get('div').contains('Employee Amount: $50/month').should('be.visible');
    cy.get('div').contains('Co-pay: $20 (primary care), $40 (specialists)').should('be.visible');
    cy.get('div').contains('Coverage: General medical, emergency, mental health, preventive care').should('be.visible');
  });
});
