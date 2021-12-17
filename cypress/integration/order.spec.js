

// Implement the following tests in Cypress:
// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form




describe('Form App', () => {


    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

it('text test', () => {
    cy.get('textarea[name=instructions]')
    .should('have.value', '')
    .type('test that you can add text to the box')
    .should('have.value', 'test that you can add text to the box')
})

it('select test', () => {
    cy.get('input[id=toppings]').check()
})

it('submit test', () => {
    cy.get('button[name=order-button]').click()
})

})