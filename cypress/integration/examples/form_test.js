describe('Form Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3003/Pizza')
    })

    // Declaring testing units/parameters
    const nameInput = () => cy.get('input[name="name"]').should('exist')
    const specialInstructionsInput = () => cy.get('input[name="specialInfo"]').should('exist')
    const hamCheck = () => cy.get('input[name="ham"]').should('exist')
    const pineappleCheck = () => cy.get('input[name="pineapple"]').should('exist')
    const onionCheck = () => cy.get('input[name="onion"]').should('exist')
    const buttonSubmit = () => cy.get("button").should('exist')

    it('Input Exists', () => {
        nameInput().should('exist')
        specialInstructionsInput().should('exist')
        hamCheck().should('exist')
        pineappleCheck().should('exist')
        onionCheck().should('exist')
        buttonSubmit().should('exist')
    })

    it('Type in Name Field', () => {
        nameInput().type('kek')
        nameInput().should('have.value', 'kek')
        specialInstructionsInput().type('test')
        specialInstructionsInput().should('have.value', 'test')
    })


    it('Check Toppings Checkboxes', () => {
        hamCheck().check()
        pineappleCheck().check()
        onionCheck().check()
	})
	
    it('Submit Form', () => {
        buttonSubmit().click()
    })
})