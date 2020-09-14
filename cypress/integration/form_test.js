describe("Testing our form inputs", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3000/pizza");
  });

  // Arrange - setup a webpage, form input, etc
  // Act - simulate a user action, like a button click or form input
  // Assert - Verify that the simulated user action resulted in the expected output

  it("Input Name into the Name Input", () => {
    cy.get("#name").type("Jessica");
  });
});
