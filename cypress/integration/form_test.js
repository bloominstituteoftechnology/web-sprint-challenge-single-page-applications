describe('Pizza Order App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    });
    const instructions = () => cy.get('textarea[name = "specialInstructions"]')
    it('add text to instruction', () => {
        instructions()
            .should("have.value", "")
            .type("Stone Cogswell")
            .should("have.value", "Stone Cogswell")
    })
}) 