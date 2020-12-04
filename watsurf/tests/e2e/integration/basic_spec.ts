// https://docs.cypress.io/api/introduction/api.html

describe('Homepage', () => {
  it('Shows correct text', () => {
    cy.visit('/')

    cy.contains('h1', 'Hello Vue 3 + Vite + Tailwind CSS')

    cy.get('button').should('be.visible')

    cy.contains('button', 'count')
    cy.contains(0)

    cy.get('button').click()
    cy.contains(1)

    cy.contains('p', 'Edit components/HelloWorld.vue to test hot module replacement')

    cy.get('button').click()
    cy.contains(2)
  })
})
