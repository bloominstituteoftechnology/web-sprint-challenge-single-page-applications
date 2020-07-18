describe('can add text to box', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url()
        .should('include', 'localhost')

    })

    it('can type in name box', () => {
        cy.get('input[name="first_name"]')
            .type('Noah')
            .should('have.value', 'Noah')
    })

    it('can type in instructions box', () => {
        cy.get('input[name="instructions"]')
            .type('ring doorbell')
            .should('have.value', "ring doorbell")
    })
})

describe('can add multiple toppings', () => {
    
    it('can click multiple buttons', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('input[name="pepperoni"]')
            .click()
        cy.get('input[name="chicken"]')
            .click()
        
    })
})

describe('it can submit an order', () => {
    it('can submit a user', () => {
        cy.visit('http://localhost:3000/pizza') 
        cy.get('input[name="first_name"]')
            .type('Noah')
        cy.get('select[name="size"]')
            .select('Medium')
        cy.get('input[name="pepperoni"]')
            .click() 
        cy.get('input[name="tomatoes"]')
            .click()
        cy.get('input[name="instructions"]')
            .type('put smiley')

        cy.get('button.submit').click()
            
    })
})