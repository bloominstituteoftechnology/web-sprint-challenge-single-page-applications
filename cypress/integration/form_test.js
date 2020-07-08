describe('this is our first test', ()=>{
    it('it should return true', ()=>{
    expect(true).to.equal(true);
    })
})

describe('testing our form inputs', ()=>{
    beforeEach(function(){
        cy.visit('http://localhost:3000/')
    })

    it('Finds the Name Input', ()=>{
        cy.get('#name')
    });
})