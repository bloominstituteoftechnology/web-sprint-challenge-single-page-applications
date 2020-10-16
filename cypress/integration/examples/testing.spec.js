describe('Testing App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })

    const textInput = () => cy.get('input[type=text]')
    const multipleToppings = () => cy.get('input[type=checkbox]')
    const submitBtn = () => cy.get('#submitBtn')

    it('Typing in textInput', () => {
        textInput()
            .should('have.value', '')
            .type('yayasyas')
            .should('have.value', 'yayasyas')
    })

    it('multipleToppings', () => {
        multipleToppings()
            cy.get('input[name=peperoni]').click().should(be.checked)
            cy.get('input[name=tomatoes]').click().should(be.checked)
            cy.get('input[name=xtraCheese]').click().should(be.checked)
            cy.get('input[name=artichoke]').click().should(be.checked)
    })

    describe('Testing Submit Button', () => {
        cy.get('input[name=name]')
            .should('have.value', '')
            .type('yayasyas')
            .should('have.value', 'yayasyas')
        cy.get('input[name=instruct]')
            .should('have.value', '')
            .type('yayasyas')
            .should('have.value', 'yayasyas')
        cy.get('select[name=size]')
            .select('1')
        cy.get('#submitBtn')
            .should('be.enabled')
            .click()
            .should('be.disabled')

    })
})
