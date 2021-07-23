describe('Validate form', function (){
    Cypress.config('viewportWidth', 1200)
    Cypress.config('viewportHeight', 600)

    it('Fillout form and submit', function(){
        cy.visit('http://localhost:3000')

        cy.get('#order-pizza')
        .click()

        cy.get('#name-input')
        .type('Johanna Rodriguez')
        .should('have.value','Johanna Rodriguez')

        cy.get('#size-dropdown')
        .select('Large')

        cy.get('#special-text')
        .type('Well done please.')
        .should('have.value','Well done please.')
        
        cy.get('#pepperoniId')
        .check()
        .should('be.checked')

        cy.get('#onionId')
        .check()
        .should('be.checked')
        
        cy.intercept('POST', '*' ).as('post')
        cy.get('#order-button').click()
        cy.wait('@post').then((interception) => {
            assert.equal(interception.response.statusCode,201)
            assert.isNotNull(interception.response.body, '1st API call has data')
          })
    })
   
    it('Check if input is empty', function(){
        cy.visit('http://localhost:3000/pizza')

        cy.get('#name-input')
        .type('J')
       
        cy.get('#error-message')
        .then((element) => {
            expect(element.text()).to.equal('name must be at least 2 characters');
          });       
    })

})