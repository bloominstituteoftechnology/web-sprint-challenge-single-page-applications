describe('pizzaForm', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/orderForm')
    })

    const size = () => cy.get('select[name=size]')
    const tomato = () => cy.get('input[value=tomato]')
    const white = () => cy.get('input[value=white]')
    const green = () => cy.get('input[value=green]')
    const customerName = () => cy.get('input[name=customerName]')
    const instructions = () => cy.get('input[name=instructions]')
    const submitBtn = () => cy.get('#submit')
    const peperoni = () => cy.get('input[name=peperoni]')
    const mushroom = () => cy.get('input[name=mushroom]')
    const olives = () => cy.get('input[name=olives]')
    const sausage = () => cy.get('input[name=sausage]')
    const artichokes = () => cy.get('input[name=artichokes]')

    it("sanity check", () => {
        expect(1+1).to.equal(2)
    })

    it('proper elements exsist', () => {
        customerName().should('exist')
        size().should('exist')
        tomato().should('exist')
        white().should('exist')
        green().should('exist')
        instructions().should('exist')
        submitBtn().should('exist')
        sausage().should('exist')
        artichokes().should('exist')
        peperoni().should('exist')
        olives().should('exist')
        mushroom().should('exist')

    })

    describe('form test', () => {
      

        it('testing customer and instruction text boxes', () => {
            customerName()
                .type('indyDog')
                .should('have.value', 'indyDog')
            instructions()
                .type('kibble please')
                .should('have.value', 'kibble please')
        })

        it('multiple toppings', () => {
            mushroom()
                .check()
                .should('be.checked') 
            sausage()
                .check()
                .should('be.checked')
            mushroom().should('be.checked')
        })

        it('check submit button is active', () => {
            size().select('large')
            white().check()
            sausage().check()
            artichokes().check()
            instructions().type('burn it')
            customerName().type('indyDog')
            submitBtn().should('not.be.disabled')


        })

    })
})