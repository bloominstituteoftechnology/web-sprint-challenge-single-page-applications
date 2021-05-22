describe('Can add text to the box', () => {
    it('can receive text input', () => {
        cy.visit("localhost:3000/pizza");
        cy.get("#name-input")
        .type("Name").should("have.value", "Name");
    })
})

describe('Can select multiple toppings', () => {
    it('can check toppings', () => {
        cy.visit("localhost:3000/pizza");
        cy.get('[type="checkbox"]')
        .check({ force: true })
        .should('be.checked')
    })
})