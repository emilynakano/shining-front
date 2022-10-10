/* eslint-disable no-undef */
import { faker } from '@faker-js/faker';

describe('sign in user', () => {
  beforeEach(() => {
    cy.resetDatabase();
  });

  it('should be able to create an account', () => {
    cy.visit('http://localhost:3000/sign-in');

    const user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    cy.request('POST', 'http://localhost:5000/sign-up', {
      name: user.name,
      email: user.email,
      password: user.password,
      confirmPassword: user.password,
    });

    cy.get("[data-cy='input-email']").type(user.email);
    cy.get("[data-cy='input-password']").type(user.password);

    cy.intercept('POST', '/sign-in').as('signIn');
    cy.get("[data-cy='button-submit']").click();
    cy.wait('@signIn');

    cy.url().should('equal', 'http://localhost:3000/home');
  });
});
