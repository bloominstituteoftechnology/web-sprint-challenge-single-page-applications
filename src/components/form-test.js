describe('Form app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    const textInput = () => cy.get('input[name="name"]');
    

    it('the proper elements are showing', () => {
       textInput().should('exist');
        })

        
       it('can type in the inputs', () => {
            textInput()
               .should('have.value', '')
                .type('cheyenne done it!')
               .should('have.value', 'cheyenne done it!');
        })


    })




