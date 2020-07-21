describe('Testing the build a pizza form', () =>{
    it('Form functions properly',() =>{
        cy.visit('/buildapizza');

        cy.get('[data-cy="name"]')
        .type('bob')
        .should('have.value', 'bob')

        cy.get('[data-cy="submit-button"]').should('be.disabled');

        cy.get('[data-cy="phone"]')
        .type('0123456789').should('have.value', '0123456789')

        cy.get('[data-cy="submit-button"]').should('not.disabled');

        cy.get('[data-cy="instructions"]')
        .type('Hello').should('have.value', 'Hello')

        cy.get('[data-cy="pizzaSize"]')
        .select('Medium').should('have.value', 'Medium')

        cy.get('[data-cy="Pepperoni"]').click().should('be.checked');
        cy.get('[data-cy="Sausage"]').click().should('be.checked');
        cy.get('[data-cy="Bacon"]').click().should('be.checked');
        cy.get('[data-cy="Chicken"]').click().should('be.checked');
        cy.get('[data-cy="Olives"]').click().should('be.checked');
        cy.get('[data-cy="Spinach"]').click().should('be.checked');
        cy.get('[data-cy="Mushroom"]').click().should('be.checked');
        cy.get('[data-cy="Zucchini"]').click().should('be.checked');

        
    })
})