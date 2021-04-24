describe("Quotes app", () => {
    beforeEach(() => {
        
        cy.visit("http://localhost:3000/order");
      });
    
    const nameInput = ()=>cy.get('input[name="name"');
    const sizeInput = ()=>cy.get('input[name="size"');
    const Input = ()=>cy.get('input[name="name"');
    const submit = ()=> cy.get('button[id="order-button"')

    it("can add text to the box",()=>{
        nameInput().should("have.value", "")
        .type("Lisa Simpson")
        .should("have.value", "Lisa Simpson");
    })

    it("submit button can submit form", () => {
        nameInput().should("have.value", "").type("Lisa Simpson")
        .should("have.value", "Lisa Simpson");
        submit().click()
        

    })

});