// https://on.cypress.io/api

describe('portfolio', () => {
  it('shows the name and the project board', () => {
    cy.visit('/')
    cy.contains('h1', 'Yousef Abdo')
    cy.get('.board .row').should('have.length', 6)
  })

  it('switches to Arabic', () => {
    cy.visit('/')
    cy.get('button.lang').click()
    cy.get('html').should('have.attr', 'dir', 'rtl')
    cy.contains('h1', 'يوسف عبده')
  })
})
