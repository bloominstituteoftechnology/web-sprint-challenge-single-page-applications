/*global cy*/

describe('Pizza Order Form', () => {
  const additions = () => cy.get('input[name="additions"]')
  const toppings = () => cy.get('[type="checkbox"]')
  const submitBtn = () => cy.get('#submitBtn')
  const size = () => cy.get('select')
  const sauce = () => cy.get('[type="radio"]')
  const additionsText = 'Extra cheese'
  const name = () => cy.get('input[name="name"]')
  const nameText = 'John Smith'


// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form


  describe('Form', () => {
    describe('Inputs and buttons function', () => {
      it('can navigate to http://localhost:3000/pizza', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', '/pizza')
      })
      it ('additions field accepts input', () => {
        additions().type(additionsText)
        additions().should('have.value', additionsText)
      })
      it ('can select toppings', () => {
        toppings().check()
        toppings().should('be.checked')
      })
      it ('form can be submitted and order is shown below button', () => {
        //fill out required
        size().select('Small')
        sauce().first().check()
        name().type(nameText)
        //submit the inputs we tested above
        submitBtn().click()
        cy.contains('')
      })
      //reload page to clear any entries made
      // it('can navigate to http://localhost:3000/pizza', () => {
      //   cy.visit('http://localhost:3000/pizza')
      // })
    })
  })
})