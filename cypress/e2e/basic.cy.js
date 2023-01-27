describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/portfolio')
      .get('.scroll-down-containter')
      .click();
      
    cy.get(".title")
      .should("be.visible");
  })
})