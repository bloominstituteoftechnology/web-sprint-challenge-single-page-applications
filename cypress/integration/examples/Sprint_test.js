describe("testing form inputs", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })
    it("readme tests", () => {
        cy.get("[data-cy=name]").type("Justin").should("have.value","Justin" );  
        cy.get("[data-cy=pepperoni]").check().should("be.checked");
        cy.get("[data-cy=sausage]").check().should("be.checked");
        cy.get("[data-cy=bacon]").check().should("be.checked");
        cy.get("[data-cy=chicken]").check().should("be.checked");
        cy.get("[data-cy=pineapple]").check().should("be.checked");
        cy.get("[data-cy=submit]").click();
    })
})