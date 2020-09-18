describe('form tests', () =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/form')
    })
    const nameInput = () => cy.get('input[name="name"]');
    const pepperoni = () => cy.get('input[name="pepperoni"]');
    const peppers = () => cy.get('input[name="peppers"]');
    const submitButton = () => cy.get(`button[id="submitbutton"]`)
       it('making sure the app works', () =>{
        cy.contains(/test/).should('not.exist')
        nameInput()
        .should('have.value', '')
        .type('test')
        .should('have.value', 'test')

        pepperoni().click()
        peppers().click()
        pepperoni().should('be.checked')
        peppers().should('be.checked')

        submitButton().click()
        cy.contains(/test/).should('exist')

    })
    })