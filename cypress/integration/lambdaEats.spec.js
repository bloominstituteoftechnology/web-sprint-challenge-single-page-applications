describe('User Onboarding Form', () => {
    it('Ability to navigate to site', () => {
        cy.visit('http://localhost:3001/order')
        cy.url().should('include', 'localhost:3001')
    })

    it('Submit Button to be disabled by default', () => { // second test
        cy.get('button').should('be.disabled')
    })

    it('Can type text for Name', () => {
        cy.get('input[name=name]')
            .type('Donald Faulknor')
            .should('have.value', 'Donald Faulknor')
    })

    it('Can select size', () => {
        cy.get('select[name=size]')
            .select('small').should('have.value', 'small')
    })
    it('Can select multiple sauce', () => {
        cy.get('input[name=red]')
            .check()
            .should('be.checked')
        cy.get('input[name=pesto]')
            .check()
            .should('be.checked')
    })

    it('Can select multiple cheese', () => {
        cy.get('input[name=ricotta]')
            .check()
            .should('be.checked')
        cy.get('input[name=feta]')
            .check()
            .should('be.checked')
    })

    it('Can type text for Instructions', () => {
        cy.get('textarea[name=instructions]')
            .type('My Instructions')
            .should('have.value', 'My Instructions')
    })

    it('Submit Button being enabled', () => {
        cy.get('button').should('not.be.disabled')
            .click()
    })

    it('Form clears after submit', () => {
        cy.get('input[name=name]').should('be.empty')
        cy.get('select[name=size]').should('have.value', '')
        cy.get('input[name=red]').should('not.be.checked')
        cy.get('input[name=white]').should('not.be.checked')
        cy.get('input[name=feta]').should('not.be.checked')
        cy.get('input[name=ricotta]').should('not.be.checked')
    })

})

// Created by Donald Faulknor
// GitHub - https://github.com/social-collab