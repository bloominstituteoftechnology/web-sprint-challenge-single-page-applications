describe('pizza test' , function () {
    it('test pizza form', () => {
        cy.visit('http://localhost:3000/components/Form')

        cy.get('#name')
        .type('Brianna')
        .should('have.value', 'Brianna')

        cy.get('select').select('Small')

        cy.get('#pepperoni').check({force:true}).should('be.checked')
        cy.get('#onions').check({force:true}).should('be.checked')

    })
})
