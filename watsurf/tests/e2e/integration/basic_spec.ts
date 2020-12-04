// https://docs.cypress.io/api/introduction/api.html

describe('Homepage', () => {
  it('Shows correct text', () => {
    cy.visit('/')

    cy.contains('h1', 'Hello there 👋, please fill in your information to continue')
  })
})
