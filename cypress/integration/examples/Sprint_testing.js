describe("testing form inputs", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })
    it("readme tests", () => {
        cy.get("[data-cy=name]").type("Ramsha").should("have.value","Ramsha" );  
        cy.get("[data-cy=vegan]").check().should("be.checked");
        cy.get("[data-cy=chicken]").check().should("be.checked");
        cy.get("[data-cy=cheese]").check().should("be.checked");
        cy.get("[data-cy=deepdish]").check().should("be.checked");
        cy.get("[data-cy=pepperoni]").check().should("be.checked");
        cy.get("[data-cy=submit]").click();
    })
})