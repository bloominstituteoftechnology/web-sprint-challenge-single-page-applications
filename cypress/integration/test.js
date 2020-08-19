describe('pizza test' , function () {
    it('test pizza form', () => {
        cy.visit('http://localhost:3000/components/Form')

        cy.get('#name')
        .type('Brianna')
        .should('have.value', 'Brianna')

        cy.get('select').select('Small')
        

        cy.get(':nth-child(4) > label > input').check({force:false}).should('be.checked')

    })
})
