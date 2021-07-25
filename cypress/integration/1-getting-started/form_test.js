
describe("Pizza App", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    it('sanity test to make sure tests works just a place to say stuff', () => {
        //epect is an assertion
        //there can be many assertions per test
        //though inside the "it" statement (the test),
        //usually those assertions are logically grouped together
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
    })
    it('Playing around with selecting elements', () => {
        // cy.get('input[class="tHeBuTtOn"]').click();
        cy.contains('ORDER YOU').click();
        cy.get('input[name="name"]').type("Putting my words in")
        cy.get('#size-dropdown').select('s')
        cy.get('input[name="pepperoni"]').click();
        cy.get('input[name="peppers"]').click();
        cy.get('input[name="chicken"]').click();
        cy.get('input[name="ham"]').click();
        cy.get('button[id="order-button"]').click();
        
    })
    
    
    });