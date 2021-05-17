describe("Test the application", () => {
    beforeEach(function () {
      // runs before each test in this block
      cy.visit("http://localhost:3000/pizza-list/");
    });
  
    it("Test the Name input", () => {
      cy.get("#name");
    });
  
    it("Test submit button", () => {
      cy.get("button");
    });
  
    it("Test Sausage", () => {
      cy.get("#sausage");
    });
  
    it("Test Spinach", () => {
      cy.get('[name="spinach"]');
    });
  
    it("Test Olives", () => {
      cy.get('[name="spinach"]');
    });
  
    it("Test Mushroom", () => {
      cy.get('[name="mushroom"]');
    });
  });