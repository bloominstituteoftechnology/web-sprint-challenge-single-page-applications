describe("Make-a da pizza", () => {
    // beforeEach(() => {
    //     cy.visit("http://localhost:3000")
    // })

    const choosePizza = () => cy.contains("Pizza?")
    const nameThePizza = () => cy.get("input[name=name_of_pizza]")

    const pizzaSize = () => cy.get("select[type=dropdown]")
    const garlicSauce = () => cy.get("input[id=super_garlic]")
    
    const pepperoni = () => cy.get("input[name=pepperoni]")
    const sausage = () => cy.get("input[name=sausage]")
    const blackOlives = () => cy.get("input[name=black_olives]")
    const onions = () => cy.get("input[name=onions]")
    
    const instructions = () => cy.get("input[name=special_instruction]")

    const order5Pizzas = () => cy.get("input[name=number_of_pizzas]")

    const addToOrder = () => cy.contains("Add to Order")

    it('sanity check', () => {
        // inside of this block is called an assertion
        expect(1 + 1).to.equal(2)
        expect(1 + 1).not.to.equal(3)
        expect(7).to.equal(7)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    describe("order the pizza", () => {
        it("order it", () => {
            cy.visit("http://localhost:3000")
            choosePizza().click()
            nameThePizza().type("Steve")
            pizzaSize().select("Small")
            garlicSauce().click()
            pepperoni().click()
            sausage().click()
            blackOlives().click()
            onions().click()
            instructions().type("Drown this beast in garlic. Please.")
            order5Pizzas().type(5)
            addToOrder().click()
        })
    })
})