describe('Test', () => {

    it('Get the page', () => {
      cy.visit('http://localhost:3001/pizza')
    })

    it('test that you can add text to the box', () => {
       
        cy.get('textarea')
          .type('Have Fun!')
          .should('have.value', 'Have Fun!')
      })

      it('test that you can select multiple toppings', () => {
       
        cy.get('#1')
          
          .check().should('be.checked')

          cy.get('#4')
          
          .check().should('be.checked')
          cy.get('#12')
          
          .check().should('be.checked')
      })
      it('test that you can submit the form', () => {
        cy.get('textarea') .type('Have Fun!')
        cy.get('[name="size"]') .select('Small')
        cy.get('[type="radio"]').check("Garlic Ranch")
        cy.get('[name="name"]') .type('Steve')
        cy.get('button').click() 
      })
})

    
   