describe('Home view renders all elements it should', () => {
  beforeEach(() => {
    cy.intercept("GET",'https://animation-contemplation-api.fly.dev/characters',{ fixture: 'characters.json'})
    cy.visit('http://localhost:3000')
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

  it('The search bar is present', () => {
    cy.get('.search-title').contains('Search any anime character to get quotes from them!')
    cy.get('.search-bar').should('have.attr', 'placeholder', 'Search for a character')
  })

  it('The search bar is functional', () => {
    cy.get('.search-bar').type('aa')
    cy.get('.characters-button-container').children().should('have.length', 5)
    cy.get('.search-bar').clear()
    cy.get('.search-bar').type('aan')
    cy.get('.characters-button-container').children().should('have.length', 1)
    cy.get('.character-button').contains('Aang').click()
    cy.url().should('include', '/character/Aang')
  })
})