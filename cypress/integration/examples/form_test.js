describe('this is the first test!', () =>{
    it( "Should return true", () =>{
        expect(true).to.equal(true);
    })

    describe("Lambda Eat Form Should Work", () =>{
       beforeEach(function () {
           cy.visit("http://localhost:3000");
        })
    it('Visits the URL', () => {}) 

     })

        const typeOfPizzaInput = () => cy.get('input[typeOfPizza="typeOfPizza"]');
        const sizeInput = () => cy.get('input[size="size"]')
        const toppingsInput = () => cy.get("input[toppings='toppings']")
        const specialInstructionstext = () => cy.get("input[specialInstructions='specialInstructions']")

     it('has the proper elements', () => {

        typeOfPizzaInput().should('exist')
        sizeInput().should('exist')
        toppingsInput().should('exist')
        specialInstructionstext().should('exist')

});
describe('Type of Pizza', () => {
    it('can type inside the text input', () => {
        typeOfPizzaInput()
        .should('have.value', '')
        .type('pepproni')
        .should('have.value', 'pepproni')
    })

    it('Size of Pizza', () => {
        sizeInput()
        .should('have.value', '')
        .type('Medium')
        .should('have.value', 'Medium')
    })

    it('Choose upto 4 toppings', () => {
        toppingsInput().checkbox()
        .should('have.value', '')
        .type('211web27!')
        .should('have.value', '211web27! ')
    })

    it("the cancel button can rest the inputs and disable the submit button", () => {
        
        specialInstructionstext("have.value", "");
        toppingsInput().should("have.value", "");
        typeOfPizzaInput().should("have.value", "");
        sizeInput().should("have.value", "");
      });
})

    })