// Testing starts here for application

describe('Form Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/Pizza')
    })

    // Declaring testing units/parameters
    const nameInput = () => cy.get('input[name="name"]').should('exist')
    const specialInstructionsInput = () => cy.get('input[name="siInput"]').should('exist')
    const pepperoniCheck = () => cy.get('input[name="Pepperoni"]').should('exist')
    const hamCheck = () => cy.get('input[name="Ham"]').should('exist')
    const pineappleCheck = () => cy.get('input[name="Pineapple"]').should('exist')
    const extracheeseCheck = () => cy.get('input[name="ExtraCheese"]').should('exist')
    const buttonSubmit = () => cy.get("button").should('exist')

    // Start exist testing
    it('Input Exists', () => {
        //Start Assertion(s)
        nameInput().should('exist')
        specialInstructionsInput().should('exist')
        pepperoniCheck().should('exist')
        hamCheck().should('exist')
        pineappleCheck().should('exist')
        extracheeseCheck().should('exist')
        buttonSubmit().should('exist')
    })

    // Start type testing
    it('Type in Name Field', () => {
        nameInput().type('Brandon')
        nameInput().should('have.value', 'Brandon')
        specialInstructionsInput().type('The house with a black gate, please ring doorbell and yell piiiiizzzzzzaaaa tiiiiimmmmmeeee')
        specialInstructionsInput().should('have.value', 'The house with a black gate, please ring doorbell and yell piiiiizzzzzzaaaa tiiiiimmmmmeeee')
    })

    //Start Checkbox testing
    it('Check Toppings Checkboxes', () => {
        pepperoniCheck().check()
        hamCheck().check()
        pineappleCheck().check()
        extracheeseCheck().check()
    })

    //Submit Button Test
    it('Submit Form', () => {
        buttonSubmit().click()
    })
})