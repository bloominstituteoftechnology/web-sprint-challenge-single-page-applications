describe('SPA sprint Pizza', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:3000/')
    })
    const nameInput = () => cy.get('#name-input');
    const orderPizza = () => cy.get('#order-pizza')
    const sizeDrop = () => cy.get('select[name=size]');
    const pineapple = () => cy.get('input[name=pineapple]')
    const veggies = () => cy.get('input[name=veggies]')
    const cheese = () => cy.get('input[name=cheese]')
    const secretTopping = () => cy.get('input[name=secretTopping]')
    const orderBtn =()=> cy.get('button[id=order-button')
    const special =()=> cy.get('input[name=specialInstructions]')
    const errors=()=> cy.get('.errors');

    it('just to make sure the test work', () => {
        expect(1+2).to.equal(3);
        expect(2+2).to.not.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })
    it('proper elements are showing',()=> {
        orderPizza().click();
        nameInput().should('exist');
        sizeDrop().should('exist');
        pineapple().should('exist');
        veggies().should('exist');
        cheese().should('exist');
        secretTopping().should('exist');
        special().should('exist')
        orderBtn().should('exist');
    })
    describe('Filling out the inputs', ()=>{
        it('can navigate to the url',()=> {
            cy.url().should('include','localhost');
        })
        it('can type in the inputs', ()=> {
            orderPizza().click()
            nameInput()
            .should('have.value', '')
            .type('First name input')
            .should('have.value', 'First name input')
 
            special()
            .should('have.value', '')
            .type('N/A')
            .should('have.value', 'N/A')
 
            pineapple()
            .check()
            .should('be.checked')
            .uncheck()

            veggies()
            .check()
            .should('be.checked')
            .uncheck()

            cheese()
            .check()
            .should('be.checked')

            secretTopping()
            .check()
            .should('be.checked')

            cy.get('select')
            .select('small')

            cy.get('select')
            .select('medium')

            cy.get('select')
            .select('large')
            

        })
        it('can add to order', ()=>{
            orderPizza().click();
            orderPizza().click()
            nameInput()
            .should('have.value', '')
            .type('First name input')
            .should('have.value', 'First name input')
 
            special()
            .should('have.value', '')
            .type('N/A')
            .should('have.value', 'N/A')
 
            pineapple()
            .check()
            .should('be.checked')
            .uncheck()

            veggies()
            .check()
            .should('be.checked')
            .uncheck()

            cheese()
            .check()
            .should('be.checked')

            secretTopping()
            .check()
            .should('be.checked')

            cy.get('select')
            .select('small')

            cy.get('select')
            .select('medium')

            cy.get('select')
            .select('large')
            orderBtn().click();
        })
    })

    
})