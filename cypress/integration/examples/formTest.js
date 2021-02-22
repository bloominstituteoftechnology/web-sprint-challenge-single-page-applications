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
    const mushroomsCheck = () => cy.get('input[name="Mushrooms"]').should('exist')
    const baconCheck = () => cy.get('input[name="Bacon"]').should('exist')
    const peppersCheck = () => cy.get('input[name="Peppers"]').should('exist')
    const onionsCheck = () => cy.get('input[name="Onions"]').should('exist')
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
        mushroomsCheck().should('exist')
        baconCheck().should('exist')
        peppersCheck().should('exist')
        onionsCheck().should('exist')
        extracheeseCheck().should('exist')
        buttonSubmit().should('exist')
    })

    // Start type testing
    it('Type in Name Field', () => {
        nameInput().type('Loleatha')
        nameInput().should('have.value', 'Loleatha')
        specialInstructionsInput().type('Can you make sure they add the extra cheese please?')
        specialInstructionsInput().should('have.value', 'Can you make sure they add the extra cheese please?')
    })

    //Start Checkbox testing
    it('Check Toppings Checkboxes', () => {
        pepperoniCheck().check()
        hamCheck().check()
        pineappleCheck().check()
        mushroomsCheck().check()
        baconCheck().check()
        peppersCheck().check()
        onionsCheck().check()
        extracheeseCheck().check()
    })

    //Submit Button Test
    it('Submit Form', () => {
        buttonSubmit().click()
    })
})