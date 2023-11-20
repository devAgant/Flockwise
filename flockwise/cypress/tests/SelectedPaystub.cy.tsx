// Written by Elijah Simmons

import SelectedPaystub from '../../app/profile/selected-paystub';
import '../../styles/globals.css';

describe('SelectedPaystub Component', () => {

  it('displays paystub details when selectedPaystub is valid', () => {
    // Mock paystubs data
    const paystubs = [
      {
        employeeID: 123,
        hoursWorked: 40,
        hourlyRate: 10,
        date: '2023-01-01',
        amount: 400,
      },
    ];

    const selectedPaystub = 0;

    // Convert the date string to a Date object
    const formattedPaystubs = paystubs.map(paystub => ({
      ...paystub,
      date: new Date(paystub.date),
    }));

    cy.mount(<SelectedPaystub paystubs={formattedPaystubs} selectedPaystub={selectedPaystub} />);

    cy.get('[data-cy=selected-paystub]')
      .should('contain.text', 'Paystub Details')
      .and('contain.text', 'Employee ID:')
      .and('contain.text', 'Date:')
      .and('contain.text', 'Hours Worked:')
      .and('contain.text', 'Hourly Rate:')
      .and('contain.text', 'Total Pay:');
  });
});