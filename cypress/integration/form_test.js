describe('Form Sumbissions', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
      });
      it("Put's the Lotion on it's Skin = sanity check", () => {
        expect(5).to.equal(5);
        expect(1 + 2).to.equal(3);
        expect({}).to.not.equal({}); // can use "equal" here// and not strict i.e. (==)
        expect({}).to.eql({}); //can't use equal here// and deeply strick i.e. (===)
      });

      const specialInput = () => cy.get('input[name="special"]');
      // const checkBox = () => cy.get('input[type="checkbox"]');
      const submitBtn = () => cy.get('button[id="order-button"]');
      const checkHam = () => cy.get('input[name="ham"]');
      const checkOlives = () => cy.get('input[name="olives"]');
      const checkOnions = () => cy.get('input[name="onions"]');
      const checkCheese = () => cy.get('input[name="cheese"]');
      
      it('test add text to box, select multiple toppings, and submit', () => {
        //add text to box
        specialInput()
        .should("exist")
        .should('have.value', "")
        .type("Here is some sample text")
        .should("have.value","Here is some sample text" );
        //select multiple toppings
        checkHam().check();
        checkHam().should("be.checked");
        checkOlives().check();
        checkOlives().should("be.checked");
        checkOnions().check();
        checkOnions().should("be.checked");
        checkCheese().check();
        checkCheese().should("be.checked");

        submitBtn().should("not.be.disabled");
        submitBtn().click();

      })

    });

    
// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form