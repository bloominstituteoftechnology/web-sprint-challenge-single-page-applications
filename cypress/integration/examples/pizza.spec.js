describe('Pizza App', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    // helpers to avoid tons of repetition
    const nameInput = () => cy.get('input[name="name"]')
    const pepperoniCheck = () => cy.get('input[name="pepperoni"]')
    const spinachCheck = () => cy.get('input[name="spinach"]')
    const submitBtn = () => cy.get('button[id=submitBtn]')
    const instructions = () => cy.get('input[name="instructions"]')
    const size = () => cy.get('select').select('small')
    // use the 'it' keyword for tests
    it('sanity checks', () => {
      // assertion(s)
      expect(5).to.equal(5)
      expect(1 + 2).to.equal(3)
      expect({}).to.eql({})
      expect({}).to.not.equal({})
    })
  
    it('the proper elements exist', () => {
      // sanity checking that the elements that should exist are there
      nameInput().should('exist')
      pepperoniCheck().should('exist')
      spinachCheck().should('exist')
      instructions().should('exist')
      submitBtn().should('exist')
      size().should('exist')
    })
  
    describe('Filling out inputs', () => {
      
      it('can type inside the inputs', () => {
        nameInput()
          .should('have.value', '')
          .type('Meg Benson')
          .should('have.value', 'Meg Benson')
  
        instructions()
          .should('have.value', '')
          .type('Brendan')
          .should('have.value', 'Brendan')
        
        pepperoniCheck()
          .check()
          .should('be.checked')

        spinachCheck()
          .check()
          .should('be.checked')
      })

      it('User can submit the form data', () => {
        cy.contains(/MegB/).should('not.exist')
        nameInput().type('MegB')
        instructions().type('get here quick')
        spinachCheck().check()
        submitBtn().click()
        size().select("small")
        cy.contains(/MegB/).should('exist')
    })
  })
})