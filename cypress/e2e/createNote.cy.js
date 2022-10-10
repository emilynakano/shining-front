/* eslint-disable no-undef */

describe('create a note', () => {
  beforeEach(() => {
    cy.resetDatabase();
  });

  it('should be able to create a note', () => {
    cy.setUpToken();

    cy.visit('http://localhost:3000/notes');

    cy.get("[data-cy='button-add-note']").click();

    cy.intercept('POST', '/notes').as('createNote');
    cy.get("[data-cy='button-submit']").click();
    cy.wait('@createNote');

    cy.get('.Toastify').should('contain', 'Note created successfully!');
    cy.contains('Your title here').should('be.visible');
  });
});
