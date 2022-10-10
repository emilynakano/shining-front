/* eslint-disable no-undef */
import { faker } from '@faker-js/faker';

describe('sign in user', () => {
  beforeEach(() => {
    cy.resetDatabase();
  });

  it('should be able to create a note', () => {
    cy.setUpToken();

    cy.visit('http://localhost:3000/notes');
  });
});
