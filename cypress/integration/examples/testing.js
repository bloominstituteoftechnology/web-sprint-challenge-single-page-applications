describe("App", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("sanity check", () => {
    
      expect(2 + 2).to.equal(4);
      expect(2 + 2).not.to.equal(5);
    });
 
    it("sanity check 2", () => {
      expect([1, 2, 3].length).to.equal(3);
    });
  const textarea = ()=> cy.get('[name="text"]');
  const size = ()=> cy.get ('[name="size"]');
  const submitButton = ()=> cy.get ('#submit-btn');
  });
  if("input fields rendering", () => {
    textArea().should("exist");
   size().should("exist");
   submitButton().should("exist");
});

 