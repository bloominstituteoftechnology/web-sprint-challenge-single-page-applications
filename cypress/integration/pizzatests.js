describe('Visits Our Site', function(){
    it('navigates to our main app and then goes to pizza maker', function(){
       cy.visit('index.html')

       cy.contains('Make a Pie!').click()

       cy.url().should('include', '/Pizza')
    })
})
describe('Inputs a name', function(){
    it('Inputs text into the name box', function(){
        cy.get('[data-cy=inputName]').type('Fake Name').should('have.value', 'Fake Name')
    })
})
describe('Picks a size', function(){
    it('Uses the dropdown to select a size of Deep', function(){
        cy.get('.size').select('Deep Dish XXL').should('have.value', 'Deep Dish XXL')
    })
})
describe('Selects a topping', function(){
    it('Selects peppers', function(){
        cy.get('[data-cy=peppersBox]').click().should('have.value', 'on')
    })
})
describe('Selects a topping', function(){
    it('Selects Pineapple', function(){
        cy.get('[data-cy=pineappleBox]').click().should('have.value', 'on')
    })
})
describe('Inputs special instructions', function(){
    it('Inputs call on arrival', function(){
        cy.get('.special').type('Call on arrival').should('have.value', 'Call on arrival')
    })
})
describe('Submit the Data', function(){
    it('Clicks on the submit button', function(){
        cy.get('[data-cy=orderButton]').click()

        cy.get('h1').contains('Fake Name')
    })
})
// describe('Returns Home', function(){
//     it('Goes back to homoe page', function(){
//         cy.contains('Home').click()

//         cy.url().should('include', '/')
//     })
// })