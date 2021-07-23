describe('Pizza-Form', () => {
    beforeEach(() => {
     cy.visit('http://localhost:3003/pizza');
    })

    const nameInput = () => cy.get('input[name="name"]')
    const submitBtn = () => cy.get('button[id="order-button"]')
    const topping1 = () => cy.get('input[name="sausage"]')
    const topping2 = () => cy.get('input[name="pepperoni"]')
    

it('Can add text to the box', () => {
    nameInput()
        .should("have.value", "")
        .type("Jack")
        .should("have.value", "Jack")
    })
it('Can select multiple toppings', () => {
    topping1().click()
    topping2().click()
    }) 
it('Can submit the form', () => {
    nameInput()
        .should("have.value", "")
        .type("Jack")
        .should("have.value", "Jack")
    submitBtn().click()
})

})