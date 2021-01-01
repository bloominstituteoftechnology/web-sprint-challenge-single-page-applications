describe("Form App", () =>{

beforeEach(() => {

    cy.visit("http://localhost:3000/shop")

})

const input = () => cy.get('input[name="name"]')
const pizza =() => cy.get('select[name="pizzasizes"]')
const input1 =() => cy.get('input[name="pepporoni"]')
const input2 = () =>cy.get('input[name="mushrooms"]')
const input3 = () => cy.get('input[name="mushrooms"]')
const input4 = () => cy.get('input[name="extracheese"]')
const textarea = () => cy.get('textarea[name="instructions"]')
const button = () => cy.get ("button")

it("Submit button is disabled" , () => {



button().should("be.disabled")

})

it("Can type in the inputs and check the checkboxes", () =>{
 input().should("have.value","").type("George").should("have.value","George")
 textarea().should("have.value", "").type("George").should("have.value", 'George')


  input1().check()
  input2().check()
  input3().check()
  input4().check()
  pizza().select("small")
  button().should("be.enabled")

})













})