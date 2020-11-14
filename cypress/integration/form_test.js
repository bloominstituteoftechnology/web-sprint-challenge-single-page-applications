describe('Testing Form Inputs', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    });
    it('Lets test some inputs...', () => {
        cy.get('[data-cy=name]')
        .type('Cameron Mirza')
        .should('have.value', 'Cameron Mirza');

        cy.get('[data-cy=size')
        .select('Extra Large')
        .should('have.value', 'Extra Large')

        cy.get('[data-cy=pepperoni]')
        .check()
        .should('be.checked')

        cy.get('[data-cy=greenPepper]')
        .check()
        .should('be.checked')

        cy.get('[data-cy=glutenFree]')
        .check()
        .should('be.checked')

        cy.get('[data-cy=order]')
        .click()
    })
})

