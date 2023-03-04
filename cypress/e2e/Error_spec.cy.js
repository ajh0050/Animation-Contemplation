describe('Error page renders when nonexistent urls are attempted', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/345342')
    cy.intercept("GET",'https://animation-contemplation-api.fly.dev/characters',{ fixture: 'characters.json'})
  })
  it('The Header elements are present', () => {
    cy.get('.app-title').contains('Animation Contemplation')
    cy.get('.app-subtitle').contains('A place to contemplate your favorite anime quotes')
    cy.get('.home-link').contains('Home')
    cy.get('.favorites-link').contains('Favorites')
    cy.get('.home-link').should('have.attr', 'href', '/')
    cy.get('.favorites-link').should('have.attr', 'href', '/favorites')
  })

  it('The favorites button redirects to the favorites page', () => {
    cy.get('.favorites-link').click()
    cy.url().should('include', '/favorites')
  })

  it('The home button redirects to the home page', () => {
    cy.get('.home-link').click()
    cy.url().should('include', '/')
  })

  it('there should be an error message', () => {
    cy.get('.error-message').contains('Page Not Found')
  })
})