describe('Pizza Order Form', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    })

    const specialInstructions= () => cy.get('input[name ="specialInstructions"]')

    it('checking to see if it works',()=>{
        expect(1+2).to.equal(3)
    })

    it('checking to see if you can add text to special instructions',()=>{
        specialInstructions()
        .should('have.value', "")
        .type("extra done please")
        .should('have.value', "extra done please")
    })

    it ('testing multiple topping input', ()=>{
        cy.get('[type ="checkbox"]').check()

    })

    it ('testing form submission', () =>{
        cy.get('select[name ="size"]').should('have.value', "")
        cy.get('select[name ="size"]').select('10"')
        cy.get('select[name ="size"]').should('have.value', '10"')
        cy.get('input[value = "originalRed"]').click()
        cy.get('input[name ="sauces"]').should('have.value', "originalRed")
        cy.get('input[name ="name"]').should('have.value', "")
        cy.get('input[name ="name"]').type("Gabby")
        cy.get('input[name ="name"]').should('have.value', "Gabby")
        cy.get("form").submit()

    })
        
})