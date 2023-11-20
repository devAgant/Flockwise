// Written by Viraaj Veeramachaneni

import React from 'react';
import OnboardingPage from '../../app/onboarding/page';

describe('<OnboardingPage /> to <CompanyPolicies /> Transition Test', () => {
  it('navigates to CompanyPolicies page on clicking "Click to continue" button', () => {
    // Mount the OnboardingPage component
    cy.mount(<OnboardingPage />);

    // Click the 'Click to continue' button under 'Virtual Orientation and Company Policies'
    cy.contains('Click to continue').click();

    // Verify if the navigation to CompanyPolicies page has occurred
    cy.contains('Virtual Orientation and Company Policies').should('be.visible');
    cy.contains('Reason for Starting Company').should('be.visible');
    cy.contains('Companies Mission').should('be.visible');
    // ... add checks for other policy titles

    // Optionally, check for the 'Back' button's presence as an indication of being on the CompanyPolicies page
    cy.contains('Back').should('be.visible');
  });
});
