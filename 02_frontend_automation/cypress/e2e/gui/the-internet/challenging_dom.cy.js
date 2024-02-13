const options = { env: { snapshotOnly: true } };

describe('Challenging DOM', options, () => {
  beforeEach(() => {
    cy.visit('/challenging_dom');
  });

  it('click on the #1 button - primary', () => {
    cy.xpath("//a[@class='button']").should('be.visible').click();
  });

  it('click on the #2 button - alert', () => {
    cy.xpath("//a[@class='button alert']").should('be.visible').click();
  });

  it('click on the #3 button - success', () => {
    cy.xpath("//a[@class='button success']").should('be.visible').click();
  });

  it('click on all edit button on the grid', () => {
    cy.xpath("//a[contains(text(),'edit')]").should('be.visible').click({ multiple: true });
  });

  it('click on all delete button on the grid', () => {
    cy.xpath("//a[contains(text(),'delete')]").should('be.visible').click({ multiple: true });
  });

});
