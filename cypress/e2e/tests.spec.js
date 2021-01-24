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
  
    // const textInput = () => cy.get('[name="text"]');
    // const authorInput = () => cy.get('[name="author"]');
    // const submitButton = () => cy.get('#submitBtn');
    // const cancelButton = () => cy.get('#cancelBtn');
  
//     it("input fields rendering", () => {
//       textInput().should("exist");
//       authorInput().should("exist");
//     });
  
    
//     it("buttons rendering", () => {
//       submitButton().should("exist");
//       cancelButton().should("exist");
//     });
  
//     it("make sure we can add a new quote", () => {
//       const quote = "Ima Quote"
//       textInput().type(quote)
//       authorInput().type('MLK')
//       submitButton().click()
//   })
  
  
//   });
  