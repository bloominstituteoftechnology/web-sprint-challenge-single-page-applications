describe('Visits Our Site', function(){
    it('navigates to our main app and then goes to pizza maker', function(){
       cy.visit('index.html')

       cy.contains('Make a Pie!').click()

       cy.url().should('include', '/Pizza')
    })
})