describe('pizzaForm', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it("sanity check", () => {
        expect(1+1).to.equal(2)
    })
})