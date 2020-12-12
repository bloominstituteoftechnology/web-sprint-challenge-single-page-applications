describe('can add text to the boxes, select multiple toppings, and sumbit form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    it('selects and adds text to each box in the form', () => {
        cy.get('#name')
        .type('tobby macguire').should('have.value', 'tobby macguire')
        cy.get('#instructions')
        .type('Goooooo!').should('have.value', 'Goooooo!')
    })
    it('selects multiple toppings', () => {
        cy.get('#pepperoni').check().should('be.checked')
        cy.get('#ham').check().should('be.checked')
        cy.get('#anchovies').check().should('be.checked')
        cy.get('#pepperoni').should('be.checked')
        cy.get('#ham').should('be.checked')
        cy.get('#anchovies').should('be.checked')
    })
    it('returns the form', () => {
        cy.get('#name')
        .type('tobby macguire')
        cy.get('#orderButton').click()
        cy.get('pre').should('be.visible')
    })

})