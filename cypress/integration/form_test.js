
describe('Testing form input', () =>{ //you can use context instead of describe

    beforeEach(() =>{
        cy.visit("http://localhost:3000/buildyourownpizza") // this sets up our testing envirnoment, getting the local host s from npm start
    });
    it("adding text to inputs and submits the form",() =>{
        cy
        .get("[data-cy=name]")
        .type("Kato")
        cy
        .get("[data-cy=piesize]")
        .select('Brooklyn')
        .should("have.value","Brooklyn")
        cy
        .get("[data-cy=sauce]")
        .check()
        .should("be.checked")
        cy
        .get("[data-cy=pineapples]")
        .check()
        .should("be.checked")
        cy
        .get("[data-cy=jalepenos]")
        .check()
        .should("be.checked")
        cy
        .get("[data-cy=onions]")
        .check()
        .should("be.checked")
        cy
        .get("[data-cy=greenPeppers]")
        .check()
        .should("be.checked")
        cy
        .get("[data-cy=mushrooms]")
        .check()
        .should("be.checked")
        cy
        .get("[data-cy=beyondMeatPep]")
        .check()
        .should("be.checked")
        cy
        .get("[data-cy=special]")
        .type("Kato")
        .should("have.value", "Kato"); 
        cy
        .get("[data-cy=terms]")
        .check()
        .should("be.checked")
        cy
        .get("[data-cy=submit]")
        .click()
    })
})