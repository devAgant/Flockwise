//Written by Elijah Simmons

import EmployeeInfo from '../../app/profile/employee-info';
import Provider from '../../components/Provider';
import '../../styles/globals.css';

describe('EmployeeInfo Component', () => {
  it('renders employee information correctly', () => {
    // Define a mock session data
    const mockSession = {
      user: {
        name: 'John Doe',
        image: '/profile-image.jpg',
        email: 'john.doe@example.com',
      },
    };

    cy.mount(
    <Provider session={mockSession}>
      <EmployeeInfo />
    </Provider>
    );

    cy.get('h1').should('have.text', 'John Doe');
    cy.get('img').should('exist');
    cy.contains('Employee ID: ').should('exist');
    cy.contains(`Email: ${mockSession.user.email}`).should('exist');
    cy.contains('Salary: $').should('exist');
  });
});
