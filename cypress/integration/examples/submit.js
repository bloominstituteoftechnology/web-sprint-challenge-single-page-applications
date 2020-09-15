describe('My Fourth Test', function () {
    it('Displays Form Submission', function () {
        cy.visit("http://localhost:3000/Pizza")
        cy.get('form').submit()
        
    })
})