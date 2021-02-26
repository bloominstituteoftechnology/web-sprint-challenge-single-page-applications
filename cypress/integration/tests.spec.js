describe ('Application tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const pizzaRedirect = () => cy.get("button[id=redirect]")
    const submitBtn = () => cy.get("button[id=submit]")
    const nameInput = () => cy.get('input[name=name]')
    const sizeInput = () => cy.get('select[name=size]')
    const pepperoniInput = () => cy.get('input[name=pepperoni')
    const olivesInput = () => cy.get('input[name=olives')
    const onionsInput = () => cy.get('input[name=onions')
    const peppersInput = () => cy.get('input[name=peppers')
    const instructionsInput = () => cy.get('input[name=instructions]')

    it('Elements showing on page', () => {
        pizzaRedirect().should('exist')
        pizzaRedirect().click()
        nameInput().should('exist')
        submitBtn().should('exist')
        sizeInput().should('exist')
        nameInput().should('exist')
        pepperoniInput().should('exist')
        olivesInput().should('exist')
        onionsInput().should('exist')
        peppersInput().should('exist')
        instructionsInput().should('exist')
    })

    it('Functionality of inputs', () => {
        pizzaRedirect().click()
        nameInput()
            .type('Stav Corcos')
            .should('have.value', 'Stav Corcos') 

        sizeInput()
            .select('small')
            .should('have.value', 'small')

        olivesInput().click()
            .should('have.value', 'on')

        peppersInput().click()
            .should('have.value', 'on')

        instructionsInput()
            .type("I would like it cut in squares please!")
            .should('have.value', "I would like it cut in squares please!")

        submitBtn().click()
    })
})