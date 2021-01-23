// test that you can add text to the box
// test that you can select multiple toppings
// test that you can submit the form

describe('Placing an order', () => {
    it('visits the home page', () => {
        cy.visit('http://localhost:3000')

        cy.contains('Winterfell Eats')
    })

    it('can place an ice pizza order', () => {
        cy.visit('http://localhost:3000')

        // Begin spying on POSTs to our endpoint
        // see https://on.cypress.io/network-requests
        cy.server()
        cy.route('POST', 'https://reqres.in/api/orders').as('pizzaOrder')

        // Visit pizza order page
        cy
            .contains('Ice Pizza')
            .click()

        // Fill out the form
        // ~ Name
        cy
            .get('[data-cy=name-field]')
            .type('Aria Stark')
        // ~ Topping 1
        cy
            .get('[data-cy=icicles-checkbox]')
            .check()
        // ~ Topping 2
        cy 
            .get('[data-cy=snow-checkbox]')
            .check()

        // Submit the form
        cy
            .contains('Submit')
            .click()

        // Check the response returned by our server
        cy.wait('@pizzaOrder').should('have.property', 'status', 201)
        cy.get('@pizzaOrder').should(req => {
            console.log(req)
            expect(req.method).to.equal('POST')
            expect(req.response.body).to.have.property('person', 'Aria Stark')
        })
    })
  })