describe('pizza test' , function () {
    it('test pizza form', () => {
        cy.visit('http://localhost:3000/components/Form')

        cy.get('#name')
        .type('Elizabeth')
        .should('have.value', 'Elizabeth')

        cy.get('[for="pizzaSize"] > select').select('Small')

        cy.get('[htmlform="pepperoni"] > input').check({ force: true }).should('be.checked')  

    })
})