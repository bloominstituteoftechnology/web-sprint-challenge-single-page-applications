// describe block "describes" our collection of tests
describe('Pizza App', () => {

  beforeEach(() => {
    // console.log(`random int: ${Math.random()}`)
    cy.visit('/pizza')
  }) // connect to cypress with cy.visit

  // tests for the test itself
  it('sanity check', () => {
    // expect is an assertion, can have many assertions in a test
    expect(1 + 2).to.equal(3)
    expect(1 + 2).not.to.equal(4)
  }) // test check 1

  it('sanity check 2', () => {
    expect([1,2,3,4,5].length).to.equal(5)
  })  // test check 2

  // element variables
  const specialInstructions = () => cy.get('[name="specialInstructions"]')
  const pepperoni = () => cy.get('[name="pepperoni"]')
  const submitButton = () => cy.get('#submitBtn')

  //write a test that inputs are there
  it('input fields are rendering', () => {
    specialInstructions().should('exist')
    pepperoni().should('exist')
    submitButton().should('exist')
  })

 



  //write a test for making sure that we can add a new user
  // it('make sure we can add a new pizza', () => {
  //   const pizzaSize = "Rhiannon"
  //   const testEmail = "rhiannon@gmail.com"
  //   const testPassword = "Mochi"
  
  //   nameInput().type(testName)
  //   emailInput().type(testEmail)
  //   passwordInput().type(testPassword)
  //   roleSelect().select('note-taker')
  //   acceptTermsCheckbox().check()
  //   submitButton().click()

  // })

});

