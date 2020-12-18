describe("Form app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("sanity test to make sure tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

    const textInput = () => cy.get('input[name="name"]');
    
    it("Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion", () => {
    textInput().type("NAME");
    textInput().should("have.value", "NAME");
  });