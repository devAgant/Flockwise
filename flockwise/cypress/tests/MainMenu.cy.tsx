// Test case written by Arif Nizami
import React from 'react'
import MainMenu from '../../components/MainMenu'
import Provider from '../../components/Provider';
import '../../styles/globals.css';

describe('<MainMenu />', () => {
  it('Displays welcome message with instructions when user is signed in', () => {
    const mockSession = {
      user: {
        name: 'Test User',
        email: 'test@example.com'
      }
    };


    cy.mount(
    <Provider session={mockSession}>
      <MainMenu />
    </Provider>
    )
  })
})