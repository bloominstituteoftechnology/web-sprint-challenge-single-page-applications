describe('Pizza App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })


    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const submitBtn = () => cy.get('button[id="submitBtn"]')


    it('Do elements exist', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        submitBtn().should('exist')
    })




})