// In your Cypress test file
import Provider from './Provider';
import Nav from './Nav';
import '../styles/globals.css';

describe('<Nav />', () => {
  it('renders with session', () => {
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
