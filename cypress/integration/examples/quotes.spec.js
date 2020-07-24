// writing tests here 
describe('Testing inputs and submit button', () => {
    it('can navigate to site', () => {
        cy.visit('http://localhost:3004')
        cy.url().should('include', 'localhost')
    })
    it('Submit button is disabled', () => {
        cy.get('.orderBtn').should('be.disabled')
    })
    it('Can type a name for a new order', () => {
        cy.get('.nameInput')
        .type('Martin')
        .should('have.value', 'Martin')
    })
    it('Can select a pizza size', () => {
        cy.get('select')
        .should('have.value', 'select')
        cy.get('select').select('personal')
    })
    it('Can add a topping', () => {
        cy.get('[type="checkbox"]').first().check()
    })
    it('Can add a special request', () => {
        cy.get('.spcRequest')
        .type('No cheese all anchovies baby')
        .should('have.value', 'No cheese all anchovies baby')
    })
    it('Submit button is no longer disabled', () => {
        cy.get('.orderBtn').should('not.be.disabled')
    })
    it('Can submit the final order',() => {
        cy.get('.orderBtn').click()
    })
})
