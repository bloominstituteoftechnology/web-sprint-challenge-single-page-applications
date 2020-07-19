describe('form test', () => {
  it('test that the site is navigating properly', () => {
    cy.visit('/')

    cy.get('#nav-help')
    .click()

    cy.get('#nav-home')
    .click()

    cy.get('#nav-pizza')
    .click()

    cy.get('#nav-help')
    .click()

    cy.get('#nav-home')
    .click()
  })

  it('test to make sure the form errors appear accordingly', () => {
    cy.get('#nav-pizza')
    .click()
    
    const name = 'John Smith'
    cy.get('[data-cy=name]')
    .type(name)
    .should('have.value', name)

    cy.get('[data-cy=name]')
    .clear()

    cy.get('#input-error')
    .contains('Name must be at least 2 characters long.')

    const size = 'Large'
    cy.get('[data-cy=select-size]')
    .select(size)
    .should('have.value', size)
    .select('--select a size--')

    cy.get('#select-error')
    .contains('Select a size.')
  })

  it('test that the form is working properly', () => {
    cy.get('#order-button')
    .should('be.disabled')

    const name = 'John Smith'
    cy.get('[data-cy=name]')
    .type(name)
    .should('have.value', name)

    const size = 'Large'
    cy.get('[data-cy=select-size]')
    .select(size)
    .should('have.value', size)

    cy.get('[data-cy=pepperoni]')
    .click()
    .should('not.be.disabled')

    cy.get('[data-cy=sausage]')
    .click()
    .should('not.be.disabled')

    cy.get('[data-cy=mushroom]')
    .click()
    .should('not.be.disabled')

    cy.get('[data-cy=extraCheese]')
    .click()
    .should('not.be.disabled')

    const instructions = 'Leave it in the oven overnight. Thanks!'
    cy.get('[data-cy=specialInstructions]')
    .type(instructions)
    .should('have.value', instructions)

    cy.get('#order-button')
    .should('not.be.disabled')
    .click()
  })
})