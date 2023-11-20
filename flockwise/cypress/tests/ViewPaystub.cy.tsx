//Written by Elijah Simmons

import ViewPayStubs from '../../app/profile/view-paystubs';
import Provider from '../../components/Provider';
import '../../styles/globals.css';

describe('ViewPayStubs Component', () => {
  it('renders paystubs and allows exporting', () => {

    // Define a mock session data
    const mockSession = {
      user: {
        employee: {
          paystubs: [
            {
              date: '2023-12-31',
              employeeID: '123456',
              hoursWorked: 40,
              hourlyRate: 20,
              amount: 800,
            },
          ],
        },
      },
    };

    // Mount the component with the mock session data
    cy.mount(
      <Provider session={mockSession}>
        <ViewPayStubs />
      </Provider>);

     // Assert that the selected paystub is displayed with the expected text
     cy.get('.paystub-item').should('include.text', 'December 2023 - $800');

  });

});
