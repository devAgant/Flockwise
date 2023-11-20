// Test case written by Arif Nizami
import React from 'react'
import MainMenu from '../../components/MainMenu'
import Provider from '../../components/Provider';
import '../../styles/globals.css';

describe('<MainMenu />', () => {
  it('Displays please sign in message when no user is signed in', () => {
    const nullSession = null;


    cy.mount(
    <Provider session={nullSession}>
      <MainMenu />
    </Provider>
    )
  })
})