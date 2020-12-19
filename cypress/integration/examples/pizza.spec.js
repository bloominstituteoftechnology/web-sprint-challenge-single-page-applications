describe('Pizza order form', () =>{
    

    beforeEach(() =>{
        cy.visit('http://localhost:3000/pizza')
    })

    const size = () => cy.get("select[name='size']")
    const name = () => cy.get("input[name='name']")
    const specialInstructions = () => cy.get("input[name='specialInstructions']")
    const pepperoni = () => cy.get("input[name='pepperoni']")
    const  jalapeno= () => cy.get("input[name='jalapeno']")
    const bacon = () => cy.get("input[name='bacon']")
    const greenPepper = () => cy.get("input[name='greenPepper']")
    const italianSausage = () => cy.get("input[name='italianSausage']")
    const submitBtn = () => cy.get('#orderBtn')

    it('test to see if it works', () =>{
        expect(1 + 2).to.equal(3);
        expect(4 * 5).not.to.equal(6);
    })
     
    it('typing into boxes', () =>{
        name()
        .should('have.value', '')
        .type('Diego Roman')
        .should('have.value', 'Diego Roman')
        specialInstructions()
        .should('have.value', '')
        .type('Crust to be a bit burnt')
        .should('have.value', 'Crust to be a bit burnt');
    })

    it('can select multiple toppings', () =>{
        pepperoni().check()
        jalapeno().check()
        bacon().check()
        greenPepper().check()
        italianSausage().check();
    })

    it('can submit the form', () =>{
        size()
        .select('large')
        pepperoni().check()
        jalapeno().check()
        italianSausage().check()
        name()
        .type('Diego Roman')
        submitBtn().click();
    })
})