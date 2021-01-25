describe('Menu App', () => {

    beforeEach( () => {
        cy.visit('/')
    })

    const nameInput = () => cy.get('.inputs > :nth-child(1) > input')
    const phoneInput = () => cy.get('.inputs > :nth-child(2) > input')
    const emailInput = () => cy.get('.inputs > :nth-child(3) > input')
    const sizeInput = () => cy.get('select').select('Small')
    const pineappleBox = () => cy.get('#pineapple')
    const pepperoniBox = () => cy.get('#pepperoni')
    const mushroomBox = () => cy.get('.extra-toppings > :nth-child(3)')
    const greenpepperBox= () => cy.get('#greenpepper')
    const submitButton = () => cy.get('button')
    const personName = 'A hungry person'
    const personPhone = '4805559999'
    const personEmail = 'pizzaboi@gmail.com'
    
    


    it('allows user to add new name in name input', () => {
        //Get the Name input and type a name in it
        
        nameInput().type(personName)
          

    })

    


    it('allows user to select multiple toppings', () => {
        
        pineappleBox().click()
        pepperoniBox().click()
        mushroomBox().click()
        greenpepperBox().click()
        sizeInput().select('Small')


    })

    it('allows user to submit the form by meeting schema req', () => {
        
        nameInput().type(personName)
        phoneInput().type(personPhone)
        emailInput().type(personEmail)
        pineappleBox().click()
        pepperoniBox().click()
        mushroomBox().click()
        greenpepperBox().click()
        sizeInput().select('Small')
        submitButton().click()


    })

    //tests complete--functioning properly
})