describe("Pizza App Tests", () => {
    beforeEach(() => {
        cy.visit("localhost:3000/pizza")
    })

    const nameInput = () => cy.get('input[name="name"]')

    it("Sanity Checking", () => {
        expect(5).to.equal(5)
        expect(2 + 2).to.equal(4)
    })

    //test text input
    it("Text Input Testing", () => {
        nameInput()
            .should("have.value", "")
            .type("Morgan")
            .should("have.value", "Morgan")
    })

    //test checkboxes
    it("Testing Checkboxes", () => {
        cy.get('input[name="pepperoni"]')
            .should("not.be.checked")
            .click()
            .should("be.checked")
        cy.get('input[name="pineapple"]')
            .should("not.be.checked")
            .click()
            .should("be.checked")
    })

    //test submit button

});
