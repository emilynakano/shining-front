/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import { faker } from '@faker-js/faker';

Cypress.Commands.add('resetDatabase', () => {
  cy.request('POST', 'http://localhost:5000/E2E/reset');
});

Cypress.Commands.add('setUpToken', () => {
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

  cy.request('POST', 'http://localhost:5000/sign-in', {
    email: user.email,
    password: user.password,
  }).then((res) => {
    const { accessToken, username } = res.body;
    localStorage.setItem('@shining:token', accessToken);
    localStorage.setItem('@shining:username', username);
  });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
