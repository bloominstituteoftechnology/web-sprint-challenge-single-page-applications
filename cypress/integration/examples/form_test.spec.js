
describe('Pizza App', () => {

    beforeEach(() => cy.visit('http://localhost:3000'))
    describe('typing into box, selecting toppings, and submit', () => {
        it('can type and see if the correct name', () => {
            cy.get('input[name=name]')
             .type('mickey mouse')
             .should('have.value', 'mickey mouse')          
            cy.get('input[name=textarea]')
            .click()
            cy.get('#submit-btn')
            .click()
        })
    })
    describe('Filling out inputs and cancelling', () => {
        it('submit button is disabled', () => {
            cy.get('#submit-btn').should('be.disabled')
        })
    })
})