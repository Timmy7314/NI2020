// https://docs.cypress.io/api/introduction/api.html

describe('Homepage', () => {
  it('Shows correct text', () => {
    cy.visit('/')

    cy.contains('h1', 'Hello there 👋, please fill in your information to continue')

    cy.get('form').should('be.visible')
    
    cy.contains('UsernameE-mailPasswordConfirm password Sign up Already registered?')

    cy.get('form').get('input')

    cy.get('button').should('be.visible')
    cy.get('form')
  .contains('form', 'Sign up')
  .submit()
     cy.get('button').click()
  })
})


describe('My form', () => {
  it('Can submit a valid form', () => {
    cy.visit('/')

    cy.log('filling out pseudonym') // if you really need this
    cy.get('#username').type('John714')

    cy.log('filling out e-mail') // if you really need this
    cy.get('#email').type('john.doe@company.com')

    cy.log('filling out password') // if you really need this
    cy.get('#password').type('********')

    cy.log('filling out confirmed password') // if you really need this
    cy.get('#password-confirm').type('********')

    cy.log('submitting form') // if you really need this
    cy.get('form').submit()
  })
})
