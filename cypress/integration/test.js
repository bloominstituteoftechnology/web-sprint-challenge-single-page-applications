describe('test for your sanity', function() {
    it('form sanity check', () => {


        cy.visit('http://localhost:3000/components/Form')

        // cy.get('#pineapple').check({force:true}).should('be.checked')

        // cy.get('#sausage').check({force:true}).should('be.checked')

        cy.get('#name')
        .type('Skeletor')
        .should('have.value', 'Skeletor')

        cy.get('select').select('Large')

      

    })
})
