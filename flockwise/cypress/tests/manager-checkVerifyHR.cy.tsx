// Written by Sai Kotha

import React from 'react'
import VerifyHR from '../../app/hr-portal/manager-check'
import '../../styles/globals.css';

describe('<VerifyHR />', () => {
  it('User does not have access to the page for input other than H', () => {
    // Mount the VerifyHR component
    cy.mount(<VerifyHR />);

    // Enter a value other than 'H' in the input field
    cy.get('input').type('J');

    // Click the 'Check' button
    cy.get('button').click();
  })
})
