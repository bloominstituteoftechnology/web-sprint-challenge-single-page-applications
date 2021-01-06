describe('Basic Test', () => {
  it('Renders App', () => {
    cy.visit('http://localhost:3000/pizza');
  });
});

describe('Types in name inputs', () => {
  it('Name Field is blank', () => {
    cy.get('input[name="name"]').should('have.value', '');
  });

  it('First name field is equal to Jesse', () => {
    cy.get('input[name="name"]').type('Jesse').should('have.value', 'Jesse');
  });
});

describe('Select mulitple toppings', () => {
  it('Pepperoni is not checked', () => {
    cy.get('input[id="pepperoni"]').should('not.be.checked');
  });

  it('Pepperoni is checked', () => {
    cy.get('input[id="pepperoni"]').click().should('be.checked');
  });

  it('Sausage is not checked', () => {
    cy.get('input[id="sausage"]').should('not.be.checked');
  });

  it('Saugage is checked', () => {
    cy.get('input[id="sausage"]').click().should('be.checked');
  });

  it('Pepperoni is not checked', () => {
    cy.get('input[id="pepperoni"]').click().should('not.be.checked');
  });
});

describe('Form is submittable', () => {
  it('Form submit disabled', () => {
    cy.get('input[type="submit"').should('is.disabled');
  });
  it('Form submit enabled', () => {
    cy.get('#originalRed').click();
    cy.get('#selectPizzaSize').select('Small');
    cy.get('input[type="submit"]').should('is.enabled');
  });
});
