/*global cy*/
/// <reference types="Cypress" />

describe('User-onboarding app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  const nameInput = () => cy.get('[name="name"]');
  const specialInput = () => cy.get('[name="special"]');

  const spinachCheckBox = () => cy.get('[name="spinach"]');
  const olivesCheckBox = () => cy.get('[name="olives"]');
  const peppersCheckBox = () => cy.get('[name="peppers"]');
  const shroomsCheckBox = () => cy.get('[name="shrooms"]');

  const orderButt = () => cy.get('.order-pizza');
  const confirmButt = () => cy.get('.confirm-butt');

  const dropdown = () => cy.get('.dropdown');

  it('tester', () => {
    expect(1 + 1).to.equal(2);
  });
  it('Form TESTING WOOOO', () => {
    orderButt().click();
    nameInput().type('test').should('have.value', 'test');
    spinachCheckBox().should('not.be.checked');
    olivesCheckBox().should('not.be.checked');
    peppersCheckBox().should('not.be.checked');
    shroomsCheckBox().should('not.be.checked');
    shroomsCheckBox().check();
    spinachCheckBox().check();
    peppersCheckBox().check();
    olivesCheckBox().check();
    specialInput().type('test');
    specialInput().should('have.value', 'test');
    confirmButt().should('be.disabled');
    dropdown().select('wumbo');
    confirmButt().click();
    nameInput().should('have.value', '');
    spinachCheckBox().should('not.be.checked');
    olivesCheckBox().should('not.be.checked');
    peppersCheckBox().should('not.be.checked');
    shroomsCheckBox().should('not.be.checked');
  });
});
