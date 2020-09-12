describe("Testing the pizza order form", () => {
    beforeEach(() => {
        cy.visit("/")
    })
    it("Fills out the form", () => {
        const name = "Adela Zalewski"
        const address = "324 kjmsbf sujhf";
        const price1 = "$17.99";
    const price2 = "$17.99";
    const price3 = "$17.99";
    

    //check to see if you can fill out the name
    cy.get('[placeholder="Full Name"]').type(name).should('have.value', name)

    //check to see if it can fill out the address
    cy.get('[name="address"]').type(address).should('have.value', address)
    
    //check to see ig it can select multiple checkboxes
    cy.get('[name="chicken"], [name="pineapple"]').check().should('be.checked') //and it passes

    //select a size so the form can be submited
    cy.get('#select-tag').select(`Small ${price1}`).should('have.value', "small")
    
    //check to see if a user can submit the form
    cy.get('form').submit() //true shows that i can get a POST request so it passes AND THE button is being desabled
    })

    
})