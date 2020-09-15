describe('My Third Test', function () {
    it('Selects Multiple Items', function () {
        cy.visit("http://localhost:3000/Pizza")
        cy.get('[type="checkbox"]').check()
        
    })
})