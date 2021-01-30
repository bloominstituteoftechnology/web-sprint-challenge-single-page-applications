describe("testing inputs", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("adding text and submitting form", () => {
    cy.get('[data-cy="name"]').type("Sarah").should("have.value", "Sarah");
    cy.get('[data-cy="pepperoni"]').check().should("be.checked");
    cy.get('[data-cy="sausage"]').check().should("be.checked");
    cy.get('[data-cy="olives"]').check().should("be.checked");
    cy.get('[data-cy="mushrooms"]').check().should("be.checked");
    cy.get('[data-cy="submit"]').click;
  });
});
