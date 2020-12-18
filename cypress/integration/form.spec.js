

describe("Form App", () => {
    beforeEach(() => {
      // arbitrary code you want running before tests start
      cy.visit("http://localhost:3000/pizza");
    });
  
    const nameInput = () => cy.get('input[name="name"]');
    const sizeInput = () => cy.get('select[name="size"]');
    const sauceInput = () => cy.get('input[name="sauce"]');
 
    const submitBtn = () => cy.get('#submit');
  
    it("sanity test", () => {
 
      expect(1 + 2).to.equal(3);
      expect(2 + 2).not.to.equal(5);
    });
  
    it("Should reflect correct user input", () => {
        nameInput()
        .should("have.value", "")
        .type("jean luciano")
        .should("have.value", "jean luciano");

        sizeInput()
        .should("have.value", "")
        .select("large")
        .should("have.value", "large");

        sauceInput()
        .should("have.value", "original")
        
    });
  
    it("should submit data", ()=>{
 
    })
  
    it('has validation for empty inputs',()=>{

    })
  });