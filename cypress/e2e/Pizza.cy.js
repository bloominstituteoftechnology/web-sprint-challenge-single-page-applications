describe("unit test", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    //getters
    const specialInput = () => cy.get('.special-wrapper > input')
    const originalRadio = () => cy.get('.sauce-wrapper > :nth-child(1) > input')
    const submitButton = () => cy.get('.submit')



    it('can type in special instructions', () => {
        specialInput()
            .should('have.value', "")
            .type("no garlic plz")
            .should('have.value', "no garlic")
    })

    it('can add multiple toppings', () => {
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
    })

    it('select size', () => {
        cy.get('select')
            .select('Large')
            .should('have.value', "large")
    })

    it('can submit an order', () => {
        cy.get('select')
            .select('Large')
            .should('have.value', "large")
        cy.get('[type="radio"]')
            .first()
            .check()
            .should('have.value', 'Original Recipe')
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
        submitButton()
            .click()
        cy.url()
            .should('eq', 'http://localhost:3000/confirmation')
        

    })
})