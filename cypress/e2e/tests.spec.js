// write tests here

describe("Quote App", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("sanity check", () => {
      //expect is an assertion
      //we can have many assertions in a test
      expect(2 + 2).to.equal(4);
      expect(2 + 2).not.to.equal(5);
    });
  
    it("sanity check 2", () => {
      expect([1, 2, 3].length).to.equal(3);
    });
  
    const textInput = () => cy.get('[name="text"]');
    const sizeInput = () => cy.get('[name="size"]');
    const sauceInput = () => cy.get('[name="sauceChoice"]');
    const submitButton = () => cy.get('#submit-btn');
  
    it("input fields rendering", () => {
      textInput().should("exist");
      sizeInput().should("exist");
      sauceInput().should("exist");
      submitButton().should("exist");
    });
  
    
   
  
   });
  