describe('My Tests', function() {
    it('Checks if header text exists', function () {
        cy.visit("http://localhost:3000/pizza");
        cy.get('input[name="name"]').type('Jacob Morris');
        cy.get('input[name="Sausage"]').check();
        cy.get('input[name="Canadian"]').check()
        cy.get('form').submit()
    })
})