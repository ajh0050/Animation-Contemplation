describe('Home view renders all elements it should', () => {
  beforeEach(() => {
    cy.intercept('https://animation-contemplation-api.fly.dev/characters'), { fixture: 'characters.json'}
    cy.visit('http://localhost:3000')
  })
  
  it('The Header elements are present', () => {
    cy.get('h1').contains('Animation Contemplation')
    cy.get('h2').contains('A place to contemplate your favorite anime quotes')
  })
})