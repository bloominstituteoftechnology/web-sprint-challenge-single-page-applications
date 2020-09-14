describe('Form test', () => {
    it('tests that the form is working', () => {
        cy.visit('http://localhost:3001/pizza')
        cy.get('button')
        .should('be.disabled')
        cy.get('[for="name"] > input')
        .type('Nathan Griffith')
        .should('have.value', 'Nathan Griffith')
        cy.get('button')
        .should('not.be.disabled')

        cy.get('#pep')
        .click()
        .should('be.checked')
        // cy.get('[for="name"] > input')
        // .clear()
        // .should('have.value', '')

        cy.get('#sausage')
        .click()
        .should('be.checked')

        cy.get('#pickles')
        .click()
        .should('be.checked')

        cy.get('#onion')
        .click()
        .should('be.checked')




        cy.get('#Sizes')
        .select('Large')
        .should('have.value', 'Large')

        cy.get('#instructions')
        .type('extra red sauce')
        .should('have.value', 'extra red sauce')

        cy.get('button')
        .click()
        
     
  
    })
    it('error messages are displayed properley', () => {
        cy.get('[for="name"] > input')
        .type('nathan griffith')
        .clear()
        cy.get('.error')
       
       
    })
  })