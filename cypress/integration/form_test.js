describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/Form");
  });
  it("Sprint tests", function () {
    cy.get("[data-cy=other]").type("text").should("have.value", "text");

    cy.get('[type="checkbox"]').check().should("be.checked");

    cy.get("[data-cy=submit]").click();
  });
});
