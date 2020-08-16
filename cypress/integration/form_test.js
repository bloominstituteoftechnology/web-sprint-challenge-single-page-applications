describe('Testing Pizza Form', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000/pizza');
    })
    it('checking Pizza Form Functionality', () => {
        //checking typing in name input
        cy.get('[data-cy = name]').type("Daniel").should('have.value','Daniel');
        //checking typing in special directions
        cy.get('[data-cy = special]').type("Get that shit outaa here").should('have.value',"Get that shit outaa here");
        //checking selecting from drop down
        cy.get('[data-cy = size]').select("Medium").should('have.value','Medium');
        //testing checking multiple toppings
        cy.get('[data-cy = peperoni]').check().should('be.checked');
        cy.get('[data-cy = sausage]').check().should('be.checked');
        cy.get('[data-cy = turtleNeck]').check().should('be.checked');
        cy.get('[data-cy = anchovies]').check().should('be.checked');
        //checking Submit
        cy.get('[data-cy = submit]').click();
        
    });

})