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
  const personName = () => cy.get('[name="personName"]')

  const pizzaSize = () => cy.get('[name="pizzaSize"]')


  const sauce = () => cy.get('[name="sauce"]')

  const pepperoni = () => cy.get('[name="pepperoni"]')
  const sausage = () => cy.get('[name="sausage"]')
  const canadianBacon = () => cy.get('[name="canadianBacon"]')
  const spicyItalianSausage = () => cy.get('[name="spicyItalianSausage"]')
  const grilledChicken = () => cy.get('[name="grilledChicken"]')
  const onions = () => cy.get('[name="onions"]')
  const greenPepper = () => cy.get('[name="greenPepper"]')
  const dicedTomato = () => cy.get('[name="dicedTomato"]')
  const blackOlives = () => cy.get('[name="blackOlives"]')
  const roastedGarlic = () => cy.get('[name="roastedGarlic"]')
  const artichokeHearts = () => cy.get('[name="artichokeHearts"]')
  const threeCheese = () => cy.get('[name="threeCheese"]')
  const pineapple = () => cy.get('[name="pineapple"]')
  const extraCheese = () => cy.get('[name="extraCheese"]')

  const glutenFree = () => cy.get('[name="glutenFree"]')

  const specialInstructions = () => cy.get('[name="specialInstructions"]')

  const submitButton = () => cy.get('#submitBtn')

  //write a test that inputs are there
  it('input fields are rendering', () => {
    personName().should('exist')
    pizzaSize().should('exist')
    sauce().should('exist')
    pepperoni().should('exist')
    sausage().should('exist')
    canadianBacon().should('exist')
    spicyItalianSausage().should('exist')
    grilledChicken().should('exist')
    onions().should('exist')
    greenPepper().should('exist')
    dicedTomato().should('exist')
    blackOlives().should('exist')
    roastedGarlic().should('exist')
    artichokeHearts().should('exist')
    threeCheese().should('exist')
    pineapple().should('exist')
    extraCheese().should('exist')
    glutenFree().should('exist')
    specialInstructions().should('exist')
  })


  // write a test for making sure that we can order a new pizza
  it('make sure we can order a new pizza', () => {
    const testName = "Rhiannon"
    const testSpecialInstructions = "Please put the parmasan cheese on the side."
  
    personName().type(testName)
    pizzaSize().select('medium')
    sauce().check("originalRed")
    canadianBacon().check()
    pineapple().check()
    specialInstructions().type(testSpecialInstructions)
    submitButton().click()

  })

});

