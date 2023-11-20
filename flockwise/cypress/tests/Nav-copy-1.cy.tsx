// Test case written by Arif Nizami

import Provider from '../../components/Provider';
import Nav from '../../components/Nav';
import '../../styles/globals.css';

describe('<Nav />', () => {
  it('Renders without navigation bar when no user is signed in', () => {
    // Set up a mock session object
    const nullSession = null;
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
      <Provider session={nullSession}>
        <Nav />
      </Provider>
    );

    // Perform your test assertions...
  });
});
