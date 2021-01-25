

describe('Form test', function (){

    beforeEach(()=> {

        cy.visit('http://localhost:3001/pizza')   
    })
    it('should add text to the box', ()=>{
        const name = cy.get('input[name="name"]')
        name.type('michael')
        name.should('have.value', 'michael')
    })
    it('should select multipl toppings, check for submit button', ()=>{
        const checkBox =cy.get('input[type="checkbox"')
        checkBox.should('exist')
        const submitbtn = cy.get('.submitbtn')
        submitbtn.should('exist')
    })
})
