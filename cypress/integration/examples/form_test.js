/// <reference types="cypress" />

describe('Get the Name input and type a name in it', () =>{

    it('can navigate to the site', ()=>{
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'pizza' )
    })
    
    it('typing in the Name input and checking the input', ()=>{
        cy.get('input[name="name"]').type('sameem hadi')
        .should('have.value', "sameem hadi")
    })
    } )
    

    describe('submit the form',()=>{
        it('can navigate to the site', ()=>{
            cy.visit('http://localhost:3000/pizza')
        })

        it('typing in the Name input and checking the input', ()=>{
            cy.get('input[name="name"]').type('sameem hadi')
        })


        it('choosing pizaa size', ()=>{
            cy.get('select').select('small')
        })

        it("submit the order", ()=> {
            cy.get('button').click()
        })

        it('checking if the order has been submitted', ()=>{
            cy.contains('sameem hadi')
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

// stretch 
    describe("select and unselect all the toppings", ()=>{
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

        it("select pepperoni", ()=>{
            cy.get('[id="pepperoni"]').check()
        })
            //unselecting

        it("unselect chicken", ()=>{
            cy.get('[name="chicken"]').uncheck()
        })

        it("unselect BBQ Meatlovers", ()=>{
            cy.get('[id="bbq"]').uncheck()
        })

        it("unselect hawaiian", ()=>{
            cy.get('[id="hawaiian"]').uncheck()
        })

        it("unselect pepperoni", ()=>{
            cy.get('[id="pepperoni"]').uncheck()
        })
    } )


// navigation stretch 
    describe('can navigate from home page to order pizza page', () =>{

        it('can navigate to the site', ()=>{
            cy.visit('http://localhost:3000')
            cy.url().should('include', '3000' )
        })
        
        it("can use the order pizza button to navigate to order pizza page", ()=> {
            cy.get('button').click()
        })

        it('testing if we are in order pizza page', ()=>{
            cy.url().should('include', 'pizza' )
        })
        
        } )


        describe('can navigate from pizza page to order home page', () =>{

            it('can navigate to the site', ()=>{
                cy.visit('http://localhost:3000/pizza')
            })
            
            it("clicking in home link to go back to home page", ()=>{
                cy.get('a').click()
            })


            it("testing if we landed on the home page", ()=>{
                cy.contains('Lambda Eats')
            })
            
            } )