// Testing name part
describe('Testing my form input', () => {
  it('Assert name text can be entered to name box', () => {
    cy.visit('http://localhost:3000/Pizza');
    cy.get('[data-cy="name"]')
      .type('Robel Test')
      .should('have.value', 'Robel Test');
  });

  // testing the size can be selected

  it('Assert that a size can be selected', () => {
    cy.get('[data-cy="size"]').select('medium');
  });

  // testing we can select multiple topings

  it('Assert that multiple topping can be selected', () => {
    cy.get('[data-cy="pepperoni"]').click().should('be.checked');

    cy.get('[data-cy="sausage"]').click().should('be.checked');

    cy.get('[data-cy="ham"]').click().should('be.checked');

    cy.get('[data-cy="olives"]').click().should('be.checked');

    cy.get('[data-cy="bellpepper"]').click().should('be.checked');

    cy.get('[data-cy="pineapple"]').click().should('be.checked');

    cy.get('[data-cy="anchovies"]').click().should('be.checked');
  });

  // testing we can add special inst
  it('Check special inst', () => {
    cy.get('[data-cy="specInstructions"]')
      .type('Make it extra hot')
      .should('have.value', 'Make it extra hot');
  });

  // testing we can submit
  it('Assert that the form can be submited', () => {
    cy.get('[data-cy="submit"]').click();
  });
});
