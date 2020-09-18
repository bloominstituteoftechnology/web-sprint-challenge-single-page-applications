describe("Pizza app", () => {

const textInput = () => cy.get("input[name=text]");
const instructionsInput = () => cy.get("input[name=instructions")
const pepperoniInput = () => cy.get("input[name=pepperoni")
const olivesInput = () => cy.get("input[name=olives")
const tomatoesInput = () => cy.get("input[name=tomatoes")
const spinachInput = () => cy.get("input[name=spinach")
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


it("multiple checkboxes are showing", () => {
        pepperoniInput().should("exist");
        olivesInput().should("exist");
        tomatoesInput().should("exist");
        spinachInput().should("exist");

    cy.contains("Submit Quote").should("exist");
    cy.contains(/submit quote/i).should("exist");
    });
        

  it("can submit a new text string", () => {
    
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