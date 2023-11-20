//Written by Elijah Simmons

import ViewPayStubs from '../../app/profile/view-paystubs';
import Provider from '../../components/Provider';
import '../../styles/globals.css';

describe('ViewPayStubs Component', () => {
  it('renders paystubs and allows exporting', () => {

    // Define a mock session data with no paystubs
    const mockSession = {
      user: {
        employee: {
          paystubs: [
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
     cy.get('.no-paystubs').should('include.text', 'No paystubs available');

  });

});
