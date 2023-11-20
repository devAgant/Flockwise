import React from 'react'
import CreateTask from '../../app/task-manager/create-task'

describe('<CreateTask />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreateTask />)
  })
})