describe('Testing for favorites view', () => {
  beforeEach(() => {
    cy.intercept("GET",'https://animechan.vercel.app/api/quotes/character?name=Archer',{ fixture: 'character-quotes.json'})
    cy.intercept("GET",'https://animation-contemplation-api.fly.dev/characters',{ fixture: 'characters.json'})
    cy.visit('http://localhost:3000/favorites')
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

  it('Can add favorites', () => {
    cy.visit('http://localhost:3000/character/Archer')
    cy.get('.add-to-favorites-button').eq(0).click()
    cy.get('.add-to-favorites-button').eq(1).click()
    cy.get('.add-to-favorites-button').eq(2).click()
    cy.get('.favorites-link').click()
    cy.get('.favorite-quotes-container').children().should('have.length', 3)
  })

  it('Quotes can be favorited and added to the favorites page then deleted from the favorites page', () => {
    cy.visit('http://localhost:3000/character/Archer')
    cy.get('.add-to-favorites-button').eq(0).click()
    cy.get('.add-to-favorites-button').eq(1).click()
    cy.get('.add-to-favorites-button').eq(2).click()
    cy.get('.favorites-link').click()
    cy.get('.favorite-quotes-container').children().should('have.length', 3)
    cy.get('.quote-container').eq(0).contains(`Brilliant people shine more brightly than ordinary ones. They never regret or agonize over what they've done`)
    cy.get('figcaption').eq(0).contains('Archer')
    cy.get('figcaption').eq(0).contains('Fate/stay night: Unlimited Blade Works TV')
    cy.get('figcaption').eq(0).contains('🗑')
    cy.get('.delete-from-favorites-button').eq(0).click()
    cy.get('.favorite-quotes-container').children().should('have.length', 2)
  })
})