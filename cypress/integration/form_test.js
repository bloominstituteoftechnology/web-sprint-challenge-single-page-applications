describe('pizza test' , function () {
    it('test pizza form', () => {
        cy.visit('http://localhost:3001/components/Form')

        cy.get('#name')
        .type('Alice')
        .should('have.value', 'Alice')

        cy.get('select').select('12 inch')

        cy.get(':nth-child(4) > label > input').check({force:false}).should('be.checked')

    })
}) 