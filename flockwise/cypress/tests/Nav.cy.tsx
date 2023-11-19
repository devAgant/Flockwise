// Arif Nizami Test Case: Check if Nav var is correctly displayed to a signed in user
import Provider from '../../components/Provider';
import Nav from '../../components/Nav';
import '../../styles/globals.css';

describe('<Nav />', () => {
  it('Renders with a navigation bar when a user is signed in', () => {
    // Set up a mock session object
    const mockSession = {
      user: {
        name: 'Test User',
        email: 'test@example.com'
      }
    };
    const mockRouter = {
      push: () => {},
      replace: () => {},
      pathname: '/',
      route: '/',
      asPath: '/',
      query: {},
    };
    // Wrap the Nav component with your Provider component
    cy.mount(
      <Provider session={mockSession}>
        <Nav />
      </Provider>
    );

    // Perform your test assertions...
  });
});
