describe("Testing our form inputs", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3000/pizza");
  });

  // Arrange - setup a webpage, form input, etc
  // Act - simulate a user action, like a button click or form input
  // Assert - Verify that the simulated user action resulted in the expected output

  it("Inputs Name into the Name Input", () => {
    cy.get("#name").type("Jessica").should("have.value", "Jessica"); // cypress produces this code when using the element selector (arrange). type() simulates typing (act). should() looks for the type() value on our page (assert).
  });

  it("Selects multiple toppings", () => {
    // Arrange
    cy.get('[type="checkbox"]')
      // Act
      .check()
      // Assert
      .should("be.checked");
  });

  it("Submits the form", () => {
    cy.get("#form").submit();
  });
});
