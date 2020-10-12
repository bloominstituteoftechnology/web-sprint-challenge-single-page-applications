describe("Tests working", () =>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/pizza")
    })
    it("Still working", () =>{
        cy.get("data-cy=name").type("Austin").should("have.value", "Austin")
        cy.get("data-cy=size").select("small").should("have.value", "small")
        cy.get("data-cy=pepporoni").check().should("be.check")
        cy.get("data-cy=sausage").check().should("be.check")
        cy.get("data-cy=olive").check().should("be.check")
        cy.get("data-cy=basil").check().should("be.check")
        cy.get("data-cy=instructions").type("Need Napkins").should("have.value", "Need Napkins")
        cy.get("data-cy=submit").click()
        cy.get("pre").should("exist")

    })
})