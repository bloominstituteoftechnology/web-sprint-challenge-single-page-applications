describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/form')
    })

    it('adds text to input', () => {
        cy.get('.inputs > :nth-child(4) > input').type('no cheese')
    })

    it('can select multiple toppings', () => {
        cy.get(':nth-child(1) > input').check()
        cy.get(':nth-child(2) > input').check()
        cy.get(':nth-child(3) > input').check()
        
    })

    it('can submit the form', () => {
        cy.get('.formContainer > a').click()
    })
})