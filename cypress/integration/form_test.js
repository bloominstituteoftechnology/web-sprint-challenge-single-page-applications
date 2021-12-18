describe('Form Validation', () => {
    it('performing tests', () =>{
        cy.visit('localhost:3000/pizza');
        cy.get('input[name=name').type('Andrew Gary').should('have.value', 'Andrew Gary');
        cy.get('input[name=pepperoni').click().should('have.value', 'on');
        cy.get('input[name=sausage').click().should('have.value', 'on');
        cy.get('input[name=canadianbacon').click().should('have.value', 'on');
        cy.get('input[name=spicysausage').click().should('have.value', 'on');
        cy.get('input[name=size').select('small');
        cy.get('input[name=sauce').select('Original Red');
        cy.get('input[id=order-button').click()
    })
    
    // it('', () => {
    //     cy.visit('localhost:3000');
    //     cy.get('input[name=name').type('Andrew Gary').should('have.value', 'Andrew Gary');
    //     cy.get('input[name=email').type('Andrew.gary91@gmail.com').should('have.value', 'Andrew.gary91@gmail.com');
    //     cy.get('input[type=password').type('dontkickmydog111').should('have.value', 'dontkickmydog111');
    //     cy.get('input[name=userAgreement').click().should('have.value', 'true').click().should('have.value', 'false').click().should('have.value', 'true');
    //     cy.get('button').click();
    // })
    // it('checks to see if inputs equal to what is typed into them', () => {
    //     cy.visit('localhost:3000');
    //     cy.get('input[name=name').type('Andrew Gary').should('have.value', 'Andrew Gary');
    //     cy.get('input[name=email').type('Andrew.gary91@gmail.com');
    //     cy.get('input[type=password').type('Kickflip111');
    //     cy.get('input[name=userAgreement').click();
    //     cy.get('button').click();
    // })
})