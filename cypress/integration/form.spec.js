describe('Goes to localhost', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001/')
    })
  
    it('does stuff', () => {
      cy.get('[data-cy="orderLink"]').click()
      cy.get('[data-cy="customer"]').type("Tiffany").should("have.value", "Tiffany")
      cy.get('[data-cy="size"]').select("small").should("have.value", "small")
      cy.get('[data-cy="pepperoniTest"]').check()
      cy.get('[data-cy="sausageTest"]').check()
      cy.get('[data-cy="submit"]').click()
      cy.get('[data-cy="cartLink"]').click()
    })
  }) 