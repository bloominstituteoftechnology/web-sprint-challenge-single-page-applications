describe('pizza tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/components/Form')
    })


it('test for sanity', () => {

    cy
    .get('[data-cy=name]')
    .type('Skeletor')
    .should('have.value', 'Skeletor')

    cy
    .get('[data-cy=size]')
    .select('small')
    .should('have.value', 'small')

    cy
    .get('[data-cy=sauce]')
    .select('bbq')
    .should('have.value', 'bbq')


    cy.get("[data-cy=instructions]")
    .type("instructions")
    .should("have.value", "instructions");

    cy
    .get('[data-cy=submit]')
    .click()

  })
})