describe('Pizza order', () =>{
    beforeEach(() =>{
        crypto.visit('http://localhost:3000/pizza')
    });

    const nameInput = () => cy.get('input[name="name"]');
    const pepperoniInput = () => cy.get('input[name="pepperoni"]');
    const grilledChickenInput = () => cy.get('input[name="grilledChicken"]');
    const greenPepperInput = () => cy.get('input[name="greenPepper"]');
    const pineappleInput = () => cy.get('input[name="pineapple"]');
    const orderButton = () => cy.get('#orderButton');

    it('Test to see if it works', () =>{
        expect(1 +2).to.equal(3);
        expect(3 + 4).not.to.equal(5);
    });

    


})