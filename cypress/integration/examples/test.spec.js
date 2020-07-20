describe('form test', () => {
    it('test the form is working', () => {
        cy.visit('/Form')

            cy.get("#instructions")
              .type("well done")
            .should("have.value", "well done");
        
        cy.get('[name="extracheese"]').click().should("have.checked", true);
        
        cy.get('[name="pepperoni"]').click().should('have.checked', true);

        cy.get('button#sumbit')
            .should('not.be.disabled');
    })
})