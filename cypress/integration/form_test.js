//Describe Block
describe('Pizza Form Test', () => {

    //Before Each
    beforeEach(() =>{
        cy.visit('http://localhost:3000/pizza')
    })


    //Variables
    const nameInput = () => cy.get(':nth-child(1) > input')
    const pSelector = () => cy.get('select')
    const pepInput = () => cy.get(':nth-child(2) > input')
    const cheeseInput = () => cy.get(':nth-child(3) > input')
    const baconInput = () => cy.get(':nth-child(3) > input')
    const pineInput = () => cy.get(':nth-child(3) > input')

    

    const specInput = () => cy.get(':nth-child(5) > input')
    const submitButton = () => cy.get('button')

    const name = 'Bobby'
    const special = 'Leave at the door'

    //tests if you can type in the name field of the form
    it("Tests name can be typed in to field", () =>{
        nameInput().type(name)
        nameInput().should('have.value', 'Bobby')
    })

    it('Tests if you can click toppings from check box', () => {
        pepInput().click()
        pepInput().should('exist')
        cheeseInput().click()
        cheeseInput().should('exist')
        baconInput().click()
        baconInput().should('exist')
        pineInput().click()
        pineInput().should('exist')
    })

    it('Tests if you can submit the form', () =>{
        nameInput().type(name)
        pSelector().select('14 inches').should('have.value','14 inches')
        pepInput().click()
        cheeseInput().click()
        baconInput().click()
        pineInput().click()
        specInput().type(special)
        submitButton().click()
    })

})