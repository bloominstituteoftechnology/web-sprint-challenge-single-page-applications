describe("Pizza App End-to-End Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  const nameInput = () => cy.get("input[name=name]");
  const selectSize = () => cy.get("select[name=size]");
  const checkBoxCheese = () => cy.get("input[name=checkCheese");
  const checkBoxMeat = () => cy.get("input[name=checkMeat");
  const checkBoxVeg = () => cy.get("input[name=checkVeg");
  const checkBoxFungus = () => cy.get("input[name=checkFungus");
  const submitBtn = () => cy.get(".submit button");

  it("sanity check to make sure tests work", () => {
    // "expect" is an assertion
    // there can be several assertions per test
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5); // strict ===
    expect({}).not.to.equal({}); // strict ===
    expect({}).to.eql({}); // not strict
  });

  it("Check Name Field, Checkboxes, and Submission", () => {
    nameInput().type("Persona").should("have.value", "Persona");
    selectSize().select("Small");
    checkBoxCheese().check();
    checkBoxMeat().check();
    checkBoxVeg().check();
    checkBoxFungus().check();
    submitBtn().click();
  });
});
