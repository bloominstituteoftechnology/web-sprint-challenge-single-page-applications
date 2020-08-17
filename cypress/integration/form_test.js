/// <reference types="cypress" />

describe("Testing form inputs", () => {
  // You can use context instead of describe
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("adding text to inputs and submits the form", () => {
    // Name : Req:
    cy.get("[data-cy=name]").type("Ali").should("have.value", "Ali");

    // Drop-down: Req:
    cy.get("[data-cy=size]").select("Small").should("have.value", "Small");

    // Toppings: checkbox
    cy.get("[data-cy=chicken]").click();
    cy.get("[data-cy=beef]").click();
    cy.get("[data-cy=shrimp]").click();
    cy.get("[data-cy=veggies]").click();

    // textArea
    cy.get("[data-cy=instructions]")
      .type("instructions")
      .should("have.value", "instructions");

    //button
    cy.get("[data-cy=submit]").click().should('be.disabled')
  });
});
