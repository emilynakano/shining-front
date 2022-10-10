/* eslint-disable no-undef */
import { faker } from '@faker-js/faker';

describe('sign up user', () => {
  beforeEach(() => {
    cy.resetDatabase();
  });

  it('should be able to create an account', () => {
    cy.visit('http://localhost:3000/sign-up');

    const user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    cy.get("[data-cy='input-name']").type(user.name);
    cy.get("[data-cy='input-email']").type(user.email);
    cy.get("[data-cy='input-password']").type(user.password);
    cy.get("[data-cy='input-confirm-password']").type(user.password);

    cy.intercept('POST', '/sign-up').as('signUp');
    cy.get("[data-cy='button-submit']").click();
    cy.wait('@signUp');

    cy.url().should('equal', 'http://localhost:3000/home');
  });
});
