describe('Testing App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/pizza')
    })

    const textName = () => cy.get('input[name=name]')
    const textInstruct = () => cy.get('input[name=instruct]')
    const size = () => cy.get('select[name=size]')
    const multipleToppings = () => cy.get('input[type=checkbox]')
    const peperoni = () => cy.get('input[name=peperoni]')
    const tomatoes = () => cy.get('input[name=tomatoes]')
    const xtraCheese = () => cy.get('input[name=xtraCheese]')
    const artichoke = () => cy.get('input[name=artichoke]')
    const submitBtn = () => cy.get('#submitBtn')

    it('Typing in textInput', () => {
        textName()
            .should('have.value', '')
            .type('yayasyas')
            .should('have.value', 'yayasyas')
        textInstruct()
            .should('have.value', '')
            .type('yayasyas')
            .should('have.value', 'yayasyas')
        
    })

    it('multipleToppings', () => {
        multipleToppings()
        peperoni().click().should('be.checked')
        tomatoes().click().should('be.checked')
        xtraCheese().click().should('be.checked')
        artichoke().click().should('be.checked')
    })

    describe('Testing Submit Button', () => {
        it('Button Test', () => {
            textName()
                .should('have.value', '')
                .type('yayasyas')
                .should('have.value', 'yayasyas')
            textInstruct()
                .should('have.value', '')
                .type('yayasyas')
                .should('have.value', 'yayasyas')
            size()
                .select('1')
            submitBtn()
                .should('be.enabled')
                .click()
                .should('be.disabled')
        })
    })
})
