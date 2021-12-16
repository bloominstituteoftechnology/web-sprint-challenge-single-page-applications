describe('fillName', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('submit button disable', () => {
        submitBtn().should('be.disabled')
    })
    it('check that text can be', () => {
        textInput()
            .should('have.value', "")
            .type("Elijah")
            .should('have.value', "Elijah")
    })


})

const textInput = () => cy.get('input[name="name"]')
const toppingInput = () => cy.get('input[type="checkbox"]')
const submitBtn = () => cy.get('button[id="order-button"]')



it('sanity check for making sure everything is setup', () => {
    //check some assertions here
    expect(1 + 2).to.equal(3)     //strict
    expect(2 + 2).not.to.equal(5)
})


describe('Able to visit to got the right url', () => {
    it('can navigate to the site', () => {
        cy.url().should('include', 'localhost')
    })
})