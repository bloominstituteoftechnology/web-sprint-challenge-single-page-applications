describe('Can add text to box', () =>{

    it('can navigate to the site', ()=>{
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'pizza' )
    })

    it('typing in the Name input and checking the input', ()=>{
        cy.get('input[name="name"]').type('Jimmy Ho')
        .should('have.value', "Jimmy Ho")
    })
    } )


    describe('submit the form',()=>{
        it('can navigate to the site', ()=>{
            cy.visit('http://localhost:3000/pizza')
        })

        it('typing in the Name input and checking the input', ()=>{
            cy.get('input[name="name"]').type('Jimmy Ho')
        })


        it('choosing pizaa size', ()=>{
            cy.get('select').select('small')
        })

        it("submit the order", ()=> {
            cy.get('button').click()
        })

        it('checking if the order has been submitted', ()=>{
            cy.contains('Jimmy Ho')
            cy.contains('small')
        })

    })


    describe("select multiple toppings", ()=>{
        it('can navigate to the site', ()=>{
            cy.visit('http://localhost:3000/pizza')
        })

        it("select chicken", ()=>{
            cy.get('[name="chicken"]').check()
        })

        it("select BBQ Meatlovers", ()=>{
            cy.get('[id="bbq"]').check()
        })

        it("select hawaiian", ()=>{
            cy.get('[id="hawaiian"]').check()
        })
    } )