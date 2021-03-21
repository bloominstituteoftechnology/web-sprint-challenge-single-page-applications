describe('should visit lambda.pizza', () => {
  it('visits the website', () => {
    cy.visit('localhost:3000');
  });
});

describe('verifies name and phone inputs', () => {
  it('should type into the name and phone text inputs', () => {
    cy.get('[href="/pizza"] > b').click()
    cy.get('#name').type('john smith');
    cy.get('#phone').type('952.855.4454');
  });
});

describe('selects toppings', () => {
  it('verifies that you can select multiple toppings', () => {
    cy.get('#pepperoni').click();
    cy.get('#mushroom').click();
    cy.get('#sausage').click();
    cy.get('#onion').click();
  });
});

describe('verifies special instructions works', () => {
  it('tests input', () => {
  cy.get('#special').type('these are super important special instructions')
  });
});

describe('clicks the submit', () => {
  it('clicks submit', () => {
    cy.get('#submit').click()
  });
});
