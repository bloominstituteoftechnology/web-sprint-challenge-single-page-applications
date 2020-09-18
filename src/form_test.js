describe("Pizza App End-to-End Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("sanity check to make sure tests work", () => {
    // "expect" is an assertion
    // there can be several assertions per test
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5); // strict ===
    expect({}).not.to.equal({}); // strict ===
    expect({}).to.eql({}); // not strict
  });

  const nameInput = () => cy.get("input[name=name]");
  const checkBoxes = () => cy.get("input[id=check-box-sect") // an array of checkbox objects
  const submitBtn = () => cy.get(".submit button")


  it("Check Name Field, Checkboxes, and Submission", () => {
    nameInput().type("Persona").should("have.value", "Persona");
    //Add checkboxes test here
    
    submitBtn().click();
  }

});
