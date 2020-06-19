describe('navigate', ()=>{
    it('can navigate to the site', ()=> {
        cy.visit('http://localhost:3000/pizza') 
    }) 
})
describe('Input and Submit', ()=>{
    it('can get and type name', ()=>{
        cy.get('input[name=name]')
        .type('Jazmine')
        .should('have.value', 'Jazmine' )
    })

    it('can get and select multiple toppings', ()=>{
        cy.get('input[name=pepperoni]')
        .click()
        .should('have.value', 'true' )
        cy.get('input[name=sausage]')
        .click()
        .should('have.value', 'true' )
    })
    it('can can submit form', ()=>{
        cy.get('button')
        .click()
    })

   
})