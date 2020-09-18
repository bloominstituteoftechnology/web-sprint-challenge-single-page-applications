describe("Pizza app", () => {

const textInput = () => cy.get("input[name=text]");
const instructionsInput = () => cy.get("input[name=instructions")
const submitBtn = () => cy.get(`button[id="submitBtn"]`);

it("can type in the inputs", () => {

    textInput()
      .should("have.value", "")
      .type("Brian")
      .should("have.value", "Brian");

      instructionsInput()
      .should("have.value", "")
      .type("I want my pizza badly cooked")
      .should("have.value", "I want my pizza badly cooked");
  });

  it("can submit a new quote", () => {
    
    cy.contains(/have fun/).should("not.exist");
    textInput().type("Alice");
    instructionsInput().type("have fun");
    submitBtn().click();
    cy.contains(/have fun/).should("exist");
    cy.contains(/have fun/)
      .next()
      .next()
      .click();
    cy.contains(/have fun/).should("not.exist");
  });

});