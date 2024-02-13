const options = { env: { snapshotOnly: true } };

describe('Dynamic Loading', options, () => {

  it('shows a "Loading ..." state before showing the results', () => {
  
    cy.visit('/dynamic_loading/1');

    cy.get('#start > button').should('be.visible').click();
    //should('have.length', 2);
    cy.get('#loading').contains('Loading...').should('be.visible');
    cy.wait(1000);
    cy.get('#loading').contains('Loading...').should('not.visible');    

    cy.get('#finish').contains('Hello World!').should('be.visible');

  });

});
