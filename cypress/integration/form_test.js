describe('This is our first test!', ()=>{
    it('Should return true', ()=>{
        expect(true).to.equal(true);
    })
})

describe('Testing our form inputs', ()=>{
    beforeEach(function(){
        //runs before each test in this block
        cy.visit(' http://localhost:3000/pizza')
    })
    it('Input Name into the Name Input', () => {
        //Arrange - Get the element
     
        cy.get('#name')
        //Act - Mimic User Interaction
        .type('Lynda Santiago')
        //Assert - Test / Verify
        .should('have.value', 'Lynda Santiago')
      //Testing that you can select multiple toppings
      
     
    })
    it('Test that you can select checkboxes', ()=>{
        cy.get('input[type="checkbox"]').check().should('be.checked')
    
    })
  
    it('Form can submit Successfully', ()=>{
        
        cy.get('#name').type('Lynda Santiago')
        cy.get('#size').select('Small')
        cy.get('input[type="checkbox"]').check().should('be.checked')
        cy.get('textarea').type('Ready to submit form')
        cy.get('.btnOrder').click()
    })
})