describe('piizza tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/components/Form')
    })


it('test for sanity', () => {

    cy
    .get('[data-cy=name]')
    .type('Skeletor')
    .should('have.value', 'Skeletor')

    // cy
    // .get('[data-cy=size]')
    // .select('large')
    // .should('have.value', 'large')

    cy
    .get('[data-cy=sauce]')
    .select('bbq')
    .should('have.value', 'bbq')

    cy
    .get('[data-cy=pepperoni]')
    .check()
    .should('be.checked')

    cy.get("[data-cy=instructions]")
    .type("instructions")
    .should("have.value", "instructions");

    cy
    .get('[data-cy=submit]')
    .click()

  })
})
