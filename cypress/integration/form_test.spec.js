describe('Making Pizza Form', () => {
    it('Name Input', () => {
        cy.visit("http://localhost:3000/pizza")
        cy.get('form input:first').type('some text')
        cy.get('form input:first').should('have.value', 'some text')
    })
    it('Multiple Toppings Check', () => {
        cy.visit("http://localhost:3000/pizza")
        cy.get('form input:nth-of-type(4)').check()
        cy.get('form input:nth-of-type(4)').should('be.checked')
        cy.get('form input:nth-of-type(5)').check()
        cy.get('form input:nth-of-type(5)').should('be.checked')
        cy.get('form input:nth-of-type(6)').check()
        cy.get('form input:nth-of-type(6)').should('be.checked')
        cy.get('form input:nth-of-type(7)').check()
        cy.get('form input:nth-of-type(7)').should('be.checked')
    })
    it('Ability To Submit Form', () => {
        cy.visit("http://localhost:3000/pizza")
        cy.get('form input:first').type('some text')
        cy.contains('Submit').click()
        cy.url().should('include', "/confirmation")
    })
})