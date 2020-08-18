describe("testing form inputs", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })
    it("adding text inputs and submits the form", () => {
        cy.get("[data-cy=name]").type("Shenan").should("have.value","Shenan" );  
        cy.get("[data-cy=olives]").check().should("be.checked");
        cy.get("[data-cy=cheese]").check().should("be.checked");
        cy.get("[data-cy=pepperoni]").check().should("be.checked");
        cy.get("[data-cy=sausage]").check().should("be.checked");
        cy.get("[data-cy=submit]").click();
    })
})